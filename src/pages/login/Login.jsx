import React, { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.scss'
import { toast } from 'react-toastify'
import axios from '../../api'


const Login = () => {
  let navigate = useNavigate()
  const [username, setUsername] = useState("kminchelle")
  const [password, setPassword] = useState("0lelplR") 
  const [loading, setLoading] = useState(false)


  const handleLogin = e => {
    e.preventDefault()
    let user = { username, password }
    console.log(user);

    axios
      .post('/auth/login', user)
      .then(res => {
        console.log(res);
        toast.success("welcome")
        localStorage.setItem("x-auth-token", res.data.token)
        navigate("/admin")
      })
      .catch(err => {
        console.log(err);
        toast.error("username or password is incorrect")
      })
      .finally(() => setLoading(false))
  }
  return (
    <div className='login'>


      <h2>Log in</h2>

      <form action="" onSubmit={handleLogin}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button disabled={loading}>{loading ? "Loading..." : "Log in"}</button>
      </form>

      <div className="login__btns">
        <button onClick={() => navigate("/")}>Go Home</button>
        <button onClick={() => navigate(-1)}>Go Back</button></div>
    </div>
  )
}

export default memo(Login)