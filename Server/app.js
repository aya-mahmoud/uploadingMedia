const MediaType = require("./schema/enums");
const { PORT } = require("./config.js");
const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const path = require("path");
const connectDB = require("./db");
const mongoose = require("mongoose");
require("./schema/posts.ts");
const Post = mongoose.model("Post");

// Connect to the database
connectDB();

//---------------multer--------------------
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        if (file.mimetype.startsWith("image")) cb(null, "./images");
        else if (file.mimetype.startsWith("video")) cb(null, "./videos");
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname);
    },
});

const upload = multer({ storage: storage });

app.post("/uploadPost", upload.single("media"), async(req, res) => {
    const { file } = req;
    const { filename } = file;

    if (!file) return res.status(400).send("No file uploaded.");

    // Check if the file is an image based on MIME type or file extension
    const isImage =
        file.mimetype.startsWith("image") ||
        /\.(jpg|jpeg|png|gif)$/i.test(file.originalname);

    // Check if the file is a video based on MIME type or file extension
    const isVideo =
        file.mimetype.startsWith("video") ||
        /\.(mp4|mov|avi)$/i.test(file.originalname);

    const fileType = isImage ?
        MediaType.IMAGE :
        isVideo ?
        MediaType.VIDEO :
        MediaType.OTHER;

    try {
        const post = new Post({ media: filename, mediaType: fileType });
        await Post.create(post);

        res.status(201).send({ status: "ok" });
    } catch (error) {
        res.json({ status: error });
    }
});

app.get("/getPosts", async(req, res) => {
    try {
        Post.find({}).then((data) => {
            res.send({ status: "ok", data: data });
        });
    } catch (error) {}
});

app.get("/:mediaType/:fileName", (req, res) => {
    const { mediaType, fileName } = req.params;
    let directory = "";

    if (mediaType === "images") directory = "images";
    else if (mediaType === "videos") directory = "videos";
    else return res.status(404).send("Invalid type");

    // Construct the file path
    const filePath = path.join(__dirname, directory, fileName);

    // Send the file as the response
    res.sendFile(filePath);
});

app.put("/reactToPost/:postId", async(req, res) => {
    const postId = req.params.postId;
    try {
        const post = await Post.findById(postId);
        const updatedPost = await Post.findOneAndUpdate({ _id: postId }, { like: !post.like }, { new: true });
        res.status(200).send(updatedPost);
    } catch (error) {
        res.json({ status: error });
    }
});

app.listen(PORT, () => {
    console.log(`...Listening on port ${PORT}`);
});