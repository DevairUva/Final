import Card from "react-bootstrap/Card";
import axios from "axios";
import { useEffect, useState } from "react";

function Teste() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

//   useEffect(()=>{
//       const option = { method: 'GET', url : 'http://localhost:3000/usuario'};
//       axios.request(options).then(function (response){
//           setNome(response.data[0].nome)
//           setEmail(response.data[0].email)
//           setSenha(response.data[0].senha)
//       }).catch(function(error){
//           console.error(error);
//       });
//   },[])

  return (
    // <div class="container topoLog">
    //   <div class="mb-3">
    //     <label for="exampleFormControlTextarea1" class="form-label">
    //       Example textarea
    //     </label>
    //     <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">a</textarea>
    //     <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">a</textarea>
    //     <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">a</textarea>
    //   </div>
    // </div>

    <Card class="container topoLog">
      <Card.Header>{nome} a</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <div class="mb-3">
         <label for="exampleFormControlTextarea1" class="form-label">
           Example textareaa
         </label>
         {/* <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">a</textarea><br/>
         <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">a</textarea><br/>
         <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">a</textarea> */}

         <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">{nome}</textarea><br/>
         <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">a</textarea><br/>
         <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">a</textarea>

       </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
export default Teste;
