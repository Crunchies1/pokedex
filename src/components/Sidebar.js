import { useContext, useEffect } from "react";
import { SidebarContext } from '../utils/store';

const Sidebar = () => {
    const sidebar = useContext(SidebarContext);
    const classes = (sidebar.sidebarStatus.status === 'retracted') ? " -ml-60" : "" 

    useEffect(() => {
        console.log(sidebar.sidebarStatus.status)
    })

    return (
        <div class={"transition-all duration-500 ease-in-out h-screen w-60 fixed bg-gray-700" + classes}>
            <div class="h-12 bg-gray-800" />
            <ul class="flex flex-col items-start">
                <li class="p-4 pl-8">
                    <a class="font-light font-sans text-gray-100 cursor-pointer 
                    select-none focus:outline-none hover:text-white" href="/">
                        Sample 1
                    </a>
                </li>
                <li class="p-4 pl-8">
                    <a class="font-light font-sans text-gray-100 cursor-pointer 
                    select-none focus:outline-none hover:text-white" href="/">
                        Sample 2
                    </a>
                </li>
                <li class="p-4 pl-8">
                    <a class="font-light font-sans text-gray-100 cursor-pointer 
                    select-none focus:outline-none hover:text-white" href="/">
                        Sample 3
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar