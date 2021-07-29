import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Search from './Search'
import FavSpots from './FavSpots'
import MyHangs from './MyHangs'
import LogIn from './LogIn'
import SignUp from './SignUp'

function MainContent() {
    return (
      <div>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/search">
                <Search />
            </Route>
            <Route path="/fav_spots">
                <FavSpots />
            </Route>
            <Route path="/my_hangs">
                <MyHangs />
            </Route>
            <Route path="/log_in">
                <LogIn />
            </Route>
            <Route path="/sign_up">
                <SignUp />
            </Route>
        </Switch>
      </div>
    );
  }
  
  export default MainContent;