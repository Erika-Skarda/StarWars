import axios from "axios";

export const getPlanets =  async (key, page) => {
    try {
        const { data } = await axios.get(`https://swapi.dev/api/planets/?page=${page}`);
        console.log(data)
        return data;
    } catch(error) {
        console.error(error.response)
    }
} 

export const getPeople =  async (key, page) => {
    try {
        const { data } = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
        console.log(data)
        return data;
    } catch(error) {
        console.error(error.response)
    }
} 