import { useState } from 'react';
import '../styles/novoUsuario.css'
import pc from '../assets/pc3.png'

function NovoUsuario() {

  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [confirmacao, setConfirmacao] = useState('');

  function confirmaSenha(e) {
    e.preventDefault();

    if ((senha != '' && nome != '' && email != '' && confirmacao != '') && senha === confirmacao) {
      alert(`Usuário criado`);
      return;
    } else if (senha !== confirmacao) {
      alert(`As senhas não são iguais`)
      return;
    } else if (senha == '' || nome == '' || email == '' || confirmacao == '') {
      alert(`Preencha todos os campos`)
    }
  }

  return (
    <div>

      <div className='divFoto'>
        <img className='fotoLogin' width="1519px" height="405.9px" src={pc} />
      </div>

      <form className='formNov' onSubmit={confirmaSenha}>
        <h1 className="h3 mb-3 fw-normal">Insira seus dados</h1>

        <div className="centroNov">
          <div className="form-floating">
            <input type="text" className="form-control" id="nome" placeholder="nome" onChange={(e) => setNome(e.target.value)} />
            <label for="nome">Nome</label><br />
          </div>
          <div className="form-floating">
            <input type="email" className="form-control" id="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            <label for="email">Email de acesso</label><br />
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="senha" placeholder="senha" onChange={(e) => setSenha(e.target.value)} />
            <label for="senha">Senha para acesso</label>
          </div><br />
          <div className="form-floating">
            <input type="password" className="form-control" id="confirmacao" placeholder="confirmacao" onChange={(e) => setConfirmacao(e.target.value)} />
            <label for="confirmacao">Repita sua senha</label>
          </div><br />
        </div>
        <button className="btn btn-lg btn-primary" type="submit">CRIAR CONTA</button>
        <p className="mt-5 mb-3 text-muted">&copy;Programadores Cariocas | 2023</p>
      </form>

    </div>
  );
}

export default NovoUsuario;