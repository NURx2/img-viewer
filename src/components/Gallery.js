import React from 'react'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"

export default function Gallery(props) {
  const items = props.data && 'images' in props.data && props.data.images.map(
    obj => {
      return {
        original: obj.url,
        thumbnail: obj.url,
        description: obj.rawData,
      }
    }
  )

  return (
    <div style={{height: '100vh', overflow: 'hidden'}}>
      <div style={{margin: '10px auto 10px', textAlign: 'center'}}>{`${props.data.caption} [${props.data.type}]`}</div>
      <div style={{transform: 'scale(0.9) translateY(-45px)'}}>
        <ImageGallery items={items || []} showPlayButton={false} showBullets={true}/>
        </div>
    </div>
  )
}
