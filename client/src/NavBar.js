import { NavLink } from 'react-router-dom'

function NavBar({ setCurrentUser, currentUser}) {

  function handleLogOut(){
    // async function logout(){
    //   const res = await fetch('/logout', {method: 'DELETE'})
    //   if(res.ok){
    //     setCurrentUser({})
    //   }
    // }
    // logout()
    localStorage.removeItem("user_id")
    setCurrentUser({})
  }
    return (
      <div id="navbar">
        <h1>Hello, {currentUser.user_name}</h1>
        <NavLink className="links" to="/">Home</NavLink>
        <NavLink className="links" to="/search">Search</NavLink>
        <NavLink className="links" to="/fav_spots">FavSpots</NavLink>
        <NavLink className="links" to="/my_hangs">My Hangs</NavLink>
        {Object.keys(currentUser).length === 0 ? 
        <>
          <NavLink className="links" to="/log_in">Log In</NavLink>
          <NavLink className="links" to="/sign_up">Sign Up</NavLink>
        </>
        :
        <NavLink className="links" to="/" onClick={handleLogOut}>Log Out</NavLink>
        }
        
        
      </div>
    );
  }
  
  export default NavBar;