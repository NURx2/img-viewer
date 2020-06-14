import React from 'react';
import Dropzone from 'react-dropzone';
import * as constants from '../../constants';
import Loader from 'react-loader-spinner'
import {TAPE_URl} from "../../static/urls";
import "./TapeDetection.css";


class TapeDetection extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            image_src: undefined,
            detect_image_src: undefined,
            angle: undefined
        };
    }

    receiveImage = (files) => {
        this.setState({
            image_src: URL.createObjectURL(files[0])
        });
        let form_data = new FormData();
        form_data.append("tape", files[0]);
        let angle;

        fetch(TAPE_URl, {
            method: "POST",
            body: form_data
        })
            .then(response=> {
                angle = response.headers.get('angle');
                return response;
            })
            .then(response => response.blob())
            .then(response => {
                setTimeout(
                    () => this.setState({
                        detect_image_src: URL.createObjectURL(response),
                        angle: angle
                }), 1000);

            })
            .catch(console.log);
    };

    getDescription = () => {
        return `угол поворота - ${Math.round(this.state.angle * 100) / 100}`;
    };

    render() {
        return (
            <div style={styles.TapeDetection}>
                {
                    this.state.image_src === undefined ?
                    <Dropzone onDrop={this.receiveImage}>
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
                    </Dropzone> :
                    <div style={styles.ImagesBlock}>
                        <div style={styles.ImageBlock}>
                            <img style={styles.ImageLoaded} src={this.state.image_src}/>
                        </div>
                        {this.state.detect_image_src ?
                            <div style={styles.DetectedImageBlock}>
                                <img style={styles.DetectImageLoaded} src={this.state.detect_image_src}/>

                                <div style={styles.DetectedImageDescription}>
                                    {this.getDescription()}
                                </div>
                            </div>
                            :
                            <div style={styles.ImageBlock}>
                                <Loader type="Circles"
                                        color="#282c34"
                                        height={constants.TapeImageSize / 2}
                                        width={constants.TapeImageSize / 2}
                                />
                            </div>
                        }
                    </div>
                }
            </div>
        );
    }

}

const styles = {
    TapeDetection: {
        flex: 1,
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
    },
    ImagesBlock: {
        display: "flex",
        justifyContent: 'space-between',
        width: constants.TapeImageSize * 2 + 100,
        boxShadow: '0px 4px 40px rgba(126, 82, 200, 0.1)',
        backgroundColor: '#f5f5f5',
        height: constants.TapeImageSize
    },
    ImageBlock: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: `1px solid ${constants.BorderCommonColor}`,
        width: constants.TapeImageSize,
        height: constants.TapeImageSize
    },
    ImageLoaded:{
        width: constants.TapeImageSize,
        height: constants.TapeImageSize
    },
    DetectImageLoaded: {
        minWidth: constants.TapeImageSize,
        height: constants.TapeImageSize,
        animationName: 'detection_animation',
        animationDuration: '1s'
    },
    DetectedImageBlock: {
        display: 'flex',
        flexDirection: 'column',
    },
    DetectedImageDescription: {
        padding: 20,
        marginTop: 40,
        borderRadius: 5,
        border: `1px solid ${constants.BorderCommonColor}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export default TapeDetection;