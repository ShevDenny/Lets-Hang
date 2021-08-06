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
    alert("Lets hang soon!")
  }
    return (
      <div id="navbar">
        
        <NavLink className="links" to="/">Home</NavLink>
        <NavLink className="links" to="/search">Search</NavLink>

        {Object.keys(currentUser).length === 0 ? 
        <>
          <NavLink className="login" to="/log_in">Log In</NavLink>
          <NavLink className="login" to="/sign_up">Sign Up</NavLink>
        </>
        :
        <>
        <div><NavLink className="links" to="/fav_spots">FavSpots</NavLink>
        <NavLink className="links" to="/my_hangs">My Hangs</NavLink>
        <NavLink className="login" to="/" onClick={handleLogOut}>Log Out</NavLink>
        </div>
        <h2 className="name">Hello, {currentUser.name}</h2>
        </>
        }
        
        
      </div>
    );
  }
  
  export default NavBar;