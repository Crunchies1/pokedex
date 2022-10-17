import { useRef, useEffect, useState } from "react"
import axios from 'axios'

// https://pokeapi.co/api/v2/pokemon/{id or name}/
const POKEMON_TOTAL = 151
const PAGE_TOTAL = 40

const usePokemonFetch = (page, filters) => {
    const cache = useRef({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [pokemons, setPokemons] = useState([]);
    const [hasMore, setHasMore] = useState(false);


    useEffect(() => {
        let cancelRequest = false;

        const fetchData = async () => {
            setIsLoading(true)
            setError("")

            if (cache.current[page] && filters.length === 0) {
                setIsLoading(false)
                return;
            } else { 
                try {
                    let fetchedPokemon = []
                    // offset = 1, 41, 81, 121 
                    // pageEnd = 40, 80, 120, 151
                    
                    let offset = 1 + PAGE_TOTAL * (page - 1)
                    let pageEnd = Math.min(PAGE_TOTAL * page, POKEMON_TOTAL) 

                    if (filters.length !== 0) {
                        offset += PAGE_TOTAL
                        pageEnd = POKEMON_TOTAL
                    }

                    for (var id = offset; id <= pageEnd; id++) {
                        let data = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
                        fetchedPokemon.push(data)
                    }
                    cache.current[page] = true;
                    setHasMore(pageEnd < POKEMON_TOTAL)
                    setPokemons(prev => [...prev, ...fetchedPokemon])
                    setIsLoading(false)
                } catch (error) {
                    if (cancelRequest) return;
                    setError(error.message)
                    setIsLoading(false)
                }
            }
        };
    
        fetchData();
    
        return function cleanup() {
            cancelRequest = true;
        };
    }, [page, filters]);

    return { isLoading, hasMore, error, pokemons };
};

export {
    usePokemonFetch
}
