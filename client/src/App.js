import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginForm from './componets/LoginForm';
import Login from "./pages/Login";
import API from "./utils/API"

function App() {

  const [user, setUser] = useState("")
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: ""
  })

  useEffect( () => {
    console.log("user state", user)
  }, [user])

  function handleInputChange(e) {
      const {name, value} = e.target
      setLoginForm({...loginForm, [name]: value})
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
                  console.log("Does not match any username")
              }
              else if (res.data.password !== loginForm.password) {
                  console.log("password incorrect")
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
        <Switch>
          <Route exact path="/">
            <LoginForm 
              loginForm={loginForm}
              onChange={handleInputChange} 
              onClick={handleLoginSubmit}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
