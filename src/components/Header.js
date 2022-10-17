import { useContext } from "react";
import NavItem from "./NavItem";
import Button from "./Button";
import Typo from "./Typo";
import { MdDehaze } from "react-icons/md";
import { CgComponents } from "react-icons/cg";
import { SidebarContext } from '../utils/store';

const Header = () => {
    const sidebar = useContext(SidebarContext);
    const classes = (sidebar.sidebarStatus.status === 'retracted') ? "" : " pl-60" 

    return(
        <div className={"transition-all duration-500 ease-in-out flex w-auto h-12 bg-white dark:bg-gray-700 content-center ml-auto border-b border-gray-200 dark:border-gray-400" + classes}>
            <div className="flex items-center">
                <Button styleName={`flex flex-row items-center`} onClick={() => sidebar.sidebarDispatch('swap')}>
                    <MdDehaze />
                    <Typo>
                        Options
                    </Typo>
                </Button>
            </div>
            <div className="w-1/12" />
            <ul className="flex items-center">
                <li>
                    <NavItem styleName={"flex flex-row items-center"} href="/">
                        <CgComponents />
                        <Typo className={"pl-2"}>
                            Pokedex
                        </Typo>
                    </NavItem>
                </li>
            </ul>
        </div>
    )
}

export default Header