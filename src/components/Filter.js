import { useContext, useState } from "react"
import { MdSearch, MdClear } from "react-icons/md"
import Button from "./Button"
import { FilterContext } from "../utils/store"
import Typo from "./Typo"

const Filter = () => {

    const [isOpen, setIsOpen] = useState(false)
    const { filters, setFilters } = useContext(FilterContext);

    const addFilter = (type) => {  
        if (!filters.includes(type)) {
            setFilters([...filters, type])
            console.log(filters)
        }
    }

    const removeFilter = (name) => {
        const deleted = filters.filter((type) => type !== name);
        setFilters(deleted);
        console.log(filters)
    }

    const types = [
      'normal',
      'fire',
      'water',
      'grass',
      'poison',
      'ground',
      'electric',
      'flying',
      'psychic',
      'ghost',
      'dark',
      'dragon',
      'fairy',
      'steel',
      'fighting',
      'bug',
      'ice',
      'rock'
    ]

    return (
        <div className={"border-2 border-gray-400 rounded-lg p-3 mt-8 shadow-md mx-8"}>
            <div className={"flex flex-row flex-wrap items-center "}>
                <Button styleName={"flex flex-row items-center"} onClick={() => setIsOpen(!isOpen)}>
                    <MdSearch />
                </Button>
                {!filters.length && (
                    <Typo>
                        Click the Search Icon to filter by type!
                    </Typo>
                )}
                <div className={"flex flex-row flex-wrap items-center "}>
                    {filters.map((type) => {
                        return (
                            <button key={type} 
                            className={`font-extralight text-gray-100 dark:text-gray-100 font-sans capitalize text-xl 
                            cursor-pointer rounded-md px-4 m-2 bg-` + type} 
                            onClick={() => removeFilter(type)}>
                                {type}
                            </button>
                        );
                    })}
                </div>
                <Button styleName={"ml-auto flex flex-row items-center"} onClick={() => setFilters([])}>
                    <MdClear />
                </Button>
            </div>
            {isOpen && (
                <div className={"flex flex-row flex-wrap items-center pt-2"}>
                    {types.map((type) => {
                        return (
                            <button key={type} 
                                className={`shadow-sm font-extralight text-gray-800 dark:text-gray-100 font-sans capitalize text-xl 
                                cursor-pointer rounded-md px-4 m-2 bg-` + type +`-bg border-2 border-` + type} 
                                onClick={() => addFilter(type)}>
                                {type}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    )
}

export default Filter