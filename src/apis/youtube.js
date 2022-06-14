import axios from 'axios';

//You will need a Youtube API Key from Google APIs. Its Free for limited use.

const KEY = process.env.REACT_APP_API_KEY;

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

