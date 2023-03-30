import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/teste.css'

function Delete() {

  function Excluir(props) {
    axios.delete(`http://localhost:3000/usuario/id/${props.id}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setShow(false)
  }

  function confirmacao(){
    let opcao = confirm('Deseja realmente excluir os dados do usuário?')
    if (opcao == true){
      alert('Dados excluidos')
      Excluir(props)
    } else {
      alert('Os dados não foram excluídos')
    }
  }

  return (
    <div>
      <button className='excluir' onClick={Excluir}>Excluir</button>
    </div>
  )
}

export default Delete