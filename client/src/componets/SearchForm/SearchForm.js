import React from "react";
import "./style.css"

function SearchForm(props) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="search">{props.label}</label>
                <input
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder={props.placeHolder}
                    id={props.id}
                />
                <div className="d-flex justify-content-center">
                    <button onClick={props.handleFormSubmit} className="btn btn-infogi mt-3 search-btn">Search</button>
                </div>
            </div>
        </form>
    );
}

export default SearchForm;
