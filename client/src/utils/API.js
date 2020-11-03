import axios from "axios"

export default {
    findBooks: function (search) {
        return axios.get("/api/books/getBooks/" + search)
    },
<<<<<<< HEAD
    getUsername: function (user) {
        return axios.post("/api/users/username", user)
    }

}
=======
    getUserBooks: function(user) {
        return axios.post("/api/users/mywishlist", user)
    },
    createUser: function(user) {
        return axios.post("api/users/createuser", user)
    }
 }
>>>>>>> master
