import React, { useState, useEffect, useContext } from "react"
import GridLoader from "react-spinners/GridLoader";
// import Button from "../components/Button"
import Pokecard from "../components/PokeCard"
import Filter from "../components/Filter"
import { fetchPokedexEntry } from "../utils/api/pokedex"
import { SidebarContext, FilterContext } from "../utils/store"
const PAGE_TOTAL = 151

const Pokedex = () => {
    const [pokemonList, setPokemonList] = useState([])

    const { filters } = useContext(FilterContext)
    const sidebar = useContext(SidebarContext)
    const classes = (sidebar.sidebarStatus.status === 'retracted') ? "" : " pl-60" 

    async function fetchAllPokemon() {
        let pokemon
        const list = []
        for (var entry = 1; entry <= PAGE_TOTAL; entry++) {
            pokemon = await fetchPokedexEntry(entry)
            list.push(pokemon)
        }
        console.log(list)
        setPokemonList(list)
    }

    useEffect(() => {
        fetchAllPokemon()
    }, [])

    return (
        <main class={"transition-all duration-500 ease-in-out flex w-auto bg-white dark:bg-gray-700 content-center ml-auto min-h-screen pb-8" + classes}>
            {(!pokemonList.length) && (
                <div class={"flex flex-row items-center justify-center mt-12 w-screen"}>
                    <GridLoader color={"#17ECEC"} size={15}/>
                </div>
            )}
            {(pokemonList.length) && (
                <div class="flex flex-col w-screen">
                    <Filter />
                    <section class="flex flex-wrap">
                        {pokemonList
                        .filter(pokemon => filters.length === 0 || pokemon.types.filter(typeObject => filters.includes(typeObject.type.name)).length > 0)
                        .map((pokemon) => {
                            return (
                                <div key={pokemon.id} class="mx-auto px-2">
                                    <Pokecard 
                                        id={pokemon.id}
                                        sprites={pokemon.sprites} 
                                        name={pokemon.name} 
                                        types={pokemon.types} 
                                    />
                                </div>
                            );
                        })}
                    </section>
                </div>
            )}
        </main>
    )
}

export default Pokedex