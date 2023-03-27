import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import isa from '../assets/isa.png'
import carol from '../assets/carol.png'
import dev from '../assets/dev.png'
import wash from '../assets/wash.png'




function Nos() {
    return (

        <div className="container marketing">
            <div className="fundo">
                <h2 className="fw-normal textCenterHome"><strong>Desenvolvedores</strong></h2>
                <div className="row">
                    <div className="col-lg-4">
                        <img className="rounded-circle" width="140" height="140" src={carol} alt="" />
                        <h2 className="fw-normal">Carolina Rocha</h2>
                        <p>É o atual prefeito do Rio de Janeiro, cargo que ocupou anteriormente de 2009 a 2017.</p>
                        {/* <p><a className="btn btn-info" href="#">View details &raquo;</a></p> */}
                    </div>
                    <div className="col-lg-4">
                        <img className="rounded-circle" width="140" height="140" src={dev} alt="" />
                        <h2 className="fw-normal">Devair Martins</h2>
                        <p>Secretário municipal de Desenvolvimento Econômico, Inovação e Simplificação.</p>
                        {/* <p><a className="btn btn-info" href="#">View details &raquo;</a></p> */}
                    </div>
                    <div className="col-lg-4">
                        <img className="rounded-circle" width="140" height="140" src={isa} alt="" />
                        <h2 className="fw-normal">Isabela Alves</h2>
                        <p>É o atual prefeito do Rio de Janeiro, cargo que ocupou anteriormente de 2009 a 2017.</p>
                        {/* <p><a className="btn btn-info" href="#">View details &raquo;</a></p> */}
                    </div>
                    <div className="col-lg-4">
                        <img className="rounded-circle" width="140" height="140" src={wash} alt="" />
                        <h2 className="fw-normal">Washignton Ligel</h2>
                        <p>Secretário municipal de Desenvolvimento Econômico, Inovação e Simplificação.</p>
                        {/* <p><a className="btn btn-info" href="#">View details &raquo;</a></p> */}
                    </div>
                
                </div>
            </div>
        </div>






    );
}

export default Nos;


