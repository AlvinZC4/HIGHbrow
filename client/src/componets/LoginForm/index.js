import React from "react"

function LoginForm(props) {
    return(
      <form className="login">
          <div className="form-group">
            <label for="username">Username</label>
            <input
                type="text"
                name={props.name}
                value={props.username}
                onChange={props.handleInputChange}
                className="form-control"
                placeholder="Enter Username"
            />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
                type="text"
                name={props.name}
                value={props.password}
                onChange={props.handleInputChange}
                className="form-control"
                placeholder="Enter Password"
            />
          </div>
          <div>
              <button onClick={props.handleLoginSubmit} className="btn btn-primary">Submit</button>
          </div>
      </form>
    )
}

export default LoginForm