import React, { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.scss'
import { toast } from 'react-toastify'
import axios from '../../api'
import login from '../../assets/login.png'


const Login = () => {
  let navigate = useNavigate()
  const [username, setUsername] = useState("kminchelle")
  const [password, setPassword] = useState("0lelplR")



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
    <section className='login'>
      <div className="container">
        <div className="login__container">
          <div className="login__img">
            <img src={login} alt="" />
          </div>
          <form action="" onSubmit={handleLogin} className='login-form'>
            <h2>Log in to Exclusive</h2>
            <p className="login__text" >Enter your details below</p>
            <div className="input-group">
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Email or Phone Number" className="input__username" />
            </div>
            <div className="input__group">
              <input type="password" className="input__password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="login" >Log in</button>
          </form>


        </div>


      </div>
    </section>
  )
}

export default memo(Login)
