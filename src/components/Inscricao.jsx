import '../styles/inscricao.css'
import emailjs from '@emailjs/browser'
import programador from '../assets/15.png'
import logo from '../assets/logo.png'
import { useState } from 'react'
import background from '../assets/fundo2.png'
import inscricao from '../assets/inscricao.png'

function Inscricao() {

    const [namE, setName] = useState('');
    const [emaiL, setEmail] = useState('')

    function enviarEmail(e) {
        e.preventDefault();

        const templateParams = {
            from_name: namE,
            from_email: emaiL
        }

        emailjs.send("service_m6mx9ze", "template_q8z0kmj", templateParams, "xNQV6yF19uzXombYa")
            .then((response) => {
                alert(`Inscrição realizada. Confira sua caixa de email.`, response.status, response.text)
            }, (err) => {
                alert(`Não foi possível realizar sua inscrição. `, err)
            })
    }

    return (
        <div className="backs">
            <div className="col-md-4">
                <img className="bd-placeholder-img" id="acesso" width="450" height="450" src={inscricao} alt="" />
            </div>
            <div className="container topoInsc">
                <div className="py-5 text-center">
                    {/* <p className="lead3">Faça a sua inscrição e se torne um programador Full Stack.</p> */}
                </div>

                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        {/* <img className="bd-placeholder-img" width='430px' height='750px' src={programador} alt="" /> */}
                    </div>

                    <div className="col-md-7 col-lg-6">
                        <h4 className="mb-3"   id="principal">Faça seu cadastro</h4>
                        <form onSubmit={enviarEmail}>
                            <div className="row g-3">

                                <div class="d-flex flex-row">
                                    <div class="col-sm-5" id="nomeform">
                                        <label for="username" class="form-label">Nome</label>
                                        <input type="text" class="form-control" id="firstname" required onChange={(e) => setName(e.target.value)} />
                                        <div class="invalid-feedback">
                                            Your username is required.
                                        </div>
                                    </div>

                                    <div class="col-sm-5" id="nomeform">
                                        <label for="username" class="form-label">Sobrenome</label>
                                        <input type="text" class="form-control" id="lastname" required />
                                        <div class="invalid-feedback">
                                            Your username is required.
                                        </div>
                                    </div>

                                    <div class="col-10" id="nomeform" >
                                        <label for="username" class="form-label">Nome de usuário</label>
                                        <div class="input-group has-validation">
                                            <span class="input-group-text">@</span>
                                            <input type="text" class="form-control" id="username" placeholder="Usuario" required />
                                            <div class="invalid-feedback">
                                                Your username is required.
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="d-flex flex-row">
                                    <div class="col-10" id="nomeform">
                                        <label for="email" class="form-label">E-mail <span class="text-muted"></span></label>
                                        <input type="email" class="form-control" id="email" placeholder="seu@email.com" onChange={(e) =>
                                            setEmail(e.target.value)} />
                                        <div class="invalid-feedback">
                                            Please enter a valid email address for shipping updates.
                                        </div>
                                    </div>

                                    <div class="col-10" id="nomeform">
                                        <label for="address" class="form-label">Endereço</label>
                                        <input type="text" class="form-control" id="address" placeholder="rua a, 123 - bairro" required />
                                        <div class="invalid-feedback">
                                            Please enter your shipping address.
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="d-flex align-items-center">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="save-info" />
                                    <label className="form-check-label" for="save-info">Salvar esta informação para a próxima vez.</label>
                                </div>
                                <hr className="my-4 flex-grow-1" />
                                <button className="btn btn-primary btn-lg btn-block" id="botaozao" type="submit">CONCLUIR CADASTRO</button>

                            </div>

                        </form>
                    </div>

                </div>

            </div >
        </div>
    )
}
export default Inscricao;