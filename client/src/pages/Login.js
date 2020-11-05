import React from "react"
import LoginForm from "../componets/LoginForm"
import {Link} from "react-router-dom"

function Login(props) {

    return (
        <div>
            <LoginForm
                loginForm={props.loginForm}
                onChange={props.onChange} 
                onClick={props.onClick}
            />
            <Link to="/newuser">
                Create New Account
            </Link>
            <Link to="/getbooks">
                Find books
            </Link>
        </div>
    )

}

export default Login