import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/home.css'
import edu from '../assets/edu.jpg'
import agua from '../assets/agua.jpeg'
import chico from '../assets/chico.png'
import marcel from '../assets/marcel.png'
import prog from '../assets/prog.jpg'

function Home() {
  return (
    <div className='topoHome'>

      <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="bd-placeholder-img" width="100%" height="100%" src={agua} alt="" />
            {/* <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg> */}
            <div class="container">
              <div class="carousel-caption text-start">
                <h1>Programadores Cariocas</h1>
                <p>Uma iniciativa da Prefeitura do Rio de Janeiro</p>
                <p><a class="btn btn-lg btn-primary" href="#">PODEMOS TIRAR ESSE BOTÃO</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg>
            <div class="container">
              <div class="carousel-caption">
                <h1>Another example headline.</h1>
                <p>Some representative placeholder content for the second slide of the carousel.</p>
                <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg>
            <div class="container">
              <div class="carousel-caption text-end">
                <h1>One more for good measure.</h1>
                <p>Some representative placeholder content for the third slide of this carousel.</p>
                <p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>


      <div class="container marketing">
        <div class="fundo">
          <h2 class="fw-normal textCenterHome">Idealizadores</h2>
          <div class="row">
            <div class="col-lg-4">
              <img class="rounded-circle" width="140" height="140" src={edu} alt="" />
              <h2 class="fw-normal">Eduardo Paes</h2>
              <p>Prefeito da cidade do Rio de Janeiro.</p>
              <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
            <div class="col-lg-4">
              <img class="rounded-circle" width="140" height="140" src={chico} alt="" />
              <h2 class="fw-normal">Chicão Bulhões</h2>
              <p>Secretário municipal de Desenvolvimento Econômico, Inovação e Simplificação.</p>
              <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
            <div class="col-lg-4">
              <img class="rounded-circle" width="140" height="140" src={marcel} alt="" />
              <h2 class="fw-normal">Marcel Balassiano</h2>
              <p>Subsecretário municipal de Desenvolvimento Econômico e Inovação.</p>
              <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
          </div>
        </div>
      </div>

      <div class="background">
        <div class="container marketing1">
          < div class="featurette-divider" />

          <div class="row featurette">
            <div class="col-md-6">
              <h2 class="featurette-heading fw-normal lh-1">Projeto Programadores Cariocas capacita jovens do Rio para a área de TI.</h2>
              <p class="lead">Iniciativa da Prefeitura oferece bolsas, auxílio financeiro e computadores para formar profissionais.</p>
            </div>
            <div class="col-md-5">
              <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={prog} alt="" />
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
            <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
          </div>
        </div>
      </div>

      <div class="background">
        <div class="container marketing3">
          <div class="featurette-divider" />

          <div class="row featurette">
            <div class="col-md-6">
              <h2 class="featurette-heading fw-normal lh-1">A meta é formar cinco mil profissionais nos próximos três anos</h2>
              <p class="lead">O Programadores Cariocas também vai oferecer dois auxílios para todos os jovens matriculados: um financeiro de R$ 500 por mês e um computador ao concluírem o curso.</p>
            </div>
            <div class="col-md-5">
              <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
            </div>
          </div>
        </div>
      </div>

      <div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
</div>

      <div class="container marketing4">
        <div class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading fw-normal lh-1">A capacitação é oferecida por duas empresas: Senac, em parceria com a Resília, e a Generation.</h2>
            <p class="lead2">O curso acontecerá em oito bairros do Rio: Madureira, Riachuelo, Irajá, Bonsucesso, Campo Grande, Centro, Bangu e Jacarepaguá.</p>
          </div>
          <div class="col-md-5 order-md-1">
            <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
          </div>
        </div>
      </div>
    </div>
    



  );
}
export default Home;