import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import LoginForm from "../componets/LoginForm"
import {Link} from "react-router-dom"

function Login(props) {


    const history = useHistory()
   

    // if (props.user !== "") {
    //     history.push("/wishlist")
    // }


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