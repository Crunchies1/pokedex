const Sidebar = (props) => {
    const classes = props.useSidebar ? "" : " -ml-60"

    return (
        <div class={"transition-all duration-500 ease-in-out h-screen w-60 fixed bg-gray-700" + classes}>
            <div class="h-12 bg-gray-800">

            </div>
            <ul class="flex flex-col items-start">
                <li class="p-4 pl-8">
                    <a class="font-light font-sans text-gray-100 cursor-pointer 
                    select-none focus:outline-none hover:text-white">
                        Sample 1
                    </a>
                </li>
                <li class="p-4 pl-8">
                    <a class="font-light font-sans text-gray-100 cursor-pointer 
                    select-none focus:outline-none hover:text-white">
                        Sample 2
                    </a>
                </li>
                <li class="p-4 pl-8">
                    <a class="font-light font-sans text-gray-100 cursor-pointer 
                    select-none focus:outline-none hover:text-white">
                        Sample 3
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar