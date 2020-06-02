import React from 'react';
import Dropzone from 'react-dropzone';


class TapeDetection extends React.Component{
    render() {
        return (
            <div style={styles.TapeDetection}>
            <Dropzone onDrop={files => console.log(files)}>
                {({getRootProps, getInputProps}) => (
                    <div style={styles.dropZoneContainer}>
                        <div
                            {...getRootProps({
                                style: styles.dropZone,
                                onDrop: event => event.stopPropagation()
                            })}
                        >
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop image here, or click to select</p>
                        </div>
                    </div>
                )}
            </Dropzone>
            </div>
        );
    }

}

const styles = {
    TapeDetection: {
        flex: 1,
        height: '100vh',
        display: 'flex',
        paddingTop: 200,
        justifyContent: 'center'
    },
    dropZoneContainer: {
        flex: 1,
        height: 100,
        maxWidth: 500,
        display: 'flex',
        flexDirection: 'column'
    },
    dropZone: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#e1e1e1',
        borderStyle: 'dashed',
        backgroundColor: '#f5f5f5',
    }
};

export default TapeDetection;