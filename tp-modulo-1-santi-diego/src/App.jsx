import { useState } from 'react'
import { TarjetaInfo } from './components/TarjetaInfo/TarjetaInfo'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'

function App() {
  return (
    <>
    <Header />
      <main>
        <div>
          <div className='contenedor-tarjetas'>
            <TarjetaInfo  
              titulo="Componente A"
              descripcion="Este es un componente reutilizable"
              url_imagen="https://via.placeholder.com/300"
              url_link="https://reactjs.org"
            />
            <TarjetaInfo  
              titulo="Componente B"
              descripcion="Este es otro componente reutilizable con React."
              url_imagen="https://via.placeholder.com/300"
            />
            <TarjetaInfo  
              titulo="Componente C"
              descripcion="Este es un componente reutilizable"
              url_imagen="https://via.placeholder.com/300"
              url_link="https://www.google.com"
            />
            <TarjetaInfo  
              titulo="Componente D"
              descripcion="Este es otro componente reutilizable con React."
              url_imagen="https://via.placeholder.com/300"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
