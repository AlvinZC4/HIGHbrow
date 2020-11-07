import React, {useState, useEffect} from "react"
import {Container, Row, Col} from "../componets/Grid"
import CreateUserForm from "../componets/CreateUserForm"
import Header from "../componets/Header"
import {Link} from "react-router-dom"
import API from "../utils/API"

function NewUser() {

    const [newUserform, setNewUserForm] = useState({
        username: "",
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
        passwordConfirm: ""
    })

    const [validate, setValidate] = useState({
        username: true,
        email: true,
        password: true,
        passwordConfirm: true,
    })

    useEffect(() =>{
        setValidate({
            username: true,
            email: true,
            password: true,
            passwordConfirm: true,
        })
    }, [])

    function handleInputChange(e) {
        const {name, value} = e.target
        setNewUserForm({...newUserform, [name]: value})
    }

    function handleNewUserSubmit(e) {
        e.preventDefault()
        // Check That All Fields 
        if (newUserform.username && newUserform.firstName && newUserform.lastName && newUserform.phone && newUserform.email && newUserform.password && newUserform.passwordConfirm) {
            
            // Validation on username, email, and password fields
            if (newUserform.username.length < 5 || newUserform.username.length > 15 || /[0-9a-zA-Z_]*/.test(newUserform.username) == false) {
                console.log("invalid username")
                setValidate({
                    username: false,
                    email: true,
                    password: true,
                    passwordConfirm: true,
                })
                return
            }
            else {
                setValidate({
                    username: true,
                    email: true,
                    password: true,
                    passwordConfirm: true,
                })
            }

            if(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(newUserform.email) == false) {
                console.log("Invalid email")
                setValidate({
                    username: true,
                    email: false,
                    password: true,
                    passwordConfirm: true,
                })
                return
            }
            else {
                setValidate({
                    username: true,
                    email: true,
                    password: true,
                    passwordConfirm: true,
                })
            }

            if(newUserform.password < 8 || newUserform.password > 20) {
                console.log("password too long or too short")
                setValidate({
                    username: true,
                    email: true,
                    password: false,
                    passwordConfirm: true,
                })
                return
            }
            else {
                setValidate({
                    username: true,
                    email: true,
                    password: true,
                    passwordConfirm: true,
                })
            }
            
            if (newUserform.password !== newUserform.passwordConfirm) {
                console.log("Password entries do not match")
                console.log("password", newUserform.password)
                console.log("confirm password", newUserform.passwordConfirm)
                setValidate({
                    username: true,
                    email: true,
                    password: true,
                    passwordConfirm: false,
                })
                return
            }
            else {
                setValidate({
                    username: true,
                    email: true,
                    password: true,
                    passwordConfirm: true,
                })
            }
                // Now Carry out the createUser query for the database
                console.log("input from newUserForm", newUserform)
                const newUserPost = {
                    username: newUserform.username,
                    firstName: newUserform.firstName,
                    lastName: newUserform.lastName,
                    phone: newUserform.phone,
                    email: newUserform.email,
                    password: newUserform.passwordConfirm
                }
                console.log("New User info to Database", newUserPost)
                API.createUser(newUserPost)
                    .then(res => {
                        console.log("create new user response", res)
                        setValidate({
                            username: true,
                            email: true,
                            password: true,
                            passwordConfirm: true,
                        })
                    })
            
        }
        else {
            console.log("please fill out all fields")
        }
    }

    return (
        <Container>
            <Row classes="d-flex justify-content-center mb-3">
                <Col size="xs-12 sm-10 md-8 lg-6">
                    <Header text="Register Here To Get Started"/>
                    <CreateUserForm
                        newUserForm={newUserform}
                        onChange={handleInputChange}
                        onClick={handleNewUserSubmit}
                        validate={validate}
                    />
                </Col>
            </Row>
        </Container>
    )

}

export default NewUser