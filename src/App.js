import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import { ItemCount } from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar>
        <CartWidget/>
      </NavBar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ItemListConteiner greeting='Hola, Bienveni@s!'/>
        <ItemCount/>
        <ItemDetailContainer/>
      </header>
    </div>
  );
}

export default App;
