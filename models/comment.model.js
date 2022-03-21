const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    body: { type: String, required: true },
    userId: { type: mongoose.Schema.Type.ObjectId, required: true },
    bookId: { type: mongoose.Schema.Type.ObjectId, required: true },
  },
  { versionKey: false, timestamps: true }
);

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;