import { useContext } from "react";
import NavItem from "./NavItem";
import Button from "./Button";
import Typo from "./Typo";
import { MdDehaze } from "react-icons/md";
import { SidebarContext } from '../utils/store';

const Header = () => {
    const sidebar = useContext(SidebarContext);
    const classes = (sidebar.sidebarStatus.status === 'retracted') ? "" : " pl-60" 

    return(
        <div class={"transition-all duration-500 ease-in-out flex w-auto h-12 bg-white dark:bg-gray-700 content-center ml-auto border-b border-gray-200" + classes}>
            <div class="flex items-center w-12">
                <Button onClick={() => sidebar.sidebarDispatch('swap')}>
                    <MdDehaze />
                </Button>
            </div>
            <Typo>
                CPDL
            </Typo>
            <div class="w-1/12" />
            <ul class="flex items-center">
                <li>
                    <NavItem href="/">
                        Pokedex
                    </NavItem>
                </li>
                <li>
                    <NavItem>
                        Draft League
                    </NavItem>
                </li>
                <li>
                    <NavItem href="/profile">
                        Profile
                    </NavItem>
                </li>
            </ul>
            <div class="ml-auto my-auto pr-4">
                <Button>
                    Log out
                </Button>
            </div>
        </div>
    )
}

export default Header