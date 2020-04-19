import React from 'react'
import styled from '@emotion/styled'

const ImageContainer = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 25px;
  margin: 10px 20px 10px;
  overflow: hidden;
  cursor: pointer;
`

const Image = styled.img`
  width: 100%;
  background-size: cover;
  background-position: center;
`

export default function GalleryRepresentation(props) {
  return (
    <ImageContainer>
      <Image src={props.url}/>
    </ImageContainer>
  )
}