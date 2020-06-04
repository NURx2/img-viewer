import React from 'react'
import styled from '@emotion/styled'
import GalleryRepresentation from '../components/GalleryRepresentation'
import { Link } from 'react-router-dom'

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
            <Link to={'/gallery/' + index.toString()} key={index}>
              <GalleryRepresentation url={currentValue.images[0] && currentValue.images[0].url}/>     
            </Link>
          )
        )
      }
    </Container>
  )
}