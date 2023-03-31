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
import banner6 from '../assets/banner6.png'
import banner3 from '../assets/banner3.png'
import estudo from '../assets/estudo.png'
import fundo from '../assets/fundo3.jpg'
import program from '../assets/program.png'


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

      <div className='background'>
        <div className="alinhar">
          <div className='infoHome'>
            <br /><br /><br />
            <p className='px50'>Projeto Programadores Cariocas selecionam alunos potenciais para o mercado.</p>
            <p className='px20'>A empregabilidade de cursos como esse é de 80% e os salários iniciais giram em torno dos R$ 3 ou R$ 4 mil. A duração da capacitação é de seis meses e a Prefeitura oferece auxílio para incentivar os jovens a concluírem o treinamento.</p>
          </div>
          <div>
            <img width="350" height="350" src={estudo} />
          </div>
        </div>
      </div>

      <div className='background2'>
        <div className="alinhar">
          <div>
            <img width="350" height="350" src={banner6} />
          </div>
          <div className='infoHome2'>
            <br /><br /><br />
            <p className='px50'>Os candidatos podem se inscrever no site.</p>
            <p className='px20'>Estão sendo ofertadas 200 Bolsas Integrais e 1000 parciais. Caso o aluno se qualifique para as bolsas integrais não deverá pagar nada. No caso das bolsas parciais, o aluno só deve efetuar o pagamento caso esteja empregado na área de tecnologia com rendimentos superiores a R$2200.</p>
          </div>
        </div>
      </div>

      <div className='background'>
        <div className="alinhar">
          <div className='infoHome'>
            <br /><br /><br />
            <p className='px50'>Senac RJ capacita 1090 jovens do Programadores Cariocas.</p>
            <p className='px20'>O curso de programação será realizado pelo Senac RJ com uso da metodologia da Resilia Educação, edTech que oferece soluções de aprendizagem para o mercado digital com aulas práticas e projetos desenhados para capacitar estudantes para as necessidades do mundo do trabalho, tanto na área comportamental, as famosas soft skills, quanto na parte técnica. 
</p>
          </div>
          <div>
            <img width="350" height="350" src={program} />
          </div>
        </div>
      </div>

      <h1 className='tdCentroAzul'>Dê um Play nessa ideia</h1>
      <div className="video" >
        <div className="container">
          <h1> </h1>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/YNj2nhTnKsQ" width="800" height="450" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div><br /><br />


    </div>

  );
}

export default Home;