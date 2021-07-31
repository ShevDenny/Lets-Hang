import NavBar from './NavBar'
import MainContent from './MainContent'
import { useState } from 'react'

function PageContent() {

  const [currentUser, setCurrentUser] = useState([])
  

  return (
    <div>
      <NavBar />
      <MainContent currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    </div>
  );
  }
  
  export default PageContent;