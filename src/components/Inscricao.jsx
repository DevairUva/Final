import '../styles/inscricao.css'
import agua from '../assets/agua.jpeg'
import programador from '../assets/programador.jpg'

function Inscricao() {
    return (
        <div class="container topoInsc">
            <div class="py-5 text-center">
                <img class="d-block mx-auto mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                <h2>Inscreva-se</h2>
                <p class="lead">Faça a sua inscrição e se torne um programador Full Stack.</p>
            </div>

            <div class="row g-5">
                <div class="col-md-5 col-lg-4 order-md-last">
                    {/* 328 x 1105 */}
                    <img class="bd-placeholder-img" width='300px' height='1105px' src={programador} alt="" />
                </div>

                <div class="col-md-7 col-lg-8">
                    <h4 class="mb-3">Faça seu cadastro</h4>
                    <form class="needs-validation" novalidate>
                        <div class="row g-3">
                            <div class="col-sm-6">
                                <label for="firstName" class="form-label">Nome</label>
                                <input type="text" class="form-control" id="firstName" placeholder="" value="" required />
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
                                <input type="email" class="form-control" id="email" placeholder="seu@email.com" />
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
                        
                        <button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
                    </form>
                </div>

            </div>

        </div >
    )
}
export default Inscricao;