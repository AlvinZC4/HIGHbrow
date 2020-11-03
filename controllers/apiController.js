

const axios = require("axios");
const User = require("../models/users");
const parseString = require('xml2js').parseString;




require('dotenv').config();


const BASEURL = "https://www.goodreads.com/search.xml?&q=";
const APIKEY = process.env.APIKEY;
// const format = "json";

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
                    res.json(result);

                });

            })
            .catch(err => res.status(422).json(err))

    }

}

    // // add to db when add button clicked
    // create: async (request, h) => {
    //     const result = await User.create({  ///need to add book???
    //         date: new Date(),
    //         title: request.payload.noteTitle,
    //         slug: Slugify(request.payload.noteTitle, { lower: true }),
    //         description: request.payload.noteDescription,
    //         content: request.payload.noteContent
    //     });

    //     // Generate a new note with the 'result' data
    //     return result;
    // }







// const fs = require("fs");
// const axios = require("axios");


// const searchParam = "";

// axios.get('/books?ID=12345')
//     .then(function (response) {
//         // handle success
//         console.log(response);
//     })
//     .catch(function (error) {
//         // handle error
//         console.log(error);
//     })
//     .then(function () {
//         // always executed
//     });

// // Optionally the request above could also be done as
// axios.get('/books', {
//     params: {
//         ID: 12345
//     }
// })
//     .then(function (response) {
//         console.log(response);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })
//     .then(function () {
//         // always executed
//     });






// const searchparam = "Harry+Potter";
// axios({
//     method: 'get',
//     key: "eG089CXx7XHIGGeBeEKLg",
//     // searchparam: "Harry+Potter",
//     url: 'eG089CXx7XHIGGeBeEKLg' + key + "&q=" + searchparam,
//     responseType: 'stream'
// })
//     .then(function (response) {
//         response.data;

//     });



// //

// export default {
//     getSearchResults: function () {
//         return axios({
//             method: 'get',
//             key: "eG089CXx7XHIGGeBeEKLg",
//             searchparam: "Harry+Potter",
//             url: 'https://www.goodreads.com/search.xml?key=' + key + "&q=" + searchparam,
//             responseType: 'stream'
//         }).then(function (response) {
//             response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
//         });
//     };
// };


// //https://www.goodreads.com/search.xml?key=eG089CXx7XHIGGeBeEKLg&q=Harry+Potter


// export default {
//     fetchUsers: function () {
//         return axios.get(
//             "https://randomuser.me/api/?results=50&nat=us&inc=id,name,email,gender,phone,picture"
//         );
//     },
// };
