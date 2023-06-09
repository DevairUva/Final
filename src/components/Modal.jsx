import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/teste.css'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ModalComponente(props) {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [id, setId] = useState('')

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => {
        setShow(true)
        const options = { method: 'GET', url: `http://localhost:3000/usuario/id/${props.id}` }
        axios.request(options).then(function (response) {
            setNome(response.data[0].nome)
            setEmail(response.data[0].email)
            setSenha(response.data[0].senha)
            setId(response.data[0].id_usuario)
        }).catch(function (error) {
            console.error(error);
        });
    };

    const Editar = (() => {
        const dados = {
            nome: nome,
            email: email,
            senha: senha
        }
        console.log(dados)
        axios.put(`http://localhost:3000/usuario/id/${props.id}`, dados)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        setShow(false)
    })

    function Excluir() {

        let opcao = confirm('Deseja realmente excluir os dados do usuário?')
        if (opcao == true) {

            axios.delete(`http://localhost:3000/usuario/id/${props.id}`)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            setShow(false)

            alert('Dados excluidos')

        } else {
            alert('Os dados não foram excluídos')
        }


    }

    return (
        <div>
            <button className='editar' onClick={handleShow} type="submit">Editar</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <h3>Insira novos dados para o usuário {id}</h3>
                            <Form.Label>Nome:</Form.Label>
                            <Form.Control type="text" onChange={(e) => setNome(e.target.value)} value={nome} />
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                            <Form.Label>Senha:</Form.Label>
                            <Form.Control type="text" onChange={(e) => setSenha(e.target.value)} value={senha} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <form action="" className='modalOpcoes'>
                        <button className='editar' type='submit' onClick={Editar}>Salvar alterações</button>
                        <button className='excluir' type='submit' onClick={Excluir}>Excluir usuário</button>
                    </form>
                </Modal.Footer>
            </Modal>
        </div >
    );
}

export default ModalComponente;