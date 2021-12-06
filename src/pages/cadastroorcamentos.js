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


class CadastroDeServico extends Component {

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
                            <h3 class="titleservices">Orçamentos </h3>
                        </div>

                        <form class="formu" onSubmit={this.handleSubmit.bind(this)} method="post">

                            <div class="form-row dropdown col-10">
                                <div class="dropdown col-4">
                                    <select onChange={this.handleChange} id="disponbibilidade" value={this.state.value} class="form-control form-control-lg ">
                                        <option>Serviços</option>
                                        <option value="sim">Sim</option>
                                        <option value="não">Não</option>
                                    </select>
                                </div>

                                <button type="" class="btn btn-primary">Add</button>

                                <div class="espace dropdown col-4">
                                    <select onChange={this.handleChange} id="disponbibilidade" value={this.state.value} class="form-control form-control-lg ">
                                        <option>Clientes</option>
                                        <option value="sim">Sim</option>
                                        <option value="não">Não</option>
                                    </select>
                                </div>
                            </div>
                            <ul>
                                <li>beregudego 1</li>
                                <li>beregudego 2</li>
                            </ul>

                            <div class="espace2">
                                <input type="text" class="form-control" name="observacoes" id="observacoes" placeholder="Observações" />
                            </div>

                            <div class="form-row col-12">
                                <h4> Valor total:⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</h4>

                                <div class="col-4">
                                    <input readOnly type="text" class="form-control" name="nome" id="preco" placeholder="Valor Total" />
                                </div>

                            </div>

                            <div class="form-row col-10">
                            <button type="submit" class="btn btn-primary">Cadastrar</button>
                            </div>




                        </form>
                    </div>
                </div>
                <Footer />
            </section>
        );
    }
}

export default CadastroDeServico;
