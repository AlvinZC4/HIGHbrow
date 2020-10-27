import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./pages/Login"

function App() {

  const [user, setUser] = useState("")

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
