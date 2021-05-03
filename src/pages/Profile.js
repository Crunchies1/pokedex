import { useContext } from "react"
import { SidebarContext } from "../utils/store"

const Profile = () => {
    const sidebar = useContext(SidebarContext);
    const classes = (sidebar.sidebarStatus.status === 'retracted') ? "" : " pl-60" 

    return (
        <div class={"transition-all duration-500 ease-in-out flex w-auto bg-white dark:bg-gray-700 content-center ml-auto" + classes}>
            Profile
        </div>
    )
}

export default Profile