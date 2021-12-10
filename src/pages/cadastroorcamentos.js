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
            cliente_id: '',
            servicosRender: [],
            clientesRender: [],
            clientes: [],
            servicos: []
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

    adicionarOrcamento = async e => {
        e.preventDefault();

        let orcamento = {
            preco: this.state.preco,
            observacoes: this.state.observacoes,
            valor_total:this.state.valor_total,
            cliente_id: this.state.cliente_id
    
        }

        this.setState({ orcamento: this.state.orcamento.push(orcamento) })

        console.log(this.state.orcamento)
    }

    adicionarCliente(cliente)  {
        this.setState(prevState => ({
            clientes: [...prevState.clientes, cliente]
        }));
    }

    adicionarServico(servico)  {
        this.setState(prevState => ({
            servicos: [...prevState.servicos, servico]
        }));
    }

    async getServico() {
        try {
            await axios.get('http://localhost:8081/servicos').then((response) => {
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
                            <h3 class="titleservices">Orçamentos </h3>
                        </div>

                        <table className="table col-9">
                            <thead>
                                <tr>
                                    <th scope="col">Valor Mão de Obra</th>
                                    <th scope="col">Data Inicial</th>
                                    <th scope="col">Data Final</th>
                                    <th scope="col">Descrição</th>
 
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.servicosRender.map((servico, index) => {
                                    const { valor_mao_de_obra, data_inicial, data_final, descricao } = servico
                                    return (
                                        <tr key={index}>
                                            <td>{valor_mao_de_obra}</td>
                                            <td>{data_final}</td>
                                            <td>{data_inicial}</td>
                                            <td>{descricao}</td>
                                            <td><button type="submit" class="btn btn-primary butao" onClick={this.adicionarServico.bind(this)}><i class="material-icons">add_circle</i></button></td>
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
                                    <th scope="col">Endereço</th>
                                    <th scope="col">Tipo de Cliente</th>
                                    <th scope="col">CPF/CNPJ</th>
                                    <th scope="col">Telefone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.clientesRender.map((cliente, index) => {
                                    const { nome, email, tipo_cliente, cpf_cnpj } = cliente
                                    return (
                                        <tr key={index}>
                                            <td>{nome}</td>
                                            <td>{email}</td>
                                            <td>{tipo_cliente}</td>
                                            <td>{cpf_cnpj}</td>
                                            <td><button type="submit" class="btn btn-primary butao" onClick={this.adicionarcliente.bind(this, cliente)}><i class="material-icons">add_circle</i></button></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                            </table>

                        <form class="formu" onSubmit={this.handleSubmit.bind(this)} method="post">
                        


                            <div class="form-row col-16">
                                <h5 class="col-2"> Valor total:   </h5>

                                <div class="col-6">
                                    <input readOnly type="text" class="form-control" name="nome" id="preco" placeholder="Valor Total" />
                                </div>

                            <div class="col-6">
                                <input type="text" class="form-control" name="observacoes" id="observacoes" placeholder="Observações" />
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
