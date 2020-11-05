import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import AddBookButton from "./AddBookButton";
import API from "../utils/API"; //will need to change 

class SearchResultContainer extends Component {

    render() {
        return (
            <div>
                <SearchForm
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <ResultList results={this.state.results} />
            </div>
        );
    }
}

export default SearchResultContainer;
