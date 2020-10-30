import React, {useState, useEffect} from "react"
import UserWishlist from "../componets/UserWishlist"
import WishlistItem from "../componets/WishlistItem"
import API from "../utils/API"

function Wishlist(props) {
    const [myBooks, setMyBooks] = useState({
        id: "",
        title: "",
        author: "",
        wishlist: false,
        shared: false
    })
}

export default Wishlist