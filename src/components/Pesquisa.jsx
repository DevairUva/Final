import { useState, useEffect } from 'react';
import logo from '../assets/logo.png'
import "../styles/pesquisa.css"
import axios from 'axios';
import mapa from '../assets/map.gif'


function Pesquisa() {

  const [unidade, setUnidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [coordenador, setCoordenador] = useState('');
  const [professor, setProfessor] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [sobre, setSobre] = useState('');
  const [selecionado, setSelecionado] = useState('')


  useEffect(() => {
    const options = { method: 'GET', url: `http://localhost:3000/polo/${selecionado}` };
    axios.request(options).then(function (response) {
      setUnidade(response.data[0].nome)
      setBairro(response.data[0].local)
      setCoordenador(response.data[0].coordenador)
      setProfessor(response.data[0].professor)
      setQuantidade(response.data[0].qtd_alunos)
      setSobre(response.data[0].sobre)
    }).catch(function (error) {
      console.error(error);
    });
  }, [selecionado])


  return (

    <div className="container topoLog">
      
      <div className='video2 justify-content-center'>
        <img className="mapa" width="563" height="300" src={mapa} alt="" />
      </div>      

      <div className="py-5 text-center">
        <h3>Conheça nossos polos de ensino</h3>
      </div>

      <form classNameName='formLog'>
        <select onChange={(e) => setSelecionado(e.target.value)
        } id='secionado' className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
          <option selected>Selecione uma Unidade</option>
          <option value="1">Irajá</option>
          <option value="2">Madureira</option>
          <option value="3">Riachuelo</option>
          <option value="4">Bonsucesso</option>
          <option value="5">Campo Grande</option>
          <option value="6">Centro</option>
          <option value="7">Botafogo</option>
          <option value="8">Barra da Tijuca</option>
        </select>

        <div className="py-5 text-start">
          <label for="basic-url" className="form-label">Nome da unidade</label>
          <input type="text" className="form-control" id="nome_un" placeholder="" value={unidade} disabled /> <br />

          <label for="basic-url" className="form-label">Bairro da unidade</label>
          <input type="text" className="form-control" id="local_un" placeholder="" value={bairro} disabled /> <br />

          <label for="basic-url" className="form-label">Coordenador da unidade</label>
          <input type="text" className="form-control" id="coord_un" placeholder="" value={coordenador} disabled /> <br />

          <div className="row g-3">
            <div className="col-sm-6">
              <label for="basic-url" className="form-label">Professor</label>
              <input type="text" className="form-control" id="prof_un" placeholder="" value={professor} disabled />
            </div>

            <div className="col-sm-6">
              <label for="basic-url" className="form-label">Quantidade de alunos</label>
              <input type="text" className="form-control" id="qtd_al_un" placeholder="" value={quantidade} disabled /> <br />
            </div>
          </div>

          <div className="mb-3">
            <label for="sobre_un" className="form-label">Sobre</label>
            <textarea className="form-control" id="sobre_un" rows="5" disabled value={sobre}></textarea>
          </div>
        </div>
      </form>

    </div>
  );
}
export default Pesquisa;