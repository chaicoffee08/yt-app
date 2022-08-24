import axios from 'axios';

const KEY = 'AIzaSyCGxxzh5jQj6GwBdfuMS5rDROwEIFekEf4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

