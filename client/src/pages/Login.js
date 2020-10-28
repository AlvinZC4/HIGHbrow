import React, {useState, useEffect} from "react"
import LoginForm from "../componets/LoginForm"
import API from "../utils/API"

function Login(props) {

    return (
        <div>
            <LoginForm
                name={props.name}
                value={props.value}
                onChange={props.handleInputChange} 
                onClick={props.handleLoginSubmit}
            />
        </div>
    )

}

export default Login