const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    content: String,
    author: String,
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post"  // Référence au modèle Post, assurez-vous que c'est le même que celui que vous avez défini pour votre modèle Post
    }

} , {
  timestamps: true
})

const Comment = mongoose.model("Comment", commentSchema);

module.exports = { Comment };