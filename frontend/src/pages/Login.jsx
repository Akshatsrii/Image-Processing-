import { useState } from "react"
import api from "../api/axios"
import "./auth.css"

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const submit = async () => {
    const res = await api.post("/auth/login", { username, password })
    localStorage.setItem("token", res.data.token)
    window.location.href = "/dashboard"
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <button onClick={submit}>Login</button>
        <p>
          Don’t have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  )
}
