const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

app.use("/auth", require("./routes/auth.routes"))
app.use("/images", require("./routes/image.routes"))
app.use("/src/uploads", express.static("src/uploads"))


module.exports = app
