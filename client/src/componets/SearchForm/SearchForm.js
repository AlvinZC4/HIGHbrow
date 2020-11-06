import React from "react";

function SearchForm(props) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="search">Find a book to add to your wishlist!:</label>
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
                    <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">Search</button>
                </div>
            </div>
        </form>
    );
}

export default SearchForm;
