import React from "react"
import {useHistory} from "react-router-dom"

function CreateUserForm(props) {

    return(
      <div className="main-login main-center ">
        <form className="create-user ">
          <div className="form-group ">
            
            <label htmlFor="new-username">Create Username</label>
            <input
                type="text"
                name="username"
                value={props.newUserForm.username}
                onChange={props.onChange}
                className="form-control"
                placeholder="Enter New Username"
                aria-describedby="new-username"
            />
            {props.validate.username == true ? (
              <small id="new-username" className="form-text text-white">Must be between 5 - 15 characters long / letters and numbers only</small>
            ) : (
              <small id="new-username" className="form-text validate">Username must be between 5 and 15 characters long and only contain letters and numbers</small>
            )}
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
                aria-describedby="new-first-name"
            />
            {props.validate.firstName == true ? (
              <small id="new-first-name" className="form-text text-white"></small>
            ) : (
              <small id="new-first-name" className="form-text validate">Must enter your first name</small>
            )}
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
                aria-describedby="new-last-name"
            />
            {props.validate.lastName == true ? (
              <small id="new-last-name" className="form-text text-white"></small>
            ) : (
              <small id="new-last-name" className="form-text validate">Must enter your last name</small>
            )}
          </div>
          <div className="form-group  ">
            <label htmlFor="phone">Enter Your Phone Number</label>
            <input
                type="text"
                name="phone"
                value={props.newUserForm.phone}
                onChange={props.onChange}
                className="form-control"
                placeholder="Enter Your Phone Number "
                aria-describedby="new-phone"
            />
            {props.validate.phone == true ? (
              <small id="new-phone" className="form-text text-white"> </small>
            ) : (
              <small id="new-phone" className="form-text validate">Enter a valid phone number</small>
            )}
          </div>
          <div className="form-group  ">
            <label htmlFor="email">E-mail</label>
            <input
                type="text"
                name="email"
                value={props.newUserForm.email}
                onChange={props.onChange}
                className="form-control"
                placeholder="Enter Your E-mail "
                aria-describedby="new-email"
            />
                {props.validate.email == true ? (
                  <small id="new-email" className="form-text text-white"></small>
                ) : (
                  <small id="new-email" className="form-text validate">Enter a valid e-mail </small>
                )}
          </div>
          <div className="form-group ">
            <label htmlFor="new-password">Create Password</label>
            <input
                type="password"
                name="password"
                value={props.newUserForm.password}
                onChange={props.onChange}
                className="form-control"
                placeholder="Enter Your Password "
                aria-describedby="new-password"
            />
              {props.validate.password == true ? (
                <small id="new-password" className="form-text text-white">Must be between 8 - 20 characters long</small>
              ) : (
                <small id="new-password" className="form-text validate">Password must be between 8 and 20 characters long</small>
              )}

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
                aria-describedby="confirm-password"
            />
              {props.validate.passwordConfirm == true ? (
                <small id="confirm-password" className="form-text text-white"></small>
              ) : (
                <small id="confirm-password" className="form-text validate">Passwords must match</small>
              )}

          </div>
          <div className="d-flex justify-content-center  ">
              <button onClick={props.onClick} className="btn btn-primary">Submit</button>
          </div>
      </form>
      </div>
    )

}

export default CreateUserForm