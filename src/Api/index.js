import axios from "axios";

export const getPlanets =  async () => {
    try {
        const { data } = await axios.get("https://swapi.dev/api/planets/");
        console.log(data)
        return data;
    } catch(error) {
        console.error(error.response)
    }
} 

export const getPeople =  async () => {
    try {
        const { data } = await axios.get("https://swapi.dev/api/people/");
        console.log(data)
        return data;
    } catch(error) {
        console.error(error.response)
    }
} 