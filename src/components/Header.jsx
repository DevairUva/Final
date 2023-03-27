import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom'
import '../styles/header.css'
import login from '../assets/icon.png'

function Header() {
  return (
    <div>
      <nav className="navbar fixed-top" data-bs-theme="dark">
        <div className="navHeader">
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Programadores Cariocas</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to='/' className="nav-link active">Home</Link>
                  {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                </li>
                <li className="nav-item">
                  <Link to='/polos' className="nav-link active">Polos</Link>
                  {/* <a className="nav-link" href="#">Pesqui</a> */}
                </li>
                <li className="nav-item">
                  <Link to='/nos' className="nav-link active">Nós</Link>
                  {/* <a className="nav-link" href="#">Pesqui</a> */}
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <Link to='/inscricao' className="navbar-brand"></Link>
          {/* <a className="navbar-brand" href="/home">Inscreva-se</a> */}
          <div>
            <Link to='/inscricao' className="navbar-brand">Inscreva-se</Link>
            <Link to='/login' className="navbar-brand"><img className="rounded-circle" width="40" height="40" src={login} alt="" /></Link> 
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
