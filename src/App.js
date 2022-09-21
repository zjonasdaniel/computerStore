import './App.css';
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListConteiner from './pages/ItemListConteiner/ItemListConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar>
          <CartWidget />
        </NavBar>
        <Routes>
          <Route path='/' element={<ItemListConteiner greeting='Hola, Bienveni@s!' />} />
          <Route path='/inicio' element={<ItemListConteiner greeting='Hola, Bienveni@s!' />} />
          <Route path='/tienda' element={<ItemListConteiner greeting='Hola, Bienveni@s!' />} />
          <Route path='/nosotros' element="HOla vendemos compus" />
          <Route path='/contacto' element="Seguinos en FB" />
          <Route path='/cart' element= "HOLA" />
          <Route path='/detail/:id' element={<ItemDetailContainer/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
