import React from "react";
import {withRouter} from 'react-router-dom';
import * as constants from '../constants';


class SidebarCategory extends React.Component{
    styles = {
        SidebarCategory:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: constants.SidebarCategoryHeight
        },
        SideBarCategoryImage:{
            flex: 3,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        SidebarCategoryIcon: {
            height: constants.SidebarCategoryIconSize,
            width: constants.SidebarCategoryIconSize,
            backgroundImage: `url(${this.props.image_src})`,
            backgroundSize: '100%',
        },
        SideBarCategoryText: {
            flex: 7,
            color: constants.CommonTextColor,
            fontSize: constants.TextMedium
        }
    };

    render() {
        return (
            <div style={this.styles.SidebarCategory}>
                <div style={this.styles.SideBarCategoryImage}>
                    <div style={this.styles.SidebarCategoryIcon}/>
                </div>
                <div style={this.styles.SideBarCategoryText}>
                    {this.props.category_name}
                </div>
            </div>
        );
    }
}

export default withRouter(SidebarCategory);
