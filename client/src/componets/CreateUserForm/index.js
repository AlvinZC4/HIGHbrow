import React from "react"
import {useHistory} from "react-router-dom"

function CreateUserForm(props) {

    const history = useHistory()

    function redirect(event) {
      event.preventDefault()
      history.push("/wishlist")
    }


  console.log("props", props)
    return(
      <form className="create-user">
          <div className="form-group">
            <label htmlFor="new-username">Create New Username</label>
            <input
                type="text"
                name="new-username"
                value={props.loginForm.NewUsername}
                onChange={props.onChange}
                className="form-control"
                placeholder="Enter New Username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input
                type="text"
                name="first-name"
                value={props.loginForm.NewUsername}
                onChange={props.onChange}
                className="form-control"
                placeholder="Enter Your First Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input
                type="text"
                name="last-name"
                value={props.loginForm.NewUsername}
                onChange={props.onChange}
                className="form-control"
                placeholder="Enter Your Last Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Enter Your Phone Number</label>
            <input
                type="text"
                name="phonw"
                value={props.loginForm.NewUsername}
                onChange={props.onChange}
                className="form-control"
                placeholder="Enter Your Phone Number Here"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
                type="text"
                name="email"
                value={props.loginForm.NewUsername}
                onChange={props.onChange}
                className="form-control"
                placeholder="Enter Your E-mail Address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="new-password">Create Password</label>
            <input
                type="password"
                name="new-password"
                value={props.loginForm.password}
                onChange={props.onChange}
                className="form-control"
                placeholder="Enter Your Password Here"
                aria-describedby="new-password"
            />
            <small id="new-password" className="form-text text-muted">Password must be between 8 and 20 characters</small>
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
                type="password"
                name="confirm-password"
                value={props.loginForm.password}
                onChange={props.onChange}
                className="form-control"
                placeholder="Re-type Your Password"
            />
          </div>
          <div>
              <button onClick={props.onClick} className="btn btn-primary">Submit</button>
          </div>
      </form>
    )
}

export default CreateUserForm