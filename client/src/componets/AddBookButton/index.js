import React from "react";

function AddBookButton(props) {
    return (
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
            Add To Wishlist
        </button>
    );
}

export default AddBookButton;
