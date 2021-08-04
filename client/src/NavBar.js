import { NavLink } from 'react-router-dom'

function NavBar({user, setUser, currentUser}) {

  function handleLogOut(){
    async function logout(){
      const res = await fetch('/logout', {method: 'DELETE'})
      if(res.ok){
        setUser(null)
      }
    }
    logout()
  }
    return (
      <div id="navbar">
        <h1>Hello, {currentUser.user_name}</h1>
        <NavLink className="links" to="/">Home</NavLink>
        <NavLink className="links" to="/search">Search</NavLink>
        <NavLink className="links" to="/fav_spots">FavSpots</NavLink>
        <NavLink className="links" to="/my_hangs">My Hangs</NavLink>
        {!user ? 
        <NavLink className="links" to="/log_in">Log In</NavLink>
        :
        <NavLink className="links" to="/" onClick={handleLogOut}>Log Out</NavLink>
        }
        <NavLink className="links" to="/sign_up">Sign Up</NavLink>
        
      </div>
    );
  }
  
  export default NavBar;