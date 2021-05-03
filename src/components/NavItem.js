const NavItem = (props) => {
    return(
        <a class="font-light font-sans px-4 text-gray-500 dark:text-white hover:text-gray-900 
        cursor-pointer select-none focus:outline-none" href={props.href}>{props.children}</a>
    )
}

export default NavItem