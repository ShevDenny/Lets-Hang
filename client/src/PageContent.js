import NavBar from './NavBar'
import MainContent from './MainContent'
import { useState, useEffect } from 'react'
// import LogIn from './LogIn'

function PageContent() {

  const [currentUser, setCurrentUser] = useState({})
  const [errors, setErrors] = useState({})


  useEffect(() => {
    const userId = localStorage.getItem("user_id")
    fetch(`http://localhost:3000/re_auth?user_id=${userId}`)
    .then(res => res.json())
    .then(data => {
      if (data.errors){
        setErrors(data)
      }else {
        setCurrentUser(data)
      }
    })
  }, [])

  return (
    <div>
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <MainContent currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    </div>
  );
  }
  
  export default PageContent;