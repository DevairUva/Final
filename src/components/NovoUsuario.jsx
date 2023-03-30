import { useState } from 'react';
import '../styles/novoUsuario.css'
import pc from '../assets/pc3.png'
import axios from 'axios';
import login2 from '../assets/login3.png'

function NovoUsuario() {

  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [confirmacao, setConfirmacao] = useState('');

  const Inserir = ((e) => {
    e.preventDefault()

    const dados = {
      nome: nome,
      email: email,
      senha: senha
    }

    if ((senha != '' && nome != '' && email != '' && confirmacao != '') && senha === confirmacao) {

      console.log(dados)

      axios.post('http://localhost:3000/usuario', dados)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        });

      alert(`Usuário criado!`)

    } else if (senha == '' || nome == '' || email == '' || confirmacao == '') {
      alert(`Preencha todos os campos`)
    } else if (senha !== confirmacao) {
      alert(`As senhas não são iguais`)
    }

  })

  return (
    <div>
      <div className='mypage'>
        <div className="container topoLog">
          <form className="formLog">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="bd-placeholder-img" id="acesso" width="450" height="450" src={login2} alt="" />
              </div>
            </div>
            <div className="centroLogin card transparent-bg">

              {/* <div className='divFoto'>
                <img className='fotoLogin' width="1519px" height="405.9px" src={pc} />
              </div> */}

              <form className='formNov' onSubmit={(e) => { Inserir(e) }}>
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
              </form>

            </div>
          </form>
        </div>
      </div>
    </div>


  );
}

export default NovoUsuario;

  // function confirmaSenha(e) {
  //   e.preventDefault();

  //   if ((senha != '' && nome != '' && email != '' && confirmacao != '') && senha === confirmacao) {
  //     alert(`Usuário criado`);
  //     return;
  //   } else if (senha !== confirmacao) {
  //     alert(`As senhas não são iguais`)
  //     return;
  //   } else if (senha == '' || nome == '' || email == '' || confirmacao == '') {
  //     alert(`Preencha todos os campos`)
  //   }
  // }