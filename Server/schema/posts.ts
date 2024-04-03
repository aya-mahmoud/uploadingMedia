const mongoose = require("mongoose");
const MediaType = require("./enums");

const PostSchema = new mongoose.Schema(
  {
    media: { type: String, default: "" },
    like: { type: Boolean, default: false },
    mediaType: {
      type: Number,
      enum: Object.values(MediaType),
      default: MediaType.OTHER,
    },
  },
  { collection: "Post" }
);

module.exports = mongoose.model("Post", PostSchema);
