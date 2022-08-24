import logo from '../logo.svg';
const NavBar = () => {
    return ( 
        <div className="NavBarAbuelo">
        <div className="NavBarPadre">
            <div className="NavBarHijo1"><img src={logo} className="NavBarHijo1" alt="logo" /> </div>
            <ul className="NavBarHijo2">
                <li><a href='../../public/index.html'>Inicio</a></li>
                <li><a href='../../public/index.html'>Tienda</a></li>
                <li><a href='../../public/index.html'>Nosotros</a></li>
                <li><a href='../../public/index.html'>Contacto</a></li>
            </ul>
        </div>
    </div>
    )
};
export default NavBar;