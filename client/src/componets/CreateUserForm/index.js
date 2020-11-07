import React from "react"
import {useHistory} from "react-router-dom"

function CreateUserForm(props) {

    // const history = useHistory()

    // function redirect(event) {
    //   event.preventDefault()
    //   history.push("/wishlist")
    // }


  console.log("props", props)
    return(
      <div className="main-login main-center">
        <form className="create-user ">
          <div className="form-group ">
            <label htmlFor="new-username">Create New Username</label>
            <input
                type="text"
                name="username"
                value={props.newUserForm.username}
                onChange={props.onChange}
                className="form-control"
                placeholder="Enter New Username"
            />
          </div>
          <div className="form-group  ">
            <label htmlFor="first-name cols-sm-2 control-label">First Name</label>
            <input
                type="text"
                name="firstName"
                value={props.newUserForm.firstName}
                onChange={props.onChange}
                className="form-control"
                placeholder="Enter Your First Name"
            />
          </div>
          <div className="form-group  ">
            <label htmlFor="last-name">Last Name</label>
            <input
                type="text"
                name="lastName"
                value={props.newUserForm.lastName}
                onChange={props.onChange}
                className="form-control"
                placeholder="Enter Your Last Name"
            />
          </div>
          <div className="form-group  ">
            <label htmlFor="phone">Enter Your Phone Number</label>
            <input
                type="text"
                name="phone"
                value={props.newUserForm.phone}
                onChange={props.onChange}
                className="form-control"
                placeholder="Enter Your Phone Number Here"
            />
          </div>
          <div className="form-group  ">
            <label htmlFor="email">E-mail</label>
            <input
                type="text"
                name="email"
                value={props.newUserForm.email}
                onChange={props.onChange}
                className="form-control"
                placeholder="Enter Your E-mail Address"
            />
          </div>
          <div className="form-group ">
            <label htmlFor="new-password">Create Password</label>
            <input
                type="password"
                name="password"
                value={props.newUserForm.password}
                onChange={props.onChange}
                className="form-control"
                placeholder="Enter Your Password Here"
                aria-describedby="new-password"
            />
            <small id="new-password" className="form-text text-white">Password must be between 8 and 20 characters</small>
          </div>
          <div className="form-group  r">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
                type="password"
                name="passwordConfirm"
                value={props.newUserForm.passwordConfirm}
                onChange={props.onChange}
                className="form-control"
                placeholder="Re-type Your Password"
            />
          </div>
          <div className="d-flex justify-content-center  ">
              <button onClick={props.onClick} className="btn btn-primary">Submit</button>
          </div>
      </form>
      </div>
    )

}

export default CreateUserForm