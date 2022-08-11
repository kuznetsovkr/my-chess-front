import React, { useState } from "react";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
import big_logo from '../chess/assets/logo_big.png';
import small_logo from '../chess/assets/logo.png';


const Header = () => {

    const [menuCollapse, setMenuCollapse] = useState(false)

    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    return (
        <>
            <div id="header">
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                            <p style={{margin:5}}>{menuCollapse ?
                                <img src={small_logo} style={{maxWidth: 70}}/>
                                :
                                <img src={big_logo} style={{maxWidth: 220}}/>}
                            </p>

                        <div className="closemenu" onClick={menuIconClick}>
                            {menuCollapse ? (
                                <FiArrowRightCircle/>
                            ) : (
                                <FiArrowLeftCircle/>
                            )}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem icon={<RiPencilLine />}>Новая партия</MenuItem>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">

                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    );
};

export default Header;
