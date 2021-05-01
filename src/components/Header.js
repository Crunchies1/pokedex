import Button from "./Button";
import Typo from "./Typo";
import { MdDehaze } from "react-icons/md";

const Header = (props) => {
    const classes = props.useSidebar ? " pl-60" : "" 

    return(
        <div class={"transition-all duration-500 ease-in-out flex w-auto h-12 bg-white dark:bg-gray-700 content-center ml-auto border-b border-gray-200" + classes}>
            <div class="flex items-center w-12">
                <Button onClick={props.extendSidebar}>
                    <MdDehaze />
                </Button>
            </div>
            <Typo>
                CPDL
            </Typo>
            <div class="w-1/12" />
            <ul class="flex items-center">
                <li>
                    <Button>
                        Pokedex
                    </Button>
                </li>
                <li>
                    <Button>
                        Draft League
                    </Button>
                </li>
                <li>
                    <Button>
                        Profile
                    </Button>
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