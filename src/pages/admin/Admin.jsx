import React from 'react'
import { useNavigate } from 'react-router-dom'

function Admin() {
    let navigate = useNavigate()
    const handleLoginOut = ()=>{
        navigate("/register")
        localStorage.clear("x-auth-token")
    }
  return (
    <div>
      <h2>Admin</h2>
      <button onClick={handleLoginOut}>Log out</button>
      
    </div>
  )
}

export default Admin
