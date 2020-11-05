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
                <Row classes="d-flex justify-content-center mb-3">
                    <Col size="xs-12 sm-10 md-8 lg-6">
                        <Header text="Welcome Back HIGHbrower!"/>
                        <LoginForm
                            loginForm={props.loginForm}
                            onChange={props.onChange} 
                            onClick={props.onClick}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login