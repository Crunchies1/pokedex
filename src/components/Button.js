const Button = (props) => {
    return(
        <button class="font-light font-sans px-4 text-gray-500 dark:text-white hover:text-gray-900 
        cursor-pointer select-none focus:outline-none" onClick={props.onClick}>{props.children}</button>
    )
}

export default Button;