import { Link } from 'react-router-dom'
import '../styles/login.css'

function Login() {
    return (
        <div className="container topoLog">

            <form className='formLog'>
                <img className="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="centroLogin">
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label><br />
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div><br />
                </div>

                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-primary" type="submit">Sign in</button><br /><br />
                <Link to='/novoUsuario' className='criaConta'>Crie sua conta</Link>
                <p className="mt-5 mb-3 text-muted">&copy; Squad 3 | Programadores Cariocas - Irajá | 2023</p>
            </form>
        </div>
    );
}

export default Login;