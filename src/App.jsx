import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom'
import { Layout } from './components/Layout/Layout';
import { CuerpoPosteo } from './components/CuerpoPosteo';
import { Productos } from './components/Productos/Productos';

function App() {
  
  return (
  <>
    <Layout>
      <Routes>
        <Route path='/Inicio' element={< CuerpoPosteo />}> </Route>
        <Route path='/Productos' element={< Productos />}> </Route>
        <Route path='/Contacto' element={<h2>CONTACTO</h2>}> </Route>
        <Route path='/Carrito' element={<h2>CARRITO</h2>}> </Route>
      </Routes>
    </Layout>
  </> );
}

export default App;
