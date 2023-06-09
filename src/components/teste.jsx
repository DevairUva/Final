import Table from 'react-bootstrap/Table';
import axios from "axios";
import { useEffect, useState } from "react";
import '../styles/teste.css'


function Teste() {
  const [id, setId] = useState('')
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [dados, setDados] = useState([])

  useEffect(() => {
    const options = { method: 'GET', url: 'http://localhost:3000/usuario' };
    axios.request(options).then(function (response) {
      setDados(response.data)
    }).catch(function (error) {
      console.error(error);
    });
  }, [])

  function Editar(idEd) {
    axios.GET(`http://localhost:3000/usuario/${idEd}`, user).then(function (response) {
      console.error(response);
    }).catch(function (error) {
      console.error(error);
    });
    setNome(response.dados.nome)
    setEmail(response.dados.email)
    setSenha(response.dados.senha)
    const user = {
      nome: nome,
      email: email,
      senha: senha
    }
    axios.put(`http://localhost:3000/usuario/${idEd}`, user).then(function (response) {
      console.error(response);
    }).catch(function (error) {
      console.error(error);
    });
  }

  return (
    <div className="container topoLog">
      <h1 className='centroTeste'>Dados dos usuários:</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>nome</th>
            <th>email</th>
            <th>senha</th>
            <th>editar</th>
            <th>excluir</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((dados, index) => {
            return (
              <tr key={index}>
                <td><input type="text" name="" id="" value={dados.id_usuario} /></td>
                <td><input type="text" value={dados.nome} /></td>
                <td><input type="text" value={dados.email} /></td>
                <td><input type="text" value={dados.senha} /></td>
                <td><a onClick={() => Editar(dados.id_usuario)}><button className='editar'>Editar</button></a></td>
                <td><a onClick={() => Editar(dados.id_usuario)}><button className='excluir'>Excluir</button></a></td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  );
}
export default Teste;

  // const [titulo, setTitulo] = useState('')
  // const [descricao, setDescricao] = useState('')
  // const [data_criacao, setData_criacao] = useState('')

  // useEffect(() => {
  //   const options = { method: 'GET', url: 'http://localhost:3000/tarefa' };
  //   axios.request(options).then(function (response) {
  //     setTitulo(response.data[0].titulo)
  //     setDescricao(response.data[0].descricao)
  //     setData_criacao(response.data[0].data_criacao)
  //   }).catch(function (error) {
  //     console.error(error);
  //   });
  // }, [])

  // function variaveis(){
  //   alert(`nome: ${nome}`)
  //   console.log(`nome: ${nome}`)
  // }