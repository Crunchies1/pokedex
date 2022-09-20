import { useContext } from "react";
import { DarkContext, SidebarContext } from '../utils/store';
import { CgPokemon, CgMoon } from "react-icons/cg";

const Sidebar = () => {
    const sidebar = useContext(SidebarContext);
    const dark = useContext(DarkContext);
    const classes = (sidebar.sidebarStatus.status === 'retracted') ? " -ml-60" : "" 

    return (
        <div class={"transition-all duration-500 ease-in-out h-screen w-60 fixed bg-gray-700 dark:bg-gray-800" + classes}>
            <div class={"h-12 bg-gray-800 dark:bg-gray-900 text-gray-100 flex flex-row items-center pl-8"}>
                <CgPokemon/>
                <h1 class={"font-sans text-gray-200 select-none my-auto font-bold pl-2"}>
                    PokeSite
                </h1>
            </div>
            <ul class="flex flex-col items-start">
                <button class="transition-all duration-500 p-4 pl-8 w-full flex flex-row items-center font-light font-sans text-gray-100 cursor-pointer 
                select-none focus:outline-none hover:bg-gray-600" onClick={() => dark.darkDispatch('swap')}>
                    <CgMoon/>
                    <p class={"pl-2"}>
                        Dark Mode
                    </p>
                </button>
            </ul>
        </div>
    )
}

export default Sidebar