import logo from '../assets/logo.png'
import "../styles/pesquisa.css"


function Pesquisa() {
  return (

    <div className="container topoLog">

      <div className="py-5 text-center">
        {/* <img className="d-block mx-auto mb-4" src={logo} alt="" width="130" height="70" /> */}
        <h3>Conheça nossos polos de ensino</h3>
      </div>

      <form classNameName='formLog'>
        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
          <option selected>Selecione uma Unidade</option>
          <option value="1">Bangu</option>
          <option value="2">Bonsucesso</option>
          <option value="3">Campo Grande</option>
          <option value="4">Centro</option>
          <option value="5">Irajá</option>
          <option value="6">Jacarepaguá</option>
          <option value="7">Madureira</option>
          <option value="8">Riachuelo</option>
        </select>

        <div className="py-5 text-start">
          <label for="basic-url" className="form-label">Nome da unidade</label>
          <input type="text" className="form-control" id="nome_un" placeholder="" value="" disabled /> <br />

          <label for="basic-url" className="form-label">Bairro da unidade</label>
          <input type="text" className="form-control" id="local_un" placeholder="" value="" disabled /> <br />

          <label for="basic-url" className="form-label">Coordenador da unidade</label>
          <input type="text" className="form-control" id="coord_un" placeholder="" value="" disabled /> <br />

          <div className="row g-3">
            <div className="col-sm-6">
              <label for="basic-url" className="form-label">Professor</label>
              <input type="text" className="form-control" id="prof_un" placeholder="" value="" disabled />
            </div>

            <div className="col-sm-6">
              <label for="basic-url" className="form-label">Quantidade de alunos</label>
              <input type="text" className="form-control" id="qtd_al_un" placeholder="" value="" disabled /> <br />
            </div>
          </div>

          <div className="mb-3">
            <label for="sobre_un" className="form-label">Sobre</label>
            <textarea className="form-control" id="sobre_un" rows="5" disabled></textarea>
          </div>
        </div>
      </form>

    </div>
  );
}
export default Pesquisa;