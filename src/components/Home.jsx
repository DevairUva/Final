import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/home.css'
import edu from '../assets/edu.png'
import agua from '../assets/agua.jpeg'
import chico from '../assets/chico.png'
import marcel from '../assets/marcel.png'
import prog from '../assets/prog.jpg'
import video from '../assets/video.mp4'
import banner from '../assets/banner.png'
import banner4 from '../assets/banner4.png'
import banner3 from '../assets/banner3.png'
import estudo from '../assets/estudo.png'


function Home() {
  return (
    <div className='topoHome h-100'>

      <div id="myCarousel" className="carousel slide h-100" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        
        <div className="carousel-inner h-100">
          <div className="carousel-item active h-100">
            <img className="bd-placeholder-img h-100" width="100%" height="100%" src={banner} alt="" />
            <div className="container">
            </div>
          </div>
          <div className="carousel-item h-100">
            <img className="bd-placeholder-img h-100" width="100%" height="100%" src={banner3} alt="" />
            <div className="container">
            </div>
          </div>
          <div className="carousel-item h-100">
            <img className="bd-placeholder-img h-100" width="100%" height="100%" src={banner4} alt="" />
            <div className="container">
            </div>
          </div>
        </div>
       
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        </div>


      <div className="container marketing">
        <div className="fundo">
          <h2 className="fw-normal textCenterHome"><strong>Idealizadores</strong></h2>
          <div className="row">
            <div className="col-sm-4">
              <img className="rounded-circle" width="140" height="140" src={edu} alt="" />
              <h2 className="fw-normal">Eduardo Paes</h2>
              <p>É o atual prefeito do Rio de Janeiro, cargo que ocupou anteriormente de 2009 a 2017.</p>
              {/* <p><a className="btn btn-info" href="#">View details &raquo;</a></p> */}
            </div>
            <div className="col-sm-4">
              <img className="rounded-circle" width="140" height="140" src={chico} alt="" />
              <h2 className="fw-normal">Chicão Bulhões</h2>
              <p>Secretário municipal de Desenvolvimento Econômico, Inovação e Simplificação.</p>
              {/* <p><a className="btn btn-info" href="#">View details &raquo;</a></p> */}
            </div>
            <div className="col-sm-4">
              <img className="rounded-circle" width="140" height="140" src={marcel} alt="" />
              <h2 className="fw-normal">Marcel Balassiano</h2>
              <p>Subsecretário municipal de Desenvolvimento Econômico e Inovação.</p>
              {/* <p><a className="btn btn-info" href="#">View details &raquo;</a></p> */}
            </div>
          </div>
        </div>
      </div>

      <div className="background">
        <div className="container marketing1">
          < div className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-6">
              <h2 className="featurette-heading fw-normal hl-1 ">Projeto Programadores Cariocas capacita jovens do Rio para a área de TI.</h2>
              <p className="lead">Iniciativa da Prefeitura oferece bolsas, auxílio financeiro e computadores para formar profissionais.</p>
            </div>
            <div className="col-md-5">
              <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="350" height="350" src={estudo} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container marketing2">
        <div className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">Estão sendo ofertadas 200 Bolsas Integrais e 1000 parciais.</h2>
            <p className="lead2">Caso o aluno se qualifique para as bolsas integrais não deverá pagar nada. No caso das bolsas parciais, o aluno só deve efetuar o pagamento caso esteja empregado na área de tecnologia com rendimentos superiores a R$2200.</p>
          </div>
          <div className="col-md-5 order-md-1">
            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
          </div>
        </div>
      </div>


      <div className="video">
        <iframe width="854" height="480" src="https://www.youtube.com/embed/YNj2nhTnKsQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      
    </div>




  );
}
export default Home;