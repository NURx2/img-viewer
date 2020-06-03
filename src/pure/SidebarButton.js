import React from "react";
import {withRouter, Link} from 'react-router-dom';
import * as constants from '../constants';


class SidebarButton extends React.Component{
    render() {
        return (
            <Link style={this.props.link !== this.props.location.pathname
                ? styles.SideBarButton: {...styles.SideBarButton, ...styles.SidebarActiveButton}}
                  to={this.props.link}>
                <div style={styles.SideBarButtonText}>
                    {this.props.button_text}
                </div>
            </Link>
        );
    }
}

const styles = {
    SideBarButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: constants.SidebarButtonHeight,
        paddingLeft: constants.SidebarButtonPaddingLeft
    },
    SidebarActiveButton: {
        backgroundColor: constants.BackgroundActiveColor
    },
    SideBarButtonText: {
        fontSize: constants.TextSmall,
        color: constants.CommonTextColor,

    }
};

export default withRouter(SidebarButton);
