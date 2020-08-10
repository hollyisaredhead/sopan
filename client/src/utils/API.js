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
  },

  createRoom: function (roomData) {
    return axios.post("/api/rooms/create", roomData);
  },

  joinRoom: function (roomData) {
    return axios.post("/api/rooms/join", roomData);
  }

  // // Gets all users
  // getUsers: function() {
  //     return axios.get("/api/user");
  //   },

}