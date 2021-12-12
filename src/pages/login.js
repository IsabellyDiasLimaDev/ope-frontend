import '../App.css';
import React from 'react';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/navlogin';
import PageHeader from '../components/page-header/PageHeader';


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            usuario: '',
            senha: ''
        }

    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
        console.log(this.state)
    }

    validarLogin = e => {
        e.preventDefault();

        if (this.state.usuario === 'admin' && this.state.senha === '1234') {
            this.props.history.push('/inicio')
        }
        else {
            alert('Usuário e/ou Senha incorretos, tente novamente.')
        }
    }


    render() {
        return (
            <section>
                <Navbar />
                <PageHeader />


                <div class="main main-raised">
                    <div class="avatar">
                    </div>
                    <div class="name">
                        <br />
                    </div>

                    <body>

                        <div class='container'>
                            <div class="moldura-log-head">
                                <div class='welcome-login'>Bem-vindo! Faça seu login:
                                </div>
                            </div>


                            <form onSubmit={this.validarLogin.bind(this)} class="container-body-login">
                                <div class="form-row col-12">
                                    <label for="usuario">Usuário:</label>
                                </div>

                                <div class="usuario-login form-row col-12">
                                    <input onChange={this.handleChange} id="usuario" type="text" class="digita-usuario col-6" placeholder="Digite seu Usuário" autocomplete="off" />
                                </div>

                                <div class="form-row col-12">
                                    <label for="senha">Senha:</label>
                                </div>
                                <div class="password-login form-row col-12">
                                    <input onChange={this.handleChange} id="senha" type="password" class="digita-password col-6" placeholder="Digite sua senha" autocomplete="off" />
                                </div>

                                <div class="moldura-botao">
                                    <button id="botao-login" type="submit" class="btn btn-primary btn-lg-botao">Entrar</button>
                                </div>
                            </form>

                        </div>

                    </body>
                </div >

                <Footer />
            </section >

        );
    }
}
export default Login;
