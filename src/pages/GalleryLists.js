import React from 'react'
import styled from '@emotion/styled'
import GalleryRepresentation from '../components/GalleryRepresentation'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default function GalleryListsPage(props) {
  return (
    <Container>
      {
        props.data && props.data.map(
          (currentValue, index) => (
            <GalleryRepresentation url={currentValue.imageUrls[0]} key={index}/>     
          )
        )
      }
    </Container>
  )
}