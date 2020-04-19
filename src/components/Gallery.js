import React, {useState} from 'react'
import { ReactBnbGallery } from 'react-bnb-gallery';

export default function Gallery(props) {
  const [galleryOpened, setGalleryOpened] = useState(false)

  const getPhotoObjects = (data) => {
    const photos = data && data.imageUrls.map(
      (url) => (
        {
          photo: url,
          caption: data.caption,
          subcaption: data.type
        }
      )
    )
    console.log('GetPhotoObjects:', photos)
    return photos
  }

  const toggleGallery = () => {
    setGalleryOpened(!galleryOpened)
  }

  return (
    <div>
      <button onClick={toggleGallery}>
        Open gallery
      </button>
      <ReactBnbGallery
        show={galleryOpened}
        photos={props.data && getPhotoObjects(props.data)}
        onClose={toggleGallery}
      />
    </div>
  )
}