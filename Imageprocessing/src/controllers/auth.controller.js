const User = require("../models/user.model")
const bcrypt = require("bcryptjs")
const generateToken = require("../config/jwt")

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body

    if (!username || !password)
      return res.status(400).json({ msg: "Missing fields" })

    const exists = await User.findOne({ username })
    if (exists)
      return res.status(400).json({ msg: "User already exists" })

    const hash = await bcrypt.hash(password, 10)
    const user = await User.create({ username, password: hash })

    res.json({ user, token: generateToken(user._id) })
  } catch (err) {
    res.status(500).json({ msg: "Register failed" })
  }
}

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body

    if (!username || !password)
      return res.status(400).json({ msg: "Missing fields" })

    const user = await User.findOne({ username })
    if (!user)
      return res.status(400).json({ msg: "User not found" })

    const ok = await bcrypt.compare(password, user.password)
    if (!ok)
      return res.status(400).json({ msg: "Wrong password" })

    res.json({ user, token: generateToken(user._id) })
  } catch (err) {
    res.status(500).json({ msg: "Login failed" })
  }
}
