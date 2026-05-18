import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Carrito } from './components/Carrito/Carrito';
import { Home } from './components/Home/Home';
import { Layout } from './components/Layout/Layout';

function App() {
  
  return (
  <>
    <Layout>
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/Inicio' element={<Home />}> </Route>
        <Route path='/Productos' element={< ItemListContainer />}> </Route>
        <Route path='/Productos/:id' element={< ItemDetailContainer />}> </Route>
        <Route path='/Contacto' element={<h2>CONTACTO</h2>}> </Route>
        <Route path='/Carrito' element={<Carrito/>}> </Route>
      </Routes>
    </Layout>
  </> );
}

export default App;
