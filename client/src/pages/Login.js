import React from "react"
import LoginForm from "../componets/LoginForm"

function Login(props) {

    return (
        <div>
            <LoginForm
                loginForm={props.loginForm}
                onChange={props.onChange} 
                onClick={props.onClick}
            />
        </div>
    )

}

export default Login