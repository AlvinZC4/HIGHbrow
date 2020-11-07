import React from "react";
import "./style.css"

function SearchForm(props) {
    return (
        <form>
            <div className="form-group">
                <h1 htmlFor="search" className="search-in">Find a book to add to your wishlist!</h1>
                <input
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search for book here"
                    id="search"
                />
                <div className="d-flex justify-content-center">
                    <button onClick={props.handleFormSubmit} className="btn btn-infogi mt-3 search-btn">Search</button>
                </div>
            </div>
        </form>
    );
}

export default SearchForm;
