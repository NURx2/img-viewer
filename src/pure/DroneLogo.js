import React from "react";

class DroneLogo extends React.PureComponent{
    render() {
        return (
            <div style={styles.DroneLogo}/>
        );
    }
}

const styles = {
    DroneLogo: {
        width: 150,
        height: 80,
        backgroundSize: "100%",
        backgroundImage: 'url("/static/drone.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }
};

export default DroneLogo;