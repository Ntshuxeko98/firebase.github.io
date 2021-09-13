import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import UserDetails from './UserDetails';
import Userform from './Userform';
import News from './News';
import Home from './Home';


const Menu = () => {
    return(
        <>
        <Router>
            <div>
                <nav className="Navigation">
                <ul>
                    <li>
                        <Link to="/">Register</Link>
                    </li>
                    <li>
                        <Link to="/UserDetails">Users</Link>
                    </li>
                    <li>
                        <Link to="/News">News</Link>
                    </li>
                </ul>
                </nav>
                <Switch>
                    <Route path="/UserDetails">
                        <UserDetails/>
                    </Route>
                    <Route path="/News">
                        <News/>
                    </Route>
                    <Route path="/">
                        <Userform/>
                    </Route>
                </Switch>

            </div>
        </Router>
        </>
    )
}

export default Menu;