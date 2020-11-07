import React from "react"

function UserMessage(props) {
    return (
    <div>
        {props.user === "" ? (
            <h3>Sign-in to View Your Wishlist</h3>
        ) : (
            <h3>You have no books saved</h3>
        )}
    </div>
    )
}

export default UserMessage