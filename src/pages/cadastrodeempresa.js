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
                    <h3 class="titleservices">Empresa</h3>
                </div>

                <form class="formu" action="{{ url_for() }}" method="post">
                    <div class="form-row col-21">

                        <div class="col-20">
                            <input type="text" class="form-control" name="email" id="auxnome" placeholder="E-mail" />
                        </div>

                        <div class="col-20">
                            <input type="text" class="form-control" name="nome" id="preco" placeholder="Nome" />
                        </div>



                    </div>

                </form>



                <form>
                    <div class="form-row col-9">
                        <button type="submit" class="btn btn-primary">Cadastrar Empresa</button>

                    </div>
                </form>

            </div>

            <Footer />
        </section>

    );
}
export default App;
