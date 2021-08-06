import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'





function LogIn({setShowLogin, currentUser, setCurrentUser}) {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState(null)

  const history = useHistory()

  async function handleSubmit(e){
    e.preventDefault()
    const user = {
      user_name: userName,
      password
    }

    const res = await fetch(`http://localhost:3000/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user})
    })
    const userData = await res.json()
    if(userData.id){
      localStorage.setItem('user_id', userData.id)
      console.log(userData)
      setCurrentUser(userData)
      

      history.push('/')
    } else {
      setErrors(userData.message)
    }
  }


  return (
    <div className="login">
      

      <form onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <input
          type="text" 
          placeholder="User Name" 
          value={userName} 
          name="username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password" 
          placeholder="Password" 
          value={password}
          name="password" 
          onChange={(e) => setPassword(e.target.value)}
        />
        <input submit id="submit" type="submit" value="Log in" />
        {errors ? errors.map(error => <div>{error}</div>) : null}
      </form>
      
    </div>
  );
}
  
export default LogIn;