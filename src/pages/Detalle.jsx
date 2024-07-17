import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useArtistasStore from '../zustand/Artistas-Zustand'
import { Table } from 'react-bootstrap'

const Detalle = () => {
  const {id} = useParams()
  
  const getArtista = useArtistasStore(state => state.getArtista)
  const artista = useArtistasStore(state => state.artista)
  const getCanciones = useArtistasStore(state => state.getCanciones)
  const canciones = useArtistasStore(state => state.canciones)

  useEffect(() => {
    getArtista(id)
  }, [id])
  
  
  useEffect(() => {
    if(artista)
    {
      console.log(artista)
      getCanciones(artista.tracklist)
    }
  }, [])

  
  return (
    <>
    {artista && <section className='container'>
      <h1 className='text-center'>{artista.name}</h1>
      <div className='text-center my-3'>
        <img src={artista.picture_big} alt="imagen artista" />
      </div>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre de la Cancion</th>
          <th>Duracion en Segundos</th>
          <th>Preview</th>
        </tr>
      </thead>
      <tbody>
        {
          canciones.length > 0 && canciones.map(cancion => (
            <tr key={cancion.id}>
            <td>{cancion.id}</td>
            <td>{cancion.title}</td>
            <td>{cancion.duration}</td>
            <td>
              <audio controls>
                <source src={cancion.preview} type='audio/mp3'/>
              </audio>
            </td>
          </tr>
          ))
        }
      </tbody>
    </Table>
    </section> }
    
  </>
  )
}

export default Detalle
