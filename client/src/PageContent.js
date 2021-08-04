import NavBar from './NavBar'
import MainContent from './MainContent'
import { useState } from 'react'
// import LogIn from './LogIn'

function PageContent() {

  const [currentUser, setCurrentUser] = useState([])
  const [user, setUser] = useState(null)
  
  // if (!user) return <LogIn />

  return (
    <div>
      <NavBar user={user} setUser={setUser} currentUser={currentUser} />
      <MainContent currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    </div>
  );
  }
  
  export default PageContent;