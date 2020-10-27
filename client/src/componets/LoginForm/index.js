import React from "react"

function LoginForm(props) {
    return(
      <form className="login">
          <div className="form-group">
            <label for="username">Username</label>
            <input
                type="text"
                name="username"
                value={props.username}
                className="form-control"
                placeholder="Enter Username"
            />
          </div>
          <div className="form-group">
            <label for="password">password</label>
            <input
                type="text"
                name="password"
                value={props.password}
                className="form-control"
                placeholder="Enter Password"
            />
          </div>
          <div>
              <button onClick={props.handleLoginSubmit} className="btn btn-primary"></button>
          </div>
      </form>
    )
}

export default LoginForm