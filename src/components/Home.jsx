import { Button, Card } from 'react-bootstrap';
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
import fundo from '../assets/fundo3.jpg'


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


      <div class="container marketing">
        <div class="fundo">
          <h2 class="fw-normal text-center" id="titulo"><strong>Idealizadores</strong></h2>
          <div class="row">
            <div class="col-md-4 col-sm-12">
              <img class="rounded-circle mx-auto d-block" id="person" width="140" height="140" src={edu} alt="" />
              <h2 class="fw-normal text-center">Eduardo Paes</h2>
              <p class="text-center">É o atual prefeito do Rio de Janeiro, cargo que ocupou anteriormente de 2009 a 2017.</p>
            </div>
            <div class="col-md-4 col-sm-12">
              <img class="rounded-circle mx-auto d-block" id="person" width="140" height="140" src={chico} alt="" />
              <h2 class="fw-normal text-center">Chicão Bulhões</h2>
              <p class="text-center">Secretário municipal de Desenvolvimento Econômico, Inovação e Simplificação.</p>
            </div>
            <div class="col-md-4 col-sm-12">
              <img class="rounded-circle mx-auto d-block" id="person" width="140" height="140" src={marcel} alt="" />
              <h2 class="fw-normal text-center">Marcel Balassiano</h2>
              <p class="text-center">Subsecretário municipal de Desenvolvimento Econômico e Inovação.</p>
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

      <div class="container marketing2">
        <div class="featurette-divider" />
        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading fw-normal lh-1">Estão sendo ofertadas 200 Bolsas Integrais e 1000 parciais.</h2>
            <p class="lead2">Caso o aluno se qualifique para as bolsas integrais não deverá pagar nada. No caso das bolsas parciais, o aluno só deve efetuar o pagamento caso esteja empregado na área de tecnologia com rendimentos superiores a R$2200.</p>
          </div>
          <div class="col-md-5 order-md-1">
            <div class="text-center">
              <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#eee" />
                <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      

      <div className="video" >
        
  <div className="container">
    <h1></h1>
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/YNj2nhTnKsQ" width="800" height="450" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
</div>


    </div>

      );
}

      export default Home;