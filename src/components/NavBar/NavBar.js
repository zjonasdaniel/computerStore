import './NavBar.css';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
const NavBar = (props) => {
    return ( 
        <div className="NavBarAbuelo">
        <div className="NavBarPadre">
            <div className="NavBarHijo1"><img src={logo} className="NavBarHijo1" alt="logo" /> </div>
            <ul className="NavBarHijo2">
                <li>  
                    <Link to={'/inicio'}>
                        Inicio
                    </Link> 
                </li>
                <li>  
                    <Link to={'/tienda'}>
                        Tienda
                    </Link> 
                </li>
                <li>  
                    <Link to={'/nosotros'}>
                        Nosotros
                    </Link> 
                </li>
                <li>  
                    <Link to={'/contacto'}>
                        Contacto
                    </Link> 
                </li>
                <li> {props.children} </li>
            </ul>
        </div>
    </div>
    )
};
export default NavBar;