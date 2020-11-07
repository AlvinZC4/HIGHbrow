import React, { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import UserWishlist from "../componets/UserWishlist"
import WishlistItem from "../componets/WishlistItem"
import BookImage from "../componets/BookImage"
import Header from "../componets/Header"
import UserMessage from "../componets/UserMessage"
import { Container, Row, Col } from "../componets/Grid"
import API from "../utils/API"


function Wishlist(props) {
    const [myBooks, setMyBooks] = useState([])

    useEffect(() => {
        loadUserBooks()
    }, [""])

    function loadUserBooks() {
        console.log(`${props.user}'s books loading`)
        const query = {
            username: props.user
        }
        API.getUserBooks(query)
            .then(res => {
                console.log("load books API response", res.data)
                setMyBooks(res.data.userBooks)
            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <Row classes="d-flex justify-content-center mb-3">
                <Col size="xs-12 sm-10 md-8 lg-6">
                    <Header text="My Wishlist"/>
                    {myBooks.length ? (
                        <UserWishlist>
                            {myBooks.map(book => {
                                console.log("book", book)
                                return (
                                    <WishlistItem key={book.id}>
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
                                    </WishlistItem>
                                )
                            })}
                        </UserWishlist>
                    ) : (
                            <div className="d-flex justify-content-center mb-3">
                                <UserMessage user={props.user}/>
                            </div>
                        )}
                </Col>
            </Row>
        </Container>
    )
}

export default Wishlist