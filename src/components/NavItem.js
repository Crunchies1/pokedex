const NavItem = (props) => {
    return(
        <a className={`font-light font-sans px-4 text-gray-500 dark:text-white hover:text-gray-900 dark:hover:text-gray-400
        cursor-pointer select-none focus:outline-none ${props.styleName}`} href={props.href}>{props.children}</a>
    )
}

export default NavItem