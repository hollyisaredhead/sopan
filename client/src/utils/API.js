import axios from 'axios';

export default {
    youtubeSearch: function (query) {
        return axios.get('/api/youtube/' + query);
    },

    createUser: function (UserData) {
      return axios.post("/api/user", UserData);
    },
    
    // // Gets all users
    // getUsers: function() {
    //     return axios.get("/api/user");
    //   },
    //   // Gets the user with the given id
    //   getUsers: function(id) {
    //     return axios.get("/api/user" + id);
    //   }

}