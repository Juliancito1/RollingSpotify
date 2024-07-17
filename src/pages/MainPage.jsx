import React, { useEffect } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import useArtistasStore from '../zustand/Artistas-Zustand'
import { Link } from 'react-router-dom'
import Buscador from '../components/Buscador'

const MainPage = () => {
    const artistas = useArtistasStore(state => state.artistas)
    const getArtistas = useArtistasStore(state => state.getArtistas)
    console.log(artistas)

    useEffect(() => {
     getArtistas()
    }, [getArtistas])
    

  return (
    <section className='bg-dark'>

    <section className='container'>
      <h1 className='text-light'>Artistas</h1>
      {/* <Buscador/> */}
      <Row>
        {artistas.length > 0 && artistas.map(artista => (
            <Col className='mx-2 my-2'>
            <Card key={artista.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={artista.picture_medium} />
            <Card.Body>
              <Card.Title>{artista.name}</Card.Title>
              <Link to={`/detalle/${artista.id}`} className='btn btn-success' variant="primary">Ver Canciones</Link>
            </Card.Body>
          </Card>
            </Col>
        ))}
    </Row>
    </section>
        </section>
  )
}

export default MainPage
