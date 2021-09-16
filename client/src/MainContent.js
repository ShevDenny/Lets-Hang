import { Route, Switch } from 'react-router-dom'
import { useState } from 'react'
import Home from './Home'
import Search from './Search'
import FavSpots from './FavSpots'
import MyHangs from './MyHangs'
import LogIn from './LogIn'
import SignUp from './SignUp'
import styled from "styled-components"

const MainStyle = styled.div`
    padding: 15px;
    
`

function MainContent({ setShowLogin, showLogin, currentUser, setCurrentUser }) {

    const googleAPI = 
    const clientId = 
    const clientSecret = 
    const [fav, setFav] = useState(false)
    const [myHangs, setMyHangs] = useState([])


    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today =  yyyy + mm + dd;

    return (
      <MainStyle>
        <Switch>
            <Route exact path="/">
                <Home currentUser={currentUser} setCurrentUser={setCurrentUser} googleAPI={googleAPI} clientId={clientId} clientSecret={clientSecret} today={today} fav={fav} setFav={setFav}/>
            </Route>
            <Route path="/search">
                <Search currentUser={currentUser} setCurrentUser={setCurrentUser} googleAPI={googleAPI} clientId={clientId} clientSecret={clientSecret} today={today} fav={fav} setFav={setFav}/>
            </Route>
            <Route path="/fav_spots">
                <FavSpots fav={fav} setFav={setFav} currentUser={currentUser}/>
            </Route>
            <Route path="/my_hangs">
                <MyHangs currentUser={currentUser} setMyHangs={setMyHangs} myHangs={myHangs}/>
            </Route>
            <Route path="/log_in" >
                <LogIn showLogin={showLogin} setShowLogin={setShowLogin} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            </Route>
            <Route path="/sign_up" >
                <SignUp currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            </Route>
        </Switch>
      </MainStyle>
    );
  }
  
  export default MainContent;