import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/navbar';
import PageHeader from './components/page-header/PageHeader';
function App() {
    return (
        <section>
            <Navbar />
            <PageHeader />

            <div class="main main-raised">
                <div class="profile-content">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 ml-auto mr-auto">
                                <div class="profile">
                                    <div class="avatar">
                                    </div>
                                    <div class="name">
                                        <h3 class="titleservices">Materiais</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <form action="{{ url_for() }}" method="post">
                    <div class="form-row col-9">
                        <div class="col-4">
                            <input type="number" class="form-control" name="preco" id="preco" placeholder="Preço" />
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control" name="descricao" id="descricao" placeholder="Descrição"/>
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
