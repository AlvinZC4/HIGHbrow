import React, { useState, useEffect } from "react"
import SearchForm from "../componets/SearchForm/SearchForm";
import {Container, Row, Col} from "../componets/Grid"
import Jumbotron from "../componets/Jumbotron"
import {List, ListItem} from "../componets/List"
import BookImage from "../componets/BookImage"
import AddBookButton from "../componets/AddBookButton"
import API from "../utils/API";

function FindBooks(props) {


    const [search, setSearch] = useState({
        search: ""
    });

    const [searchResults, setSearchResults] = useState([]);

    useEffect(() =>{
        console.log("searchResults", searchResults)
    }, [searchResults])


    const searchBooks = () => {
        console.log(search.search);
        API.findBooks(search.search)
            .then(res => {
                console.log("api search result", res.data);
                //if res.data
                setSearchResults(res.data)
            });
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
        console.log(id)
    }

    /////layout here - component
    return (
        <div>
            <Container>
                <Row>
                    <Col size="12 lg-8 md-6">
                        < SearchForm
                            handleInputChange={handleInputChange}
                            handleFormSubmit={handleFormSubmit}
                            value={search.search}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col size="12 lg-8 md-6">
                        <h2>Search Results</h2>
                    </Col>
                </Row>
                <Row>
                    <Col size="12 lg-8 md-6">
                        {searchResults.length ? (
                            <List>
                                {searchResults.map(book => (
                                    <ListItem key={book.id}>
                                        <BookImage bookimage={book.image}/>
                                        <h4>
                                            {book.title} by {book.author}
                                        </h4>
                                        <AddBookButton onClick={addBook(book.id)}/>
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                            <h3>No Results to Display</h3>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default FindBooks