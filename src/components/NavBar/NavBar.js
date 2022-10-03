import './NavBar.css';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
const NavBar = (props) => {
    return (
        <div className="NavBarDiv1">
            <div className="NavBarDiv1plus">
                <div className="NavBarDiv21">
                    <div className="NavBarDiv211">
                        <img src={logo} className="NavBarDiv221Img" alt="logo" />
                    </div>
                    <div className="NavBarHijo212Title">
                        ComputerStore
                    </div>
                </div>
                <div className="NavBarDiv22">
                    <div className="NavBarHijo221">
                        <div className="NavBarHijo2211">
                            <Link className="NavBarHijo2211Inicio" to={'/inicio'}>
                                Inicio
                            </Link>
                        </div>
                        <div> {props.children} </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default NavBar;