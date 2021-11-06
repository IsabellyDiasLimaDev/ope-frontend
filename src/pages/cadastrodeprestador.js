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
                <div class="name">
                    <h3 class="titleservices">Prestadores</h3>
                </div>

                <form class="formu" action="{{ url_for() }}" method="post">
                    <div class="form-row col-9">
                        <div class="col-4">
                            <input type="number" class="form-control" name="preco" id="preco" placeholder="Preço" />
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control" name="descricao" id="descricao" placeholder="Descrição" />
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control" name="tipo" id="tipo" placeholder="Tipo" />
                        </div>
                        <button type="submit" class="btn btn-primary">Adicionar Material</button>
                    </div>

                    <div>
                        <ul>
                            <li>preco</li>
                            <li>descricao</li>
                            <li>tipo</li>
                        </ul>
                    </div>

                </form>

            </div>

            <Footer />
        </section>

    );
}
export default App;
