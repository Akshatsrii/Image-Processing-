const router = require("express").Router()
const auth = require("../middleware/auth.middleware")
const upload = require("../middleware/upload.middleware")
const controller = require("../controllers/image.controller")

router.post("/", auth, upload.single("image"), controller.upload)
router.post("/:id/transform", auth, controller.transform)
router.get("/", auth, controller.list)

module.exports = router
