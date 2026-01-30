import { useState } from "react"
import api from "../api/axios"
import "./auth.css"

export default function Register() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const submit = async () => {
    const res = await api.post("/auth/register", { username, password })
    localStorage.setItem("token", res.data.token)
    window.location.href = "/upload"
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Register</h2>
        <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <button onClick={submit}>Register</button>
        <p>
          Already have an account? <a href="/">Login</a>
        </p>
      </div>
    </div>
  )
}
