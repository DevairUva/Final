import '../styles/nos.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import isa from '../assets/isa.png'
import carol from '../assets/carol.png'
import dev from '../assets/dev.png'
import wash from '../assets/wash.png'
import linkedin from '../assets/linkedin.png'
import git from '../assets/git.png'




function Nos() {
    return (

        <div className="container marketing">
            <div className="fundo">
                <h2 className="fw-normal textCenterHome"><strong>Desenvolvedores</strong></h2>
                <div className="row">
                    <div className="col-lg-4 nos">
                        <img className="rounded-circle" width="140" height="140" src={carol} alt="" />
                        <h2 className="fw-normal">Carolina Rocha</h2>
                        <p>Desenvolvedora front e designer</p>
                        <img className="bd-placeholder-img" width="30" height="30" src={git} alt=""  />
                        <img className="bd-placeholder-img2" width="25" height="25" src={linkedin} alt=""  />
                       
                    </div>
                    <div className="col-lg-4 nos">
                        <img className="rounded-circle" width="140" height="140" src={dev} alt="" />
                        <h2 className="fw-normal">Devair Martins</h2>
                        <p>Desenvolvedor front e back end</p>
                        <img className="bd-placeholder-img" width="30" height="30" src={git} alt=""  />
                        <img className="bd-placeholder-img2" width="25" height="25" src={linkedin} alt=""  />
                        
                    </div>
                    <div className="col-lg-4 nos">
                        <img className="rounded-circle" width="140" height="140" src={isa} alt="" />
                        <h2 className="fw-normal">Isabela Alves</h2>
                        <p>Desenvolvedora front e back end</p>
                        <img className="bd-placeholder-img" width="30" height="30" src={git} alt=""  />
                        <img className="bd-placeholder-img2" width="25" height="25" src={linkedin} alt=""  />
                    </div>
                    <div className="col-lg-4 nos">
                        <img className="rounded-circle" width="140" height="140" src={wash} alt="" />
                        <h2 className="fw-normal">Washignton Ligel</h2>
                        <p>Desenvolvedor front e back end</p>
                        <img className="bd-placeholder-img" width="30" height="30" src={git} alt=""  />
                        <img className="bd-placeholder-img2" width="25" height="25" src={linkedin} alt=""  />
                    </div>
                
                </div>
            </div>
        </div>






    );
}

export default Nos;


