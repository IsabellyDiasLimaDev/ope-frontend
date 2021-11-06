import '../App.css';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/navbar';
import PageHeader from '../components/page-header/PageHeader';
import axios from 'axios';
import { Component } from 'react';


const apiClient = axios.create({
    baseURL: 'http://localhost:5000',
    baseURL: process.env.DATABASE_URL,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            preco: 0,
            cor: '',
            tipo: '',
            categoria: '',
            quantidade_disponivel: 0,
            descricao: '',
            materiais: []
        }

    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
        console.log(this.state)
    }


    handleSubmit = async e => {
        e.preventDefault();

        const data = new FormData();
    }

    adicionarMaterial = async e => {
        e.preventDefault();

        let material = {
            preco: this.state.preco,
            cor: this.state.cor,
            tipo: this.state.tipo,
            categoria: this.state.categoria,
            quantidade_disponivel: this.state.quantidade_disponivel,
            descricao: this.state.descricao
        }

        this.setState({ materiais: this.state.materiais.push(material) })

        console.log(this.state.materiais)
    }




    render() {
        let materiais = this.state.materiais;
        materiais = materiais.map((material) => <li classname="list-group-item">{material.preco}</li>);
        return (
            <section>
                <Navbar />
                <PageHeader />
                <div class="main main-raised">
                    <div class="profile-content">
                            <div class="name">
                                <h3 class="titleservices">Cadastro de Serviços </h3>
                            </div>


                        <form class="formu" onSubmit={this.adicionarMaterial.bind(this)} method="post">
                            <div class="form-row  col-5">
                                <div class="col-4">
                                    <input onChange={this.handleChange} type="text" class="form-control" name="preco" id="preco" placeholder="Preço" />
                                </div>
                                <div class="col-4">
                                    <input onChange={this.handleChange} type="text" class="form-control" name="cor" id="cor" placeholder="Cor" />
                                </div>
                                <div class="col-4">
                                    <input onChange={this.handleChange} type="text" class="form-control" name="cor" id="tipo" placeholder="Tipo" />
                                </div>
                                <div class="col-4">
                                    <input onChange={this.handleChange} type="text" class="form-control" name="categoria" id="categoria" placeholder="Categoria" />
                                </div>
                                <div class="col-4">
                                    <input onChange={this.handleChange} type="text" class="form-control " name="quantidade_disponivel" id="quantidade_disponivel" placeholder="Quantidade Disponível" />
                                </div>
                                <div class="col-4">
                                    <input onChange={this.handleChange} type="text" class="form-control" name="descricao" id="descricao" placeholder="Descrição" />
                                </div>

                                <button type="submit" class="btn btn-primary">Adicionar Material</button>

                            </div>
                            <div>
                            </div>
                        </form>




                        <ul classname="list-group">
                            {materiais}
                        </ul>


                        <form class="formu" onSubmit={this.handleSubmit.bind(this)} method="post">
                            <div class="form-row col-5">
                                <div class="col-4">
                                    <input onChange={this.handleChange} type="text" class="form-control" name="dt_inicial" id="dt_inicial" placeholder="Data Inicial" />
                                </div>
                                <div class="col-4">
                                    <input onChange={this.handleChange} type="text" class="form-control" name="auxiliares" id="auxiliares" placeholder="Auxiliares" />
                                </div>
                                <div class="col-4">
                                    <input onChange={this.handleChange} type="number" class="form-control numero" name="preco" id="preco" placeholder="Preço" />
                                </div>
                                <div class="col-4">
                                    <input onChange={this.handleChange} type="text" class="form-control" name="dt_final" id="dt_final" placeholder="Data Final" />
                                </div>
                                <div class="col-4">
                                    <input onChange={this.handleChange} type="text" class="form-control" name="valor_mao_de_obra" id="valor_mao_de_obra" placeholder="Valor Mão de Obra" />
                                </div>
                                <div class="col-4">
                                    <input onChange={this.handleChange} type="text" class="form-control" name="valor_total" id="valor_total" placeholder="Valor Total" />
                                </div>
                            </div>
                        </form>

                        <form class="formu" action="{{ url_for('calcular_valor_total') }}" method="post">
                            <div class="form-row col-5">
                                <div class="col-4">
                                    <input onChange={this.handleChange} type="text" class="form-control" name="descricao" id="descricao" placeholder="Descrição" />
                                </div>
                                <div class="col-4">
                                    <input onChange={this.handleChange} type="number" class="form-control" name="valormaodeobra" id="valormaodeobra" placeholder="VMO" />
                                </div>
                            </div>
                            <div>

                            </div>
                        </form>


                        <form action="{{ url_for('servico') }}" method="post">
                            <div class="form-row col-9">

                                <button type="submit" class="btn btn-primary butaozinho">Cadastrar servico</button>

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
}

export default App;
