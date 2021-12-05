import '../App.css';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/navlogin';
import PageHeader from '../components/page-header/PageHeader';
function App() {
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
                            <br/>

                        <form class="container-body-login">
                            <div class='moldura'>
                                <div class="usuario-login">Usuário</div>
                                <input type ="text" class="digita-usuario" placeholder="Digite seu Usuário" autocomplete="off"/>
                            <br/>
                                <div class ="password-login">Senha</div>
                                <input type ="password" class="digita-password" placeholder="Digite sua senha" autocomplete="off"/>
                            
                            </div>
                        </form>
                        <form>

                            <div class="moldura-botao">
                                <button id="botao-login" type="submit" class="btn btn-primary btn-lg-botao">Entrar</button>
                            </div>

                        </form>

                    </div>

                </body>
            </div>

            <Footer />
        </section >

    );
}
export default App;
