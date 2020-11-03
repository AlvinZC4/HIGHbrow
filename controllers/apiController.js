require('dotenv').config()
const axios = require("axios");
const parseString = require('xml2js').parseString;

const BASEURL = "https://www.goodreads.com/search.xml?&q=";
const APIKEY = process.env.APIKEY;

// Export an object with a "search" method that searches the Giphy API for the passed query
module.exports = {
    search: function (req, res) {
        console.log("searching for books");
        console.log(BASEURL + req.params.search + "&key=" + APIKEY);
        axios.get(BASEURL + req.params.search + "&key=" + APIKEY)
            .then(result => {
                console.log("API Results", result)
                parseString(result.data, function (err, result) {
                    //get only data you need array
                    // The results we want are buried deep witin the API response, set resultArray to an array that gets to the resutls we are after
                    const resultArray = result.GoodreadsResponse.search[0].results[0].work

                    // map through the resultsArray to create a new array, called responseArray, that contains only the information we need for each book
                    const responseArray = resultArray.map((index) => {
                        return (
                          {
                            id: index.best_book[0].id[0]._,
                            title: index.best_book[0].title[0],
                            author: index.best_book[0].author[0].name[0],
                            image: index.best_book[0].small_image_url[0]
                          }  
                        )
                    })

                    // send the responseArray back to the front-end
                    res.json(responseArray);

                });

            })
            .catch(err => {
                res.status(422).json(err)
                console.log(err)
            })

    }

}
