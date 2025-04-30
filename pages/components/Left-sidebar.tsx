import { FC } from "react";
import sass from '/styles/mainpage.module.scss'
import SidebarButton from "./Sidebar-button";
import Burger_Icon from "../../public/Burger_icon.svg"

const LeftSidebar: FC = () => {
    return(
        <div className={sass.left_sidebar}>
            <SidebarButton className={sass.hamburhermenu_button}>
                <img className={sass.hamburhermenu_icon} src="\Burger_icon.svg" />
            </SidebarButton>
            <div className={sass.buttongroup_left_sidebar}>
                <SidebarButton className={sass.contact_us_button_left_sidebar}>
                    <img className={sass.hamburhermenu_icon} src="\Telegram_icon.svg" />
                </SidebarButton>
                <SidebarButton className={sass.contact_us_button_left_sidebar}>
                    <img className={sass.hamburhermenu_icon} src="\Telegram_icon.svg" />
                </SidebarButton>
                <SidebarButton className={sass.contact_us_button_left_sidebar}>
                    <img className={sass.hamburhermenu_icon} src="\Telegram_icon.svg" />
                </SidebarButton>
            </div>
        </div>
    )
}

export default LeftSidebar;
