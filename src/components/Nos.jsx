import '../styles/nos.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import isa from '../assets/isa.png'
import carol from '../assets/carol.png'
import dev from '../assets/dev.png'
import wash from '../assets/wash.png'
import ana from '../assets/ana.png'
import linkedin from '../assets/linkedin.png'
import git from '../assets/git.png'




function Nos() {
    return (

        <div className="container marketing">
            <div className="fundo">
                <h2 className="fw-normal textCenterHome"><strong>Desenvolvedores</strong></h2>
                <div className="row">
                <div className="col-md-4 col-xs-6 nos">
                        <img className="rounded-circle" width="140" height="140" src={ana} alt="" />
                        <h2 className="fw-normal">Ana Clara</h2>
                        <p>Desenvolvedora front e back end</p>
                       <a href="https://github.com/Ana21ah"> <img className="bd-placeholder-img" id="git" width="30" height="30" src={git} alt="" /></a>
                        <a href="https://www.linkedin.com/in/ana-clara-matias-02068b200/"><img className="bd-placeholder-img2" width="25" height="25" src={linkedin} alt=""  /></a>
                    </div>

                    <div className="col-md-4 col-xs-6 nos">
                        <img className="rounded-circle" width="140" height="140" src={carol} alt="" />
                        <h2 className="fw-normal">Carolina Rocha</h2>
                        <p>Desenvolvedora front e designer</p>
                       <a href="https://github.com/carolrc"> <img className="bd-placeholder-img" id="git" width="30" height="30" src={git} alt="" /></a>
                        <a href="https://www.linkedin.com/in/carolrc/"><img className="bd-placeholder-img2" width="25" height="25" src={linkedin} alt=""  /></a>
                       
                       
                    </div>
                    <div className="col-md-4 col-xs-6 nos">
                        <img className="rounded-circle" width="140" height="140" src={dev} alt="" />
                        <h2 className="fw-normal">Devair Martins</h2>
                        <p>Desenvolvedor front e back end</p>
                         <a href="https://github.com/DevairUva"><img className="bd-placeholder-img" id="git" width="30" height="30" src={git} alt=""   /></a>
                        <a href="https://br.linkedin.com/in/devair-martins-2a6376190/"><img className="bd-placeholder-img2" width="25" height="25" src={linkedin} alt=""  /></a>
                        
                    </div>
                    <div className="col-md-4 col-xs-6 nos">
                        <img className="rounded-circle" width="140" height="140" src={isa} alt="" />
                        <h2 className="fw-normal">Isabela Alves</h2>
                        <p>Desenvolvedora front e back end</p>
                        <a href="https://github.com/isabelaalvesc"><img className="bd-placeholder-img" id="git" width="30" height="30" src={git} alt=""  /></a>
                        <a href="https://br.linkedin.com/in/isabela-alves-1ab8951a4/"><img className="bd-placeholder-img2" width="25" height="25" src={linkedin} alt=""  /></a>
                    </div>
                    <div className="col-md-4 col-xs-6 nos">
                          <img className="rounded-circle" width="140" height="140" src={wash} alt="" />
                        <h2 className="fw-normal">Washignton Ligel</h2>
                        <p>Desenvolvedor front e back end</p>
                        <a href="https://github.com/WashLigel"><img className="bd-placeholder-img" id="git" width="30" height="30" src={git} alt="" /></a>
                       <a href="https://www.linkedin.com/in/WashLigel/"><img className="bd-placeholder-img2" width="25" height="25" src={linkedin} alt=""  /></a>
                    </div>
                
                </div>
            </div>
        </div>






    );
}

export default Nos;


