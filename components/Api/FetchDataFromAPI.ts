import axios from 'axios';

const airline = 'https://api.instantwebtools.net/v1/airlines';
const earthquake = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=100&starttime=2021-06-14&endtime=2021-07-14'
const link = 'https://jsonplaceholder.typicode.com/posts'


export const getAirlines = async () => {
    try {
        const users = await axios.get(airline);
        return users;
    } catch (err) {
        return console.error(err);
    }
};

export const getEarthQuake = async () => {
    try {
        const users = await axios.get(earthquake);
        return users;
    } catch (err) {
        return console.error(err);
    }
};

