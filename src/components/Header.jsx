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
import logo from '../assets/logo.png'

function Header() {
  return (
    <div>
      <nav className="navbar fixed-top" data-bs-theme="dark">
        <div className="navHeader">
          <div>
            <button className="navbar-toggler botaoEspaco" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
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
                    <button className='fecharMenu' data-bs-dismiss="offcanvas"><Link to='/' className="nav-link active">Home</Link></button>
                    {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                  </li>
                  <li className="nav-item">
                    <button className='fecharMenu' data-bs-dismiss="offcanvas"><Link to='/polos' className="nav-link active">Polos</Link></button>
                    {/* <a className="nav-link" href="#">Pesqui</a> */}
                  </li>
                  <li className="nav-item">
                    <button className='fecharMenu' data-bs-dismiss="offcanvas"><Link to='/nos' className="nav-link active">Nós</Link></button>
                    {/* <a className="nav-link" href="#">Pesqui</a> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Link to='/login' className="navbar-brand"><img className="rounded-circle" width="120" height="60" src={logo} alt="" /></Link>
          {/* <a className="navbar-brand" href="/home">Inscreva-se</a> */}
          <div>
            <Link to='/inscricao' className="navbar-brand">Inscreva-se</Link>
            <Link to='/login' className="navbar-brand"><img className="rounded-circle" id="login" width="40" height="40" src={login} alt="" /></Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
