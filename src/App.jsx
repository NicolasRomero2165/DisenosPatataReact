import { Encabezado } from './components/Encabezado/Encabezado'
import { CuerpoPosteo } from './components/CuerpoPosteo'
import { PieDePosteo } from './components/Footer/PieDePosteo'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

function App() {
  
  return (
  <>
    <Encabezado/>
    <main>
    <Routes>
      <Route path='/Inicio' element={< CuerpoPosteo/>}> </Route>
      <Route path='/Productos' element={<h2>PRODUCTOS</h2>}> </Route>
      <Route path='/Contacto' element={<h2>CONTACTO</h2>}> </Route>
      <Route path='/Carrito' element={<h2>CARRITO</h2>}> </Route>
    </Routes>
    </main>
    <PieDePosteo/>
  </> );
}

export default App;
