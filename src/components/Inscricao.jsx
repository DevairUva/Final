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
        <div class="container topoInsc">
            <div class="py-5 text-center">
                <img class="d-block mx-auto mb-4" src={logo} alt="" width="150" height="90"/>
                <h2>Inscreva-se</h2>
                <p class="lead">Faça a sua inscrição e se torne um programador Full Stack.</p>
            </div>

            <div class="row g-5">
                <div class="col-md-5 col-lg-4 order-md-last">
                    <img class="bd-placeholder-img" width='450px' height='750px' src={programador} alt="" />
                </div>

                <div class="col-md-7 col-lg-8">
                    <h4 class="mb-3">Faça seu cadastro</h4>
                    <form onSubmit={enviarEmail}>
                        <div class="row g-3">
                            {/* <div class="col-sm-6">
                                <label for="firstName" class="form-label">Nome</label>
                                <input type="text" class="form-control" id="lastName" placeholder="" value="" required />
                                <input type="text" class="form-control" placeholder="" value="" required onChange={(e) => setName(e.target.value)}/>
                                <div class="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>

                            <div class="col-sm-6">
                                <label for="lastName" class="form-label">Sobrenome</label>
                                <input type="text" class="form-control" id="lastName" placeholder="" value="" required />
                                <div class="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div> */}

                            <div class="col-sm-6">
                                <label for="username" class="form-label">Nome</label>
                                    <input type="text" class="form-control" id="firstname" required onChange={(e) => setName(e.target.value)}/>
                                    <div class="invalid-feedback">
                                        Your username is required.
                                </div>
                            </div>

                            
                            <div class="col-sm-6">
                                <label for="username" class="form-label">Sobrenome</label>
                                    <input type="text" class="form-control" id="lastname" required onChange={(e) => setName(e.target.value)}/>
                                    <div class="invalid-feedback">
                                        Your username is required.
                                </div>
                            </div>

                            <div class="col-12">
                                <label for="username" class="form-label">Nome de usuário</label>
                                <div class="input-group has-validation">
                                    <span class="input-group-text">@</span>
                                    <input type="text" class="form-control" id="username" placeholder="Usuario" required />
                                    <div class="invalid-feedback">
                                        Your username is required.
                                    </div>
                                </div>
                            </div>

                            <div class="col-12">
                                <label for="username" class="form-label">Nome de usuário</label>
                                <div class="input-group has-validation">
                                    <span class="input-group-text">@</span>
                                    <input type="text" class="form-control" id="username" placeholder="Usuario" required />
                                    <div class="invalid-feedback">
                                        Your username is required.
                                    </div>
                                </div>
                            </div>

                            <div class="col-12">
                                <label for="email" class="form-label">E-mail <span class="text-muted">(Opcional)</span></label>
                                <input type="email" class="form-control" id="email" placeholder="seu@email.com" onChange={(e) => setEmail(e.target.value)} />
                                <div class="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                            </div>

                            <div class="col-12">
                                <label for="address" class="form-label">Endereço</label>
                                <input type="text" class="form-control" id="address" placeholder="rua a, 123 - bairro" required />
                                <div class="invalid-feedback">
                                    Please enter your shipping address.
                                </div>
                            </div>

                            <div class="col-12">
                                <label for="address2" class="form-label">Complemento <span class="text-muted">(Opcional)</span></label>
                                <input type="text" class="form-control" id="address2" placeholder="Casa, apartamento, etc." />
                            </div>

                            <div class="col-md-5">
                                <label for="country" class="form-label">País</label>
                                <select class="form-select" id="country" required>
                                    <option value="">Selecione...</option>
                                    <option>Brasil</option>
                                </select>
                                <div class="invalid-feedback">
                                    Por favor, selecione um país válido.
                                </div>
                            </div>

                            <div class="col-md-4">
                                <label for="state" class="form-label">Estado</label>
                                <select class="form-select" id="state" required>
                                    <option value="">Selecione...</option>
                                    <option>Rio de Janeiro</option>
                                </select>
                                <div class="invalid-feedback">
                                    Por favor, selecione um Estado válido.
                                </div>
                            </div>

                            <div class="col-md-3">
                                <label for="zip" class="form-label">CEP</label>
                                <input type="text" class="form-control" id="zip" placeholder="" required />
                                <div class="invalid-feedback">
                                    É necessário informar o CEP.
                                </div>
                            </div>
                        </div>

                        <hr class="my-4" />

                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="same-address" />
                            <label class="form-check-label" for="same-address">O endereço de entrega é o mesmo do meu endereço de cobrança.</label>
                        </div>

                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="save-info" />
                            <label class="form-check-label" for="save-info">Salvar esta informação para a próxima vez.</label>
                        </div>

                        <hr class="my-4" />

                        <button class="w-100 btn btn-primary btn-lg">Concluir seu cadastro</button>
                    </form>
                </div>

            </div>

        </div >
    )
}
export default Inscricao;