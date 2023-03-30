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

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => {
        setShow(true)
        const options = { method: 'GET', url: `http://localhost:3000/usuario/id/${props.id}` }
        axios.request(options).then(function (response) {
            setNome(response.data[0].nome)
            setEmail(response.data[0].email)
            setSenha(response.data[0].senha)
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

    // function Excluir() {
    //     axios.delete(`http://localhost:3000/usuario/id/${props.id}`)
    //         .then(function (response) {
    //             console.log(response);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    //     setShow(false)
    // }

    return (
        <div>
            <button className='editar' onClick={handleShow}>Editar</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => { Inserir(e) }}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
                    <Button type='submit' variant="primary" onClick={Editar}>
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ModalComponente;