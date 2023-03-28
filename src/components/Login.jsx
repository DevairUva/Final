import { Link } from 'react-router-dom';
import '../styles/login.css';
import pc from '../assets/pc3.png';

function Login() {
  return (
    <div className="container topoLog">
      <form className="formLog">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="bd-placeholder-img" width="auto" height="auto" src={pc} alt="" />
          </div>
        </div>
        <h1 className="h3 mb-3 fw-normal">Faça seu login</h1>
        <div className="centroLogin">
          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">E-mail</label>
            <br />
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Senha</label>
          </div>
          <br />
        </div>
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Lembrar me
          </label>
        </div>
        <button id="button" className="btn btn-lg btn-primary" type="submit">
          ENVIAR
        </button>
        <br />
        <br />
        <Link to="/novoUsuario" className="criaConta">
          Crie sua conta
        </Link>
        <p className="mt-5 mb-3 text-muted">&copy; Programadores Cariocas | 2023</p>
      </form>
    </div>
  );
}

export default Login;
