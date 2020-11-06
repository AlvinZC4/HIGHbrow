import React from "react";

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
                    <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">Search</button>
                </div>
            </div>
        </form>
    );
}

export default SearchForm;
