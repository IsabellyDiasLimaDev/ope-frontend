import { Component } from 'react';
import '../App.css';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/navbar';
import PageHeader from '../components/page-header/PageHeader';
import axios from 'axios';

class CadastroDeMateriais extends Component {

    constructor(props) {
        super(props);
        this.state = {
            preco: 0.0,
            tipo: "",
            categoria: "",
            quantidade_disponivel: 0,
            descricao: "",
            cor: "",
        }
    }


    handleSubmit = async e => {
        e.preventDefault();

        const data = new FormData();

        data.append('preco', this.state.preco);
        data.append('tipo', this.state.tipo);
        data.append('categoria', this.state.categoria);
        data.append('quantidade_disponivel', this.state.quantidade_disponivel);
        data.append('descricao', this.state.descricao);
        data.append('cor', this.state.cor);

        axios({
            url: 'http://localhost:8081/materiais',
            method: 'post',
            data: data,
            headers: {'Access-Control-Allow-Origin': '*'}
        }).then((response) => {
            console.log(response);
        });

    }

        // Adiciona o valor de cada input na variável 
        handleChange = e => {
            this.setState({ [e.target.id]: e.target.value });
            console.log(this.state);
        };

    render() {
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

                    <form id="material-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <div class="form-row col-9">
                            <div class="col-4">
                                <input onChange={this.handleChange} type="number" class="form-control" name="preco" id="preco" placeholder="Preço" />
                            </div>
                            <div class="col-4">
                                <input onChange={this.handleChange} type="text" class="form-control" name="tipo" id="tipo" placeholder="Tipo" />
                            </div>
                            <div class="col-4">
                                <input onChange={this.handleChange} type="text" class="form-control" name="categoria" id="categoria" placeholder="Categoria" />
                            </div>
                            <div class="col-4">
                                <input onChange={this.handleChange} type="text" class="form-control" name="quantidade_disponivel" id="quantidade_disponivel" placeholder="Quantidade disponível" />
                            </div>
                            <div class="col-4">
                                <input onChange={this.handleChange} type="text" class="form-control" name="descricao" id="descricao" placeholder="Descrição" />
                            </div>
                            <div class="col-4">
                                <input onChange={this.handleChange} type="text" class="form-control" name="cor" id="cor" placeholder="Cor" />
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
}
export default CadastroDeMateriais;
