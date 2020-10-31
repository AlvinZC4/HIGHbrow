import React, {useState} from "react"
import {Container, Row, Col} from "../componets/Grid"

function NewUser(props) {

    const [newUserform, setNewUserForm] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        phone: "",
        email: ""
    })

    return (
        <Container fluid>
            <Row>
                <Col size="12">

                </Col>
            </Row>
        </Container>
    )

}

export default NewUser