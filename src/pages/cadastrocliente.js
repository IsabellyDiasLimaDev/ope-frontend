import '../App.css';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/navbar';
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
                    <h3 class="titleservices">Cliente</h3>
                </div>

                <form class="formu" action="{{ url_for() }}" method="post">
                    <div class="form-row col-9">

                        <div class="col-3">
                            <input type="text" class="form-control" name="Tipo de serviço" id="preco" placeholder="Nome" />
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control" name="nome" id="auxnome" placeholder="Endereço" />
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control" name="tipo" id="tipo" placeholder="Telefone" />
                        </div>
                        <div class="col-3">
                            <input type="text" class="form-control" name="nome" id="email" placeholder="Tipo cliente" />
                        </div>
                    </div>

                </form>

                <form class="formu" action="{{ url_for() }}" method="post">
                    <div class="form-row col-9">

                        <div class="col-4">
                            <input type="text" class="form-control" name="nome" id="email" placeholder="E-mail" />
                        </div>




                    </div>

                </form>

                <form>
                    <div class="form-row col-9">
                        <button type="submit" class="btn btn-primary">Cadastrar cliente</button>

                    </div>
                </form>

            </div>

            <Footer />
        </section>

    );
}
export default App;
