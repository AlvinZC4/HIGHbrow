import React, {useState} from "react"
import {Container, Row, Col} from "../componets/Grid"
import CreateUserForm from "../componets/CreateUserForm"
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
        if (newUserform.username && newUserform.firstName && newUserform.lastName && newUserform.phone && newUserform.email && newUserform.password && newUserform.passwordConfirm) {
            if (newUserform.password !== newUserform.passwordConirm) {
                console.log("Password entries do not match")
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
        <Container fluid>
            <Row>
                <Col size="12">
                    <CreateUserForm
                        newUserForm={newUserform}
                        handleInputChange={handleInputChange}
                        handleNewUserSubmit={handleNewUserSubmit}
                    />
                </Col>
            </Row>
        </Container>
    )

}

export default NewUser