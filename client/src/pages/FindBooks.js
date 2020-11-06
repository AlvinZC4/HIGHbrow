import React, { useState, useEffect } from "react"
import SearchForm from "../componets/SearchForm/SearchForm";
import {Container, Row, Col} from "../componets/Grid"
import {List, ListItem} from "../componets/List"
import BookImage from "../componets/BookImage"
import AddBookButton from "../componets/AddBookButton"
import API from "../utils/API";

function FindBooks(props) {


    const [search, setSearch] = useState({
        search: ""
    });

    const [searchResults, setSearchResults] = useState([]);
    let bookSearchResults = []

    useEffect(() => {
        console.log("searchResults", searchResults)
    }, [searchResults])


    const searchBooks = () => {

        if (props.user == "") {
            return
        }
        else {
            console.log(search.search);
            API.findBooks(search.search)
                .then(res => {
                    console.log("api search result", res.data);
                    //if res.data
                    bookSearchResults = res.data
                    setSearchResults(res.data)
                    console.log("bookSearchResults", bookSearchResults)
                });
    
        }
    };

    //search input field?
    function handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setSearch({
            [name]: value
        });
    };

    // When the form is submitted, search the  API for `this.state.search`
    function handleFormSubmit(event) {
        event.preventDefault();
        searchBooks();
    };

    function addBook(id) {
        console.log("addBook function hit")
        console.log("bookSearch Results in addBook", bookSearchResults)
        const bookToAdd = searchResults.find(book => book.id === id)
        console.log("booktoAdd", bookToAdd)

        API.addBook(props.user, bookToAdd)
        .then(res => console.log("Book added to wishlist", res))
        .catch(err => console.log("addBook Error", err))
    }
    // function addBook(id) {
    //     console.log(id)
    // }

    /////layout here - component
    return (
        <div className="mb-5">
            <Container>
                <Row classes="d-flex justify-content-center mb-3">
                    <Col size="xs-12 sm-10 md-8 lg-6">
                        < SearchForm
                            handleInputChange={handleInputChange}
                            handleFormSubmit={handleFormSubmit}
                            value={search.search}
                        />
                    </Col>
                </Row>
                
                    {props.user == "" ? (
                        <Row classes="d-flex justify-content-center mb-3">
                            <Col size="xs-12 sm-10 md-8 lg-6">
                                <h3 className="text-center">Please Login to Search Books</h3>
                            </Col>
                        </Row>
                    ) : (
                        <div>
                            <Row classes="d-flex justify-content-center mb-3">
                                <Col size="xs-12 sm-10 md-8 lg-6">
                                    <h2>Search Results</h2>
                                </Col>
                            </Row>
                            <Row classes="d-flex justify-content-center mb-3">
                                <Col size="xs-12 sm-10 md-8 lg-6">
                                    {searchResults.length ? (
                                        <List>
                                            {searchResults.map(book => (
                                                <ListItem key={book.id}>
                                                    <Container>
                                                        <Row classes="d-flex justify-content-center">
                                                            <Col size="4 sm-2">
                                                                <BookImage bookimage={book.image}/>
                                                            </Col>
                                                            <Col size="5 sm-7" classes="d-flex">
                                                                <h4 className="align-self-center">
                                                                    {book.title} by {book.author}
                                                                </h4>
                                                            </Col>
                                                            <Col size="3" classes="d-flex">
                                                                <AddBookButton onClick={() => addBook(book.id)}/>
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
                                                    <h3>No Results to Display</h3>
                                                </Col>
                                            </Row>
                                        </Container>
                                    )}
                                </Col>
                            </Row>
                        </div>
                    )}
            </Container>
        </div>
    )

}

export default FindBooks