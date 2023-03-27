import '../styles/inscricao.css'
import emailjs from '@emailjs/browser'
import programador from '../assets/15.png'
import logo from '../assets/logo.png'
import { useState } from 'react'

function Inscricao() {

    const [namE, setName] = useState('');
    const [emaiL, setEmail] = useState('')

    function enviarEmail(e){
        e.preventDefault();
        
        const templateParams = {
            from_name: namE,
            from_email: emaiL
        }

        emailjs.send("service_0s8pl2q", "template_xckv6m7", templateParams, "sJ2esEo7IHslJLodL")
        .then((response) => {
            alert(`Inscrição realizada. Confira sua caixa de email.`, response.status, response.text)
        }, (err)=>{
            alert(`Não foi possível realizar sua inscrição. `, err)
        })
    }

    return (
        <div className="container topoInsc">
            <div className="py-5 text-center">
                <img className="d-block mx-auto mb-4" src={logo} alt="" width="150" height="90"/>
                <h2>Inscreva-se</h2>
                <p className="lead">Faça a sua inscrição e se torne um programador Full Stack.</p>
            </div>

            <div className="row g-5">
                <div className="col-md-5 col-lg-4 order-md-last">
                    <img className="bd-placeholder-img" width='450px' height='750px' src={programador} alt="" />
                </div>

                <div className="col-md-7 col-lg-8">
                    <h4 className="mb-3">Faça seu cadastro</h4>
                    <form onSubmit={enviarEmail}>
                        <div className="row g-3">

                            <div className="col-sm-6">
                                <label for="username" className="form-label">Nome</label>
                                    <input type="text" className="form-control" id="firstname" required onChange={(e) => setName(e.target.value)}/>
                                    <div className="invalid-feedback">
                                        Your username is required.
                                </div>
                            </div>

                            
                            <div className="col-sm-6">
                                <label for="username" className="form-label">Sobrenome</label>
                                    <input type="text" className="form-control" id="lastname" required/>
                                    <div className="invalid-feedback">
                                        Your username is required.
                                </div>
                            </div>

                            <div className="col-12">
                                <label for="username" className="form-label">Nome de usuário</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text">@</span>
                                    <input type="text" className="form-control" id="username" placeholder="Usuario" required />
                                    <div className="invalid-feedback">
                                        Your username is required.
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <label for="email" className="form-label">E-mail <span className="text-muted"></span></label>
                                <input type="email" className="form-control" id="email" placeholder="seu@email.com" onChange={(e) => setEmail(e.target.value)} />
                                <div className="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                            </div>

                            <div className="col-12">
                                <label for="address" className="form-label">Endereço</label>
                                <input type="text" className="form-control" id="address" placeholder="rua a, 123 - bairro" required />
                                <div className="invalid-feedback">
                                    Please enter your shipping address.
                                </div>
                            </div>

                            <div className="col-12">
                                <label for="address2" className="form-label">Complemento <span className="text-muted">(Opcional)</span></label>
                                <input type="text" className="form-control" id="address2" placeholder="Casa, apartamento, etc." />
                            </div>

                            <div className="col-md-5">
                                <label for="country" className="form-label">País</label>
                                <select className="form-select" id="country" required>
                                    <option value="">Selecione...</option>
                                    <option>Brasil</option>
                                </select>
                                <div className="invalid-feedback">
                                    Por favor, selecione um país válido.
                                </div>
                            </div>

                            <div className="col-md-4">
                                <label for="state" className="form-label">Estado</label>
                                <select className="form-select" id="state" required>
                                    <option value="">Selecione...</option>
                                    <option>Rio de Janeiro</option>
                                </select>
                                <div className="invalid-feedback">
                                    Por favor, selecione um Estado válido.
                                </div>
                            </div>

                            <div className="col-md-3">
                                <label for="zip" className="form-label">CEP</label>
                                <input type="text" className="form-control" id="zip" placeholder="" required />
                                <div className="invalid-feedback">
                                    É necessário informar o CEP.
                                </div>
                            </div>
                        </div>

                        <hr className="my-4" />

                        {/* <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="same-address" />
                            <label className="form-check-label" for="same-address">O endereço de entrega é o mesmo do meu endereço de cobrança.</label>
                        </div> */}

                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="save-info" />
                            <label className="form-check-label" for="save-info">Salvar esta informação para a próxima vez.</label>
                        </div>

                        <hr className="my-4" />

                        <button className="w-100 btn btn-primary btn-lg" type="submit">Concluir seu cadastro</button>
                    </form>
                </div>

            </div>

        </div >
    )
}
export default Inscricao;