const Image = require("../models/image.model")
const transformImage = require("../services/imageTransform.service")
const sharp = require("sharp")

exports.upload = async (req, res) => {
  const meta = await sharp(req.file.path).metadata()

  const image = await Image.create({
    userId: req.user,
    originalPath: req.file.path,
    metadata: meta,
    transformed: []
  })

  res.json(image)
}

exports.transform = async (req, res) => {
  const image = await Image.findById(req.params.id)
  if (!image) return res.status(404).json({ msg: "Not found" })

  const output = await transformImage(image.originalPath, req.body)

  image.transformed.push({ path: output })
  await image.save()

  res.json({ transformedPath: output })
}

exports.list = async (req, res) => {
  const images = await Image.find({ userId: req.user })
  res.json(images)
}
