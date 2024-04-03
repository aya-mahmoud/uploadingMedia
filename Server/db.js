const mongoose = require("mongoose");
const { DB_CONNECTION_STRING } = require("./config.js");

//mongodb connection----------------------------------------------
const connectDB = async() => {
    const mongoUrl = DB_CONNECTION_STRING;

    await mongoose
        .connect(mongoUrl)
        .then(() => {
            console.log("Database Connected Successfully!");
        })
        .catch((e) => console.error("Error connecting to database:", e));
};

module.exports = connectDB;