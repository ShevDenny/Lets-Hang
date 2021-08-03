import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Search from './Search'
import FavSpots from './FavSpots'
import MyHangs from './MyHangs'
import LogIn from './LogIn'
import SignUp from './SignUp'

function MainContent({ currentUser, setCurrentUser }) {

    const googleAPI = 'AIzaSyCwxN5t-OtzvQibbiZzjiA4ZBPUT8_2WRM'
    const clientId = 'GAIENZ024HLCHRJLL4J52QH3EMACC2R51LPOZE2LYFU13YD0'
    const clientSecret = 'MXAJQ25IDOAIJR3MTY0ZNXCVITZZD4ZWA411LHR5TCS0Y2QZ'
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today =  yyyy + mm + dd;

    return (
      <div>
        <Switch>
            <Route exact path="/">
                <Home googleAPI={googleAPI} clientId={clientId} clientSecret={clientSecret} today={today}/>
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
            <Route path="/log_in" currentUser={currentUser} setCurrentUser={setCurrentUser}>
                <LogIn />
            </Route>
            <Route path="/sign_up" currentUser={currentUser} setCurrentUser={setCurrentUser}>
                <SignUp />
            </Route>
        </Switch>
      </div>
    );
  }
  
  export default MainContent;