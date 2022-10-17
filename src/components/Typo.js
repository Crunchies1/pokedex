const Typo = (props) => {
    return(
        <p className={`font-light font-sans text-gray-500 dark:text-white select-none my-auto px-4 ${props.class}`}>{props.children}</p>
    )
}

export default Typo;