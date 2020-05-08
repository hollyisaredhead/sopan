import axios from 'axios';

export default {
  youtubeSearch: function (query) {
    return axios.get('/api/youtube/' + query);
  },

  createUser: function (UserData) {
    return axios.post("/api/users", UserData);
  },

  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },

  updateUser: function (id, nickname) {
    return axios.put("/api/users/" + id, nickname);
  }

  // // Gets all users
  // getUsers: function() {
  //     return axios.get("/api/user");
  //   },

}