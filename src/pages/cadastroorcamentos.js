import '../App.css';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/navbar';
import PageHeader from '../components/page-header/PageHeader';
import axios from 'axios';
import { Component } from 'react';



class CadastroDeOrcamento extends Component {

    constructor(props) {
        super(props);
        this.state = {
            observacoes: '',
            valor_total: 0,
            servicosRender: [],
            clientesRender: [],
            cliente: {},
            servicos: []
        }


    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
        console.log(this.state)
    }


    handleSubmit = async e => {

        e.preventDefault()

        let orcamento = {
            observacoes: this.state.observacoes,
            valor_total: this.state.valor_total,
            cliente: this.state.cliente,
            servicos: this.state.servicos
        }

        axios({
            method: 'post',
            url: 'http://localhost:8081/orcamentos',
            data: orcamento
        }).then(function (response) {
            console.log(response.data)
        })
    }

    adicionarCliente(cliente) {
        this.setState({ cliente: cliente });
    }

    adicionarServico(servico, valor_total) {
        this.setState(prevState => ({
            servicos: [...prevState.servicos, servico]
        }));
        this.setState({ valor_total: this.state.valor_total + parseInt(valor_total) })
    }

    async getServico() {
        try {
            await axios.get('http://localhost:8081/servicos/semmaterial').then((response) => {
                this.setState({ servicosRender: response.data })
            });

        } catch (error) {
            console.error(error);
        }
    }
    async getCliente() {
        try {
            await axios.get('http://localhost:8081/clientes').then((response) => {
                this.setState({ clientesRender: response.data })
            });

        } catch (error) {
            console.error(error);
        }
    }


    async componentDidMount() {
        this.getCliente()
        this.getServico()
    }


    render() {


        return (
            <section>
                <Navbar />
                <PageHeader />
                <div class="main main-raised">
                    <div class="profile-content">
                        <div class="name">
                            <a class="button butaobn col-12" href="/orcamento" role="tab" data-toggle="tab">
                                <i class="material-icons">keyboard_return</i>
                            </a>
                            <h3 class="titleservices">Orçamentos </h3>
                        </div>

                        <table className="table col-9">
                            <thead>
                                <tr>
                                    <th scope="col">Valor Mão de Obra</th>
                                    <th scope="col">Data Inicial</th>
                                    <th scope="col">Data Final</th>
                                    <th scope="col">Descrição</th>
                                    <th scope="col">valor total</th>

                                </tr>
                            </thead>
                            <tbody>
                                {this.state.servicosRender.map((servico, index) => {
                                    const { valor_mao_de_obra, data_inicial, data_final, descricao, valor_total, materiais } = servico
                                    return (
                                        <tr key={index}>
                                            <td>{valor_mao_de_obra}</td>
                                            <td>{data_final}</td>
                                            <td>{data_inicial}</td>
                                            <td>{descricao}</td>
                                            <td>{valor_total}</td>
                                            <td><button type="submit" class="btn btn-primary butao" onClick={this.adicionarServico.bind(this, servico, valor_total)}><i class="material-icons">add_circle</i></button></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>

                        <table className="table col-9">
                            <thead>
                                <tr>
                                    <th scope="col">Nome</th>
                                    <th scope="col">E-mail</th>
                                    <th scope="col">Tipo de Cliente</th>
                                    <th scope="col">CPF/CNPJ</th>
                                    <th scope="col">Telefone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.clientesRender.map((cliente, index) => {
                                    const { nome, email, tipo_cliente, cpf_cnpj, telefone } = cliente
                                    return (
                                        <tr key={index}>
                                            <td>{nome}</td>
                                            <td>{email}</td>
                                            <td>{tipo_cliente}</td>
                                            <td>{cpf_cnpj}</td>
                                            <td>{telefone}</td>
                                            <td><button type="submit" class="btn btn-primary butao" onClick={this.adicionarCliente.bind(this, cliente)}><i class="material-icons">add_circle</i></button></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>

                        <form class="formu" onSubmit={this.handleSubmit.bind(this)} method="post">



                            <div class="form-row col-16">
                                <h5 class="col-2"> Valor total:   </h5>

                                <div class="col-6">
                                    <input readOnly value={this.state.valor_total} type="text" class="form-control" name="nome" id="preco" placeholder="Valor Total" />
                                </div>

                                <div class="col-6">
                                    <input type="text" onChange={this.handleChange} class="form-control" name="observacoes" id="observacoes" placeholder="Observações" />
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

export default CadastroDeOrcamento;
