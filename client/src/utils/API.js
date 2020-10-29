import axios from "axios"

export default {
    getUsername: function(user) {
        return axios.post("/api/users/username", user)
    }
}