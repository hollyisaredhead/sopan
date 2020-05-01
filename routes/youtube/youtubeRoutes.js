const axios = require("axios");

module.exports = (app) => {
    app.get('/api/youtube/:query', (req, res) => {
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${req.params.query}&type=video&videoEmbeddable=true&maxResults=15&key=${process.env.YOUTUBE_API_KEY}`)
            .then(results => res.json(results.data))
            .catch(err => console.log(err));
    });
}