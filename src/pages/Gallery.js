import React from 'react'
import Gallery from '../components/Gallery'

export default function GalleryPage(props) {
  console.log(props.data)
  props.data && console.log(props.data[props.match.params.galleryId].imageUrls)

  return (
    <Gallery data={props.data ? props.data[props.match.params.galleryId] : {}}/>
  )
}