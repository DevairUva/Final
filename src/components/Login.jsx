import { Link } from 'react-router-dom';
import '../styles/login.css';
import pc from '../assets/pc3.png';
import fundo2 from '../assets/fundo42.png'
import login from '../assets/login.png'
import login2 from '../assets/login3.png'
import login3 from '../assets/fundoo.png'


function Login() {
  return (
    <div className="mypage text-center">
  <div className="container topoLog">
    <div className="row">
      <div className="col-md-6">
        <img className="bd-placeholder-img" id="acesso" width="450" height="450" src={login2} alt="" />
      </div>
      <div className="col-md-6">
        <form className="formLog">
          <div className="centroLogin card transparent-bg">
            <h1 className="h3 mb-3 fw-normal">Faça seu login</h1>
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
            <div className="form-group">
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Lembrar me
                </label>
              </div>
              <button id="click" className="btn btn-lg btn-primary" type="submit">
                ENVIAR
              </button>
              <br />
              <br />
              <Link to="/novoUsuario" className="criaConta">
                Não tem cadastro? Crie sua conta
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

  );
}

export default Login;
