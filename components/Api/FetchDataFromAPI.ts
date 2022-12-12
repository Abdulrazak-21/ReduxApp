import axios from 'axios';

const airline = 'https://api.instantwebtools.net/v1/airlines';
const meusum1 = 'https://collectionapi.metmuseum.org/public/collection/v1/objects?metadatadate=2021-06-22&&departmentids=3&hasimages=true';
const link = 'https://jsonplaceholder.typicode.com/posts'


export const getAirlines = async () => {
    try {
        const users = await axios.get(airline);
        return users;
    } catch (err) {
        return console.error(err);
    }
};

export const getMuesum1 = async () => {
    console.log('calling Muesum api')
    try {
        const users = await axios.get(meusum1);
        //console.log(users.data, 'sdsads')
        return users;
    } catch (err) {
        return console.error(err);
    }
};