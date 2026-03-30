import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Encabezado } from './components/Encabezado'
import { CuerpoPosteo } from './components/CuerpoPosteo'
import { PieDePosteo } from './components/PieDePosteo'

function App() {
  return (
  <>
    <Encabezado/>
    <CuerpoPosteo/>
    <PieDePosteo/>
  </> );
}

export default App;
