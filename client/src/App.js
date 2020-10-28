import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./pages/Login";
import API from "./utils/API"

function App() {

  const [user, setUser] = useState("")
  const [loginForm, setLoginForm] = useState("")

  function handleInputChange(e) {
      const {name, value} = e.target
      setLoginForm({...loginForm, [name]: value})
  }

  function handleLoginSubmit(e) {
      e.preventDefault()
      if (loginForm.username && loginForm.password) {
          checkUserCreds()
          console.log(user)
      }


  }

  function checkUserCreds() {
      API.getUsername()
          .then(res => {
              if (!res.username) {
                  console.log("Does not match any username")
              }
              else if (res.password ===! loginForm.password) {
                  console.log("password incorrect")
              }
              else {
                  setUser(res.username)
              }
          }
              )
          .catch(err => console.log(err))
  }



  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} 
            name={loginForm.name}
            value={loginForm.value}
            onChange={handleInputChange} 
            onClick={handleLoginSubmit}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
