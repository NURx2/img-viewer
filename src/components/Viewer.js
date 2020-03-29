import styled from '@emotion/styled'
import React from 'react'
import { ReactBnbGallery } from 'react-bnb-gallery';

let data = []

const sendRequest = () => {
    fetch("http://localhost:80/items", {
      method: 'GET'
    })
    .then(
      d => {
        console.log('fetch:', d)
        data = d.json()
      }
    )
    .catch(error => console.error(error));
  }

export default class Viewer extends React.Component {
  constructor() {
    super();
    this.state = {
      galleryOpened: false
    };
    sendRequest();
  }

  toggleGallery = () => {
    this.setState(prevState => ({
      galleryOpened: !prevState.galleryOpened
    }));
  }

  getPhotoObjects = (obj) => {
    console.log('getPhotoObjects')
    console.log(obj)
    console.log(data)
    obj && obj.imageUrls.map(
      (url) => (
        {
          photo: url,
          caption: obj.caption,
          subcaption: obj.type
        }
      )
    )
    return obj
  }

  render() {
    return (
      data && <div>
        <button onClick={this.toggleGallery}>
          Open gallery
        </button>
        <ReactBnbGallery
          show={this.state.galleryOpened}
          photos={data && data[0] && this.getPhotoObjects(data[0])}
          onClose={this.toggleGallery}
        />
      </div>
    )
  }
}