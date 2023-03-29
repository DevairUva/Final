import Table from 'react-bootstrap/Table';
import axios from "axios";
import { useEffect, useState } from "react";

function Teste() {
  const [id, setId] = useState('')
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    const options = { method: 'GET', url: 'http://localhost:3000/usuario' };
    axios.request(options).then(function (response) {
      setId(response.data[0].id_usuario)
      setNome(response.data[0].nome)
      setEmail(response.data[0].email)
      setSenha(response.data[0].senha)
    }).catch(function (error) {
      console.error(error);
    });
  }, [])

  return (
    <div className="container topoLog">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>nome</th>
            <th>email</th>
            <th>senha</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{nome}</td>
            <td>{email}</td>
            <td>{senha}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>

      <button>clicar</button>
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