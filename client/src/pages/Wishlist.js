import React, {useState, useEffect} from "react"
import UserWishlist from "../componets/UserWishlist"
import WishlistItem from "../componets/WishlistItem"
import {Container, Row, Col} from "../componets/Grid"
import API from "../utils/API"

function Wishlist(props) {
    const [myBooks, setMyBooks] = useState({
        id: "",
        title: "",
        author: "",
        wishlist: false,
        shared: false
    })

    useEffect(() => {
        loadUserBooks()
    }, [])

    function loadUserBooks() {
        API.getUserBooks(props.user)
            .then(res => 
                setMyBooks(res.data)
            )
            .catch(err => console.log(err))
    }
}

return (
    <Container fluid>
        <Row>
            <Col size="md-8">
                {myBooks.length ? (
                    <UserWishlist>
                        {myBooks.map(book => (
                            <WishlistItem key={book.id}>
                                <strong>
                                    {book.Title} by {book.author}
                                </strong>
                            </WishlistItem>
                        ))}
                    </UserWishlist>
                ) : (
                    <h3>You have no books saved</h3>
                )}
            </Col>
        </Row>
    </Container>
)

export default Wishlist