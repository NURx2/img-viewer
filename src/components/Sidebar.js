import React from 'react';
import DroneLogo from "../pure/DroneLogo";
import * as constants from '../constants';
import SidebarCategory from "../pure/SidebarCategory";
import SidebarButton from "../pure/SidebarButton";


class SideBar extends React.Component{
    render() {
        return(
            <div style={styles.Sidebar}>
                <div style={styles.SidebarLogo}>
                    <DroneLogo/>
                </div>
                <SidebarCategory
                    category_name="CMS"
                    image_src="/static/cms_icon.png"
                />
                <SidebarButton
                    button_text="Контент"
                    link="/"
                />
                <SidebarButton
                    button_text="Добавление"
                    link="/cms_add"
                />
                <SidebarCategory
                    category_name="Drone"
                    image_src="/static/drone_cat_icon.png"
                />
                <SidebarButton
                    button_text="Распознование ленты"
                    link="/detection"
                />
            </div>
        );
    }
}

const styles = {
    Sidebar: {
        display: "flex",
        position: "fixed",
        height: "100vh",
        width: constants.SidebarWidth,
        flexDirection: "column",
        backgroundColor: "white",
        border: `1px solid ${constants.BorderCommonColor}`,
        boxSizing: 'border-box',
        boxShadow: '0px 4px 40px rgba(126, 82, 200, 0.1)'
    },
    SidebarLogo: {
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: `1px solid ${constants.BorderCommonColor}`
    }
};

export default SideBar;
