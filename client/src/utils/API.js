import axios from "axios"

export default {
    findBooks: function (search) {
        return axios.get("/api/books/getBooks/" + search)
    },
    getUsername: function (user) {
        return axios.post("/api/users/username", user)
    }

}
