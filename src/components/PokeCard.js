import { useEffect, useState } from "react"
import TypeCard from "./TypeCard"

const Pokecard = (props) => {
    const [types, setTypes] = useState([])

    useEffect(() => {
        const typeList = []
        typeList.push(props.types[0].type.name)
        if (props.types.length === 1) {
            typeList.push(props.types[0].type.name)
        } else {
            typeList.push(props.types[1].type.name)
        }
        setTypes(typeList)
    }, [props.types])

    return (
        <div className={"flex flex-col items-start border-2 border-gray-400 bg-gradient-to-r from-" + types[0] + "-bg to-" + types[1] + "-bg rounded-lg p-6 mt-8 mx-4 shadow-md"}>
            <div>
                <img src={props.sprites.front_default} alt={props.name} width="120" height="120" />
            </div>
            <div className="flex justify-center w-full">
                <p className="text-xs font-thin text-gray-500 dark:text-gray-200">
                    {"#" + props.id}
                </p>
            </div>
            <div className="flex justify-center w-full">
                <p className="capitalize pb-1.5 font-medium dark:text-gray-100">
                    {props.name}
                </p>
            </div>
            <div className="flex w-full justify-evenly">
                {props.types.map((type) => {
                    return <TypeCard key={type.type.name}>  
                        {type.type.name} 
                    </TypeCard>
                })}
            </div>
        </div>
    )
}

export default Pokecard