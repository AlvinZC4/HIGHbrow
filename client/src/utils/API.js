import axios from "axios"

export default {
    getUsername: function() {
        return axios.get("/api/username")
    }
}