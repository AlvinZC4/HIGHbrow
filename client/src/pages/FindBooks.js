import React, { setState, useState } from "react"
import SearchForm from "../componets/SearchForm/SearchForm";
import API from "../utils/API";

function FindBooks(props) {


    const [search, setSearch] = useState({
        search: ""
    });

    const [searchResults, setSearchResults] = useState([]);

    const searchBooks = () => {
        console.log(search.search);
        API.findBooks(search.search)
            .then(res => {
                console.log("api search result", res.data);
                //if res.data
                setSearchResults(res.data)
            });      //this.setState({ results: res.data.data })) // Is this correct, api results returned here???
        //.catch(err => console.log(err));
        // console.log(state.results);
        // searchResults =
    };

    //search input field?
    function handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setSearch({
            [name]: value
        });
    };

    // When the form is submitted, search the  API for `this.state.search`
    function handleFormSubmit(event) {
        event.preventDefault();
        searchBooks(); //api method???
    };

    /////layout here - component
    return (
        <div>
            < SearchForm
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                value={search.search}

            />

            {/* < ResultList
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
            /> */}



        </div>
    )

}

export default FindBooks