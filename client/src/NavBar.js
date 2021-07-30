import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
      <div id="navbar">
        <NavLink className="links" to="/">Home</NavLink>
        <NavLink className="links" to="/search">Search</NavLink>
        <NavLink className="links" to="/fav_spots">FavSpots</NavLink>
        <NavLink className="links" to="/my_hangs">My Hangs</NavLink>
        <NavLink className="links" to="/log_in">Log In</NavLink>
        <NavLink className="links" to="/sign_up">Sign Up</NavLink>
        <NavLink className="links" to="/">Log Out</NavLink>
      </div>
    );
  }
  
  export default NavBar;