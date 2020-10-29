import React from "react"

function LoginForm(props) {
  console.log("props", props)
    return(
      <form className="login">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
                type="text"
                name="username"
                value={props.loginForm.username}
                onChange={props.onChange}
                className="form-control"
                placeholder="Enter Username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
                type="text"
                name="password"
                value={props.loginForm.password}
                onChange={props.onChange}
                className="form-control"
                placeholder="Enter Password"
            />
          </div>
          <div>
              <button onClick={props.onClick} className="btn btn-primary">Submit</button>
          </div>
      </form>
    )
}

export default LoginForm