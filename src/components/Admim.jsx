import Table from 'react-bootstrap/Table';
import axios from "axios";
import { useEffect, useState } from "react";
import '../styles/teste.css'
import Modal from './Modal';
import Delete from './Delete';

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
        <div className="container">
            <h1 className='centroTeste'>Dados dos usuários:</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nome</th>
                        <th>email</th>
                        <th>senha</th>
                        <th className='tdCentro'>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((dados, index) => {
                        
                        return (
                            <tr key={index}>
                                <td>{dados.id_usuario}</td>
                                <td>{dados.nome}</td>
                                <td>{dados.email}</td>
                                <td>{dados.senha}</td>
                                <td className='tdCentro'><Modal id={dados.id_usuario} nome={dados.nome} email={dados.email} senha={dados.senha}/></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <h1 className='centroTeste'>Apenas Admins podem utilizar essa página</h1>
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