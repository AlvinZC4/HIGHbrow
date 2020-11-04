import React, { useState, useEffect } from "react"
import UserWishlist from "../componets/UserWishlist"
import WishlistItem from "../componets/WishlistItem"
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
        <Container fluid>
            <Row>
                <Col size="md-8">
                    {myBooks.length ? (
                        <UserWishlist>
                            {myBooks.map(book => {
                                console.log("book", book)
                                return (
                                    <WishlistItem key={book.id}>
                                        <strong>
                                            {book.title} by {book.author}
                                        </strong>
                                    </WishlistItem>
                                )
                            })}
                        </UserWishlist>
                    ) : (
                            <h3>You have no books saved</h3>
                        )}
                </Col>
            </Row>
        </Container>
    )
}

export default Wishlist