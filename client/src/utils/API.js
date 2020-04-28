import axios from 'axios';

export default {
    youtubeSearch: function (query) {
        return axios.get('/api/youtube/' + query);
    }
}