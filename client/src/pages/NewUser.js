import React, {useState} from "react"
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

    function handleInputChange(e) {
        const {name, value} = e.target
        setNewUserForm({...newUserform, [name]: value})
    }

    function handleNewUserSubmit(e) {
        e.preventDefault()
        if (newUserform.username && newUserform.firstName && newUserform.lastName && newUserform.phone && newUserform.email && newUserform.password && newUserform.passwordConfirm) {
            if (newUserform.password !== newUserform.passwordConfirm) {
                console.log("Password entries do not match")
                console.log("password", newUserform.password)
                console.log("confirm password", newUserform.passwordConfirm)
                return
            }
            else {
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
                    })
            }
        }
        else {
            console.log("")
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
                    />
                </Col>
            </Row>
        </Container>
    )

}

export default NewUser