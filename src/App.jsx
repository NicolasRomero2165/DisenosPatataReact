import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
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
        <Route path='/Contacto' element={<h2>CONTACTO</h2>}> </Route>
        <Route path='/Carrito' element={<h2>CARRITO</h2>}> </Route>
      </Routes>
    </Layout>
  </> );
}

export default App;
