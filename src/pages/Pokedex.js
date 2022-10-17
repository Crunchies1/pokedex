import React, { useContext, useRef, useCallback, useState } from "react"
import GridLoader from "react-spinners/GridLoader";
import Pokecard from "../components/PokeCard"
import Filter from "../components/Filter"
import { usePokemonFetch } from "../utils/api/pokedex"
import { SidebarContext, FilterContext } from "../utils/store"

const Pokedex = () => {
    const [page, setPage] = useState(1);
    const { filters } = useContext(FilterContext)
    const { isLoading, hasMore, pokemons } = usePokemonFetch(page, filters)
    const sidebar = useContext(SidebarContext)
    const classes = (sidebar.sidebarStatus.status === 'retracted') ? "" : " pl-60"
    
    const observer = useRef(); // Create an observer 
    const lastPokemonRef = useCallback(  // If we have started loading new Pokemon, or there are no more Pokemon...
        (node) => {
        if (isLoading) return; // Don't change anything if loading.
        if (observer.current) observer.current.disconnect(); // Otherwise, we change our observer's gaze
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                setPage((prev) => prev + 1);
            }
        });
        if (node) observer.current.observe(node);
        },
        [isLoading, hasMore]
    );

    return (
        <section className={"transition-all duration-500 ease-in-out flex flex-col w-auto bg-white dark:bg-gray-700 content-center ml-auto min-h-screen pb-8" + classes}>
            {(pokemons) && (
                <div className="flex flex-col w-auto">
                    <Filter />
                    <div className="flex flex-wrap">
                        {pokemons
                        .filter(pokemon => filters.length === 0 || pokemon.types.filter(typeObject => filters.includes(typeObject.type.name)).length > 0)
                        .map((pokemon, i) => {
                        return (
                            (pokemons.length === i + 1) ? 
                            (<div key={pokemon.id} ref={lastPokemonRef} className="mx-auto px-2">
                                <Pokecard 
                                    id={pokemon.id}
                                    sprites={pokemon.sprites} 
                                    name={pokemon.name} 
                                    types={pokemon.types} 
                                />
                            </div>) : 
                            (<div key={pokemon.id} className="mx-auto px-2">
                                <Pokecard 
                                    id={pokemon.id}
                                    sprites={pokemon.sprites} 
                                    name={pokemon.name} 
                                    types={pokemon.types} 
                                />
                            </div>)
                        )
                        })}
                    </div>
                </div>
            )}
            {(isLoading) && (
                <div className={"flex flex-row items-center justify-center mt-12 w-auto"}>
                    <GridLoader color={"#17ECEC"} size={15}/>
                </div>
            )}
        </section>
    )
}

export default Pokedex