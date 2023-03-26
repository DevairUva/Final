import { useState } from 'react';
import '../styles/novoUsuario.css'

function NovoUsuario() {

  const [senha, setSenha] = useState('');
  const [confirmacao, setConfirmacao] = useState('');

  function confirmaSenha(e) {
    e.preventDefault();

    if (senha === confirmacao) {
      alert(`Usuário criado`);
      return;
    } else {
      alert(`As senhas são iguais`)
      return;
    }
  }

  return (
    <div className="container topoNov">

      <form className='formNov' onSubmit={confirmaSenha}>
        <img className="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
        <h1 className="h3 mb-3 fw-normal">Insira seus dados</h1>

        <div className="centroNov">
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Nome</label><br />
          </div>
          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email de acesso</label><br />
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setSenha(e.target.value)} />
            <label for="floatingPassword">Senha para acesso</label>
          </div><br />
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setConfirmacao(e.target.value)} />
            <label for="floatingPassword">Repita sua senha</label>
          </div><br />
        </div>
        <button className="btn btn-lg btn-primary" type="submit">Criar conta</button>
        <p className="mt-5 mb-3 text-muted">&copy; Squad 3 | Programadores Cariocas - Irajá | 2023</p>
      </form>

    </div>
  );
}

export default NovoUsuario;