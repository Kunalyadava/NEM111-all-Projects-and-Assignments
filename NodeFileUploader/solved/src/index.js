const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();

// Serve index.html on root path '/'
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Set storage engine and upload middleware using Multer
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

// Route for file upload
app.post("/upload", upload.single("avatar"), function (req, res) {
  res.json({ message: "file uploaded successfully" });
});

module.exports = app;
