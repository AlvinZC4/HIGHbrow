import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import Login from "./pages/Login";
import NewUser from './pages/NewUser';
import NavBar from "./componets/NavBar"
import SigninButton from "./componets/SigninButton"
import Home from "./pages/home"
import Wishlist from "./pages/Wishlist"
import FindBooks from "./pages/FindBooks"
import API from "./utils/API"

function App() {
	const history = useHistory();

	const [user, setUser] = useState('');
	const [loginForm, setLoginForm] = useState({
		username: '',
		password: '',
	});

	useEffect(() => {
		console.log('user state', user);
	}, [user]);

  useEffect(() => {
    console.log("user state", user)
  }, [user])

  function handleInputChange(e) {
    const { name, value } = e.target
    setLoginForm({ ...loginForm, [name]: value })
  }

  function handleLoginSubmit(e) {
    e.preventDefault()
    if (loginForm.username && loginForm.password) {
      checkUserCreds()
    }
    else {
      console.log("enter username and password")
    }
  }

				

  function checkUserCreds() {
    API.getUsername(loginForm)
      .then(res => {
        console.log("Running checkUserCreds")
        console.log(res)

        if (!res.data.username) {
          console.log("Username or Password does is incorrect")
        }
        else {
          console.log("Setting username in checkUserCreds")
          setUser(res.data.username)
        }
      }
      )
      .catch(err => console.log(err))
  }

  return (
    <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/login">
          <Login
                loginForm={loginForm}
                onChange={handleInputChange}
                onClick={handleLoginSubmit}
                user={user}
              />
          </Route>
          <Route exact path="/wishlist">
            <Wishlist user={user}/>
          </Route>
          <Route exact path="/getbooks">
            <FindBooks
              user={user}
            />
          </Route>
          <Route exact path="/newuser" component={NewUser}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
