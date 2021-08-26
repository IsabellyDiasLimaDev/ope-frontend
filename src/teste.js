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
                                        <img
                                            src="https://cdn.discordapp.com/attachments/746027270845759568/844740364278693928/ansel-elgort-poses-for-a-portrait-during-the-baby-driver-premiere-2017-sxsw-conference-and-festivals.png"
                                            alt="Circle Image" class="img-raised rounded-circle img-fluid">
                        
                                            <div class="name">
                                                <h3 class="title">Giorni Service</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                                <form action="{{ url_for('adicionar_material') }}" method="post">
                                    <div class="form-row col-16">
                                        <div class="col-4">
                                            <input type="text" class="form-control" name="descricao" id="descricao" placeholder="Descrição" />
                                        </div>
                                        <div class="col-4">
                                            <input type="text" class="form-control" name="tipo" id="tipo" placeholder="Tipo" />
                                        </div>
                                        <div class="col-4">
                                            <input type="text" class="form-control" name="orcamento" id="orcamento" placeholder="Orçamento" />
                                        </div>
                                        <div class="col-4">
                                            <input type="text" class="form-control" name="materiais" id="materiais" placeholder="Materiais" />
                                        </div>
                                        <div class="col-4">
                                            <input type="text" class="form-control " name="quantidadeDisponivel" id="quantidadeDisponivel" placeholder="Quantidade Disponível" />
                                        </div>
                                        <div class="col-4">
                                            <input type="text" class="form-control" name="dt_inicial" id="dt_inicial" placeholder="Data Inicial" />
                                        </div>
                                        <div class="col-4">
                                            <input type="text" class="form-control" name="auxiliares" id="auxiliares" placeholder="Auxiliares" />
                                        </div>
                                        <div class="col-4">
                                            <input type="text" class="form-control numero" name="preco" id="preco" placeholder="Preço" />
                                        </div>
                                        <div class="col-4">
                                            <input type="text" class="form-control" name="dt_final" id="dt_final" placeholder="Data Final" />
                                        </div>
                                        <div class="col-4">
                                            <input type="text" class="form-control" name="valorMaoDeObra" id="valorMaoDeObra" placeholder="Valor Mão de Obra" />
                                        </div>
                                        <div class="col-4">
                                            <input type="text" class="form-control" name="valorTotal" id="valorTotal" placeholder="Valor Total" />
                                        </div>
                                    </div>
                                </form>







                                <form action="{{ url_for('adicionar_material') }}" method="post">
                                    <div class="form-row col-16">
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
                                    </div>
                                </form>

                                <form action="{{ url_for('calcular_valor_total') }}" method="post">
                                    <div class="form-row col-12">
                                        <div class="col-4">
                                            <input type="text" class="form-control" name="descricao" id="descricao" placeholder="Descrição" />
                                        </div>
                                        <div class="col-4">
                                            <input type="text" class="form-control" name="valormaodeobra" id="valormaodeobra" placeholder="VMO" />
                                        </div>
                                    </div>
                                    <div>

                                    </div>
                                </form>

                                <form action="{{ url_for('servico') }}" method="post">
                                    <div class="form-row col-9">
                                        <div class="col-5">
                                            <button type="submit" class="btn btn-primary butaozinho">Cadastrar servico</button>
                                        </div>
                                    </div>
                                    <div>

                                    </div>
                                </form>
                            </div>
                        </div>
                        <Footer />
        </section>
                    );
}

                    export default App;
