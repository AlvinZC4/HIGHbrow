import React, {useState, useEffect} from "react"
import {Container, Row, Col} from "../componets/Grid"
import {useHistory, Link} from "react-router-dom"
import LoginForm from "../componets/LoginForm"
import Header from "../componets/Header"

function Login(props) {


    const history = useHistory()
   


    useEffect(() => {
        if (props.user !== "") {
            history.push("/wishlist")
        }
    
    })


    return (
        <div>
            <Container>
                <Row>
                    <Col size="6, md-12">
                    <Header text="Welcome Back HIGHbrower!"/>
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
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login