import React, { useState } from 'react'
import { ReactBnbGallery } from 'react-bnb-gallery';

export default function Gallery(props) {
  // getPhotoObjects = (obj) => {
  //   console.log('getPhotoObjects')
  //   obj && obj.imageUrls.map(
  //     (url) => (
  //       {
  //         photo: url,
  //         caption: obj.caption,
  //         subcaption: obj.type
  //       }
  //     )
  //   )
  //   return obj
  // }

  return (
    props.data && <div>
      <button onClick={this.toggleGallery}>
        Open gallery
      </button>
      <ReactBnbGallery
        photos={data && data[0] && getPhotoObjects(data[0])}
        onClose={this.toggleGallery}
      />
    </div>
  )
}