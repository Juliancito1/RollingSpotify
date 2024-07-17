import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import Detalle from '../pages/Detalle'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/detalle/:id' element={<Detalle/>}/>
        <Route/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
