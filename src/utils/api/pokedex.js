import axios from 'axios'

// https://pokeapi.co/api/v2/pokemon/{id or name}/

const fetchPokedexEntry = async (id) =>
    (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data


export {
    fetchPokedexEntry
}