import './App.css';
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListConteiner from './pages/ItemListConteiner/ItemListConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer'
import CartProvider from './context/CartProvider';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar>
            <CartWidget />
          </NavBar>
          <Routes>
            <Route path='/' element={<ItemListConteiner greeting='Hola, Bienveni@s!' />} />
            <Route path='/inicio' element={<ItemListConteiner greeting='Hola, Bienveni@s!' />} />
            <Route path='/tienda' element={<ItemListConteiner greeting='Hola, Bienveni@s!' />} />
            <Route path='/cart' element={ <Cart/> } />
            <Route path='/detail/:Id' element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
