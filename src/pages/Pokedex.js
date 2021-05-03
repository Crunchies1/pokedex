import React, { useState, useEffect, useContext } from "react"
// import Button from "../components/Button"
import Pokecard from "../components/PokeCard"
import { fetchPokedexEntry } from "../utils/api/pokedex"
import { SidebarContext } from "../utils/store"
const PAGE_TOTAL = 100
// const TOTAL_POKEMON = 898

const Pokedex = () => {
    const [pokemonList, setPokemonList] = useState([])
    const sidebar = useContext(SidebarContext);
    const classes = (sidebar.sidebarStatus.status === 'retracted') ? "" : " pl-60" 

    async function fetchAllPokemon () {
        let pokemon
        const list = []
        for (var entry = 1; entry <= PAGE_TOTAL; entry++) {
            pokemon = await fetchPokedexEntry(entry)
            list.push(pokemon)
        }
        setPokemonList(list)
    }

    useEffect(() => {
        fetchAllPokemon()
    }, [])

    return (
        <div class={"transition-all duration-500 ease-in-out flex w-auto bg-white dark:bg-gray-700 content-center ml-auto" + classes}>
            <div class="flex">
                <div class="flex flex-wrap">
                    {pokemonList.map((pokemon) => {
                        return (
                            <div key={pokemon.id} class="mx-auto">
                                <Pokecard 
                                    id={pokemon.id}
                                    sprites={pokemon.sprites} 
                                    name={pokemon.name} 
                                    types={pokemon.types} 
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Pokedex