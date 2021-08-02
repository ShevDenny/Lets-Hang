import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Search from './Search'
import FavSpots from './FavSpots'
import MyHangs from './MyHangs'
import LogIn from './LogIn'
import SignUp from './SignUp'

function MainContent({ setShowLogin, showLogin, currentUser, setCurrentUser }) {

    const googleAPI = 'AIzaSyDBKr45Sm84Ap0qMysk_H8HkbcWJvY8y_U'
    const clientId = 'VZ0PBMG1GMGUGWKN3MKCIN3DN35D0R540KM1ZEH4Z52F1Z2P'
    const clientSecret = '1Q5RQAXSW4ATOJE52IQ5ZRU1NMNWIEIRULPXYNX4W1XFT305'
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today =  yyyy + mm + dd;

    return (
      <div>
        <Switch>
            <Route exact path="/">
                <Home currentUser={currentUser} setCurrentUser={setCurrentUser} googleAPI={googleAPI} clientId={clientId} clientSecret={clientSecret} today={today}/>
            </Route>
            <Route path="/search">
                <Search googleAPI={googleAPI} clientId={clientId} clientSecret={clientSecret} today={today}/>
            </Route>
            <Route path="/fav_spots">
                <FavSpots />
            </Route>
            <Route path="/my_hangs">
                <MyHangs />
            </Route>
            <Route path="/log_in" >
                <LogIn showLogin={showLogin} setShowLogin={setShowLogin} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            </Route>
            <Route path="/sign_up" >
                <SignUp currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            </Route>
        </Switch>
      </div>
    );
  }
  
  export default MainContent;