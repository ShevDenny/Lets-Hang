import { useState } from "react"
import { useHistory } from "react-router-dom"

function SignUp({ currentUser, setCurrentUser }) {
  const [name, setName] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [errors, setErrors] = useState(null)

  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    const user = {
      name,
      user_name: userName,
      password,
      email
    }
    console.log(user)
    const res = await fetch(`http://localhost:3000/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    const userData = await res.json()
    if (res.ok){
      console.log(userData)
      localStorage.setItem("user_id", userData.id)
      setCurrentUser(userData)
      history.push('/')
    } else {
      setErrors(userData.message)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Create an account:</h2>
        <input type="text" placeholder="Your name here..." value={name} name="Name" onChange={(e) => setName(e.target.value)}></input>
        <input type="text" placeholder="Choose a username..." value={userName} name="UserName" onChange={(e) => setUserName(e.target.value)}></input>
        <input type="password" placeholder="Password..." value={password} name="password" onChange={(e) => setPassword(e.target.value)}></input>
        <input type="email" placeholder="Your email..." value={email} name="email" onChange={(e) => setEmail(e.target.value)}></input>
        <input type="submit" value="Create Account"></input>
        {errors ? errors.map(error => <div>{error}</div>) : null}
      </form>
    </div>
  );
  }
  
  export default SignUp;