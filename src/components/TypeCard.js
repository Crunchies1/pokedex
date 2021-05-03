import { useEffect, useState } from "react";

const TypeCard = (props) => {
    const [typeColor, setTypeColor] = useState("")
    
    useEffect(() => {
        setTypeColor(props.children)
    }, [props.children])

    return(
        <p class={"font-extralight font-sans capitalize text-sm rounded-lg text-center text-gray-100 align-middle select-none w-14 h-6 bg-" + typeColor}>{props.children}</p>
    )
}

export default TypeCard;