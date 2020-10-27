import React, {useState, useEffect} from "react"
import LoginForm from "../componets/LoginForm"

function Login(props) {

    const [loginForm, setLoginForm] = useState("")

    function handleInputChange(e) {
        const {name, value} = e.target
        setLoginForm({...loginForm, [name]: value})
    }

    function handleLoginSubmit(e) {
        e.preventDefault()
        if (loginForm.username && loginForm.password) {

        }


    }

    return (
        <div>
            <LoginForm />
        </div>
    )

}

export default Login