import Card from 'react-bootstrap/Card';
import axios from "axios";
import { useEffect, useState } from "react";

function Teste() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    const options = { method: 'GET', url: 'http://localhost:3000/usuario' };
    axios.request(options).then(function (response) {
      setNome(response.data[0].nome)
      setEmail(response.data[0].email)
      setSenha(response.data[0].senha)
    }).catch(function (error) {
      console.error(error);
    });
  }, [])

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [data_criacao, setData_criacao] = useState('')

  useEffect(() => {
    const options = { method: 'GET', url: 'http://localhost:3000/tarefa' };
    axios.request(options).then(function (response) {
      setTitulo(response.data[0].titulo)
      setDescricao(response.data[0].descricao)
      setData_criacao(response.data[0].data_criacao)
    }).catch(function (error) {
      console.error(error);
    });
  }, [])

  console.log(nome)


  return (
    <div className="container topoLog">
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value='a'></textarea><br />
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3">va</textarea><br />
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3">{senha}</textarea>
        <p>{nome}</p>
      </div>

      <Card>
        <Card.Header>{titulo}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {descricao}
            </p>
            <footer className="blockquote-footer">
              {data_criacao}
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Teste;
