import React, {useState, useEffect} from "react"
import {Container, Row, Col} from "../componets/Grid"
import Header from "../componets/Header"
import SearchForm from "../componets/SearchForm/SearchForm"
import {List, ListItem} from "../componets/List"
import BookImage from "../componets/BookImage"
import API from "../utils/API"

function FindReader(props) {

    const [search, setSearch] = useState({
        search: ""
    });

    const [searchResults, setSearchResults] = useState({
        firstName: "",
        lastName: "",
        userBooks: []
    });

    const findOtherReader = () => {
        if (props.user == "") {
            return
        }
        else {
            const query = {
                email: search.search
            }
            console.log("findReader Search", search.search)
            API.findReader(query)
                .then(res => {
                    setSearchResults(res.data)
                })
        }
    }

    function handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setSearch({
            [name]: value
        });
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        findOtherReader();
    };


    return (
        <div>
            <Container>
                <Row classes="d-flex justify-content-center mb-3">
                    <Col size="xs-12 sm-10 md-8 lg-6">
                        <Header text="Search for Other HIGHbrower's Wishlists"/>
                        <SearchForm 
                             label="Find another user by e-mail address"
                             placeHolder="Type e-mail here"
                             id="findReader"
                             handleInputChange={handleInputChange}
                             handleFormSubmit={handleFormSubmit}
                             value={search.search}
                        />
                    </Col>
                </Row>
                {props.user == "" ? (
                        <Row classes="d-flex justify-content-center mb-3">
                            <Col size="xs-12 sm-10 md-8 lg-6">
                                <h3 className="text-center">Please Login to Find Readers</h3>
                            </Col>
                        </Row>
                    ) : (
                    <div>
                        {searchResults.firstName === "" ? (
                            <Row classes="d-flex justify-content-center mb-3">
                                <Col size="xs-12 sm-10 md-8 lg-6">
                                    <h3 className="text-center">No User Found with E-mail Provided</h3>
                                </Col>
                            </Row>
                        ) : (
                            <div>
                            <Row classes="d-flex justify-content-center mb-3">
                                <Col size="xs-12 sm-10 md-8 lg-6">
                                    <h2>{searchResults.firstName} {searchResults.lastName}'s Wishlist</h2>
                                </Col>
                            </Row>
                            <Row classes="d-flex justify-content-center mb-3">
                                <Col size="xs-12 sm-10 md-8 lg-6">
                                    {searchResults.userBooks.length !== 0 ? (
                                        <List>
                                            {searchResults.userBooks.map(book => (
                                                <ListItem key={book.id}>
                                                    <Container>
                                                        <Row classes="d-flex justify-content-center">
                                                            <Col size="4 sm-2">
                                                                <BookImage bookimage={book.image}/>
                                                            </Col>
                                                            <Col size="8 sm-10" classes="d-flex">
                                                                <h4 className="align-self-center">
                                                                    {book.title} by {book.author}
                                                                </h4>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </ListItem>
                                            ))}
                                        </List>
                                    ) : (
                                        <Container>
                                            <Row classes="d-flex justify-content-center">
                                                <Col size="xs-12 sm-10 md-8 lg-6">
                                                    <h3>{searchResults.firstName} {searchResults.lastName} Has No Books in Their Wishlist</h3>
                                                </Col>
                                            </Row>
                                        </Container>
                                    )}
                                </Col>
                            </Row>
                        </div>
                        )}
                    </div>
                   
                )}
            </Container>
        </div>
    )
}

export default FindReader