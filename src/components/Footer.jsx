import '../styles/footer.css'

function Footer() {
  return (
    <div className='containerDiv' id='container-imagem'>
      <div className="container fundoFooter py-4">
        <footer className="py-5 footerW">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>Programa</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 textColor textColor">História</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 textColor">Organização</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 textColor">OUTRO</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 textColor">OUTRO</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 textColor">OUTRO</a></li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Parceiros</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 textColor">Resília</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 textColor">Senac</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 textColor">Senai</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 textColor">OUTRO</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 textColor">OUTRO</a></li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Redes</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 textColor">Instagram</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 textColor">Twitter</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 textColor">Facebook</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 textColor">OUTRO</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 textColor">OUTRO</a></li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Quer saber mais?</h5>
                <p>Deixe seu endereço de email para receber mais informações:</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" className="visually-hidden">Email address</label>
                  <input type="email" id="newsletter1" />
                  <button className="btn btn-primary" type="button">Enviar</button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>&copy;Programadores Cariocas | 2023</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#twitter" /></svg></a></li>
              <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram" /></svg></a></li>
              <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#facebook" /></svg></a></li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default Footer;