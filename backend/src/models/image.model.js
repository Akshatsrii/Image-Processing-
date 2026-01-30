const mongoose = require("mongoose")

const imageSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  originalPath: String,
  transformed: Array,
  metadata: Object
})

module.exports = mongoose.model("Image", imageSchema)
