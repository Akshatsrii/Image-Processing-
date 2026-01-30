const sharp = require("sharp")
const path = require("path")

module.exports = async (input, transforms) => {
  let img = sharp(input)

  if (transforms.resize)
    img = img.resize(transforms.resize.width, transforms.resize.height)

  if (transforms.rotate)
    img = img.rotate(transforms.rotate)

  if (transforms.filters?.grayscale)
    img = img.grayscale()

  const outPath = path.join(
    "src/uploads/transformed",
    Date.now() + ".jpg"
  )

  await img.toFile(outPath)
  return outPath
}
