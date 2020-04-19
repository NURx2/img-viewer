import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eb4d4b;
  text-align: center;
  margin: 40px 0;
`

export default function NotFoundPage() {
  return (
    <Container>
      <h1>404 Not Found</h1>
    </Container>
  )
}