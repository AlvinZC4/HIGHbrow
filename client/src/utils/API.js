import axios from "axios"

export default {
    findBooks: function (search) {
        return axios.get("/api/books/getBooks/" + search)
    },
    getUsername: function(user) {
        return axios.post("/api/users/username", user)
    },
    getUserBooks: function(user) {
        return axios.post("/api/users/mywishlist", user)
    },
    createUser: function(user) {
        return axios.post("api/users/createuser", user)
    },
    findReader: function(query) {
        return axios.post("api/users/findreader", query)
    },
    addBook: function(user, bookData) {
        return axios.put("api/users/" + user, bookData)
    }
 }
