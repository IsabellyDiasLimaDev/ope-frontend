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

        this.getOrcamento = this.getOrcamento.bind(this)


    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
        console.log(this.state)
    }


    handleSubmit = async e => {

        e.preventDefault()
        let id_servicos = []
        this.state.servicos.forEach(servico => {
            id_servicos.push(servico.id)
        });
        let orcamento = {
            observacoes: this.state.observacoes,
            id_cliente: this.state.cliente.id,
            idservicos: id_servicos
        }

        const idOrcamento = this.state === null ? "novo" : this.props.match.params.idorcamento;
        if (idOrcamento === "novo") {
            axios({
                method: 'post',
                url: 'https://gerenciador-orcamento-backend.herokuapp.com/orcamentos',
                data: orcamento
            }).then(function (response) {
                alert("Orçamento cadastrado com sucesso!")
                window.location.href = 'https://gerenciador-orcamento-frontend.herokuapp.com/inicio'
                console.log(response.data)
            })
        } else {
            console.log(idOrcamento)
            orcamento["id"] = parseInt(idOrcamento)
            console.log(JSON.stringify(orcamento))

            axios({
                method: 'put',
                url: 'https://gerenciador-orcamento-backend.herokuapp.com/orcamentos',
                data: orcamento
            }).then(function (response) {
                alert("Orçamento alterado com sucesso!")
                window.location.href = 'https://gerenciador-orcamento-frontend.herokuapp.com/inicio'
                console.log(response.data)
            })
        }

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
            await axios.get('https://gerenciador-orcamento-backend.herokuapp.com/servicos/semmaterial').then((response) => {
                this.setState({ servicosRender: response.data })
            });

        } catch (error) {
            console.error(error);
        }
    }
    async getCliente() {
        try {
            await axios.get('https://gerenciador-orcamento-backend.herokuapp.com/clientes').then((response) => {
                this.setState({ clientesRender: response.data })
            });

        } catch (error) {
            console.error(error);
        }
    }

    async getOrcamento() {
        const idOrcamento = this.state === null ? "novo" : this.props.match.params.idorcamento;
        if (idOrcamento === "novo") {
            this.setState({
                observacoes: '',
                valor_total: 0,
                cliente: {},
                servicos: []
            })
        } else {
            try {
                await axios.get(`https://gerenciador-orcamento-backend.herokuapp.com/orcamentos/${idOrcamento}`).then((response) => {
                    console.log("orcamento", response.data)
                    this.setState({
                        observacoes: response.data.observacoes,
                        valor_total: response.data.valor_total,
                        cliente: response.data.cliente,
                        servicos: response.data.servicos
                    })
                });

            } catch (error) {
                console.error(error);
            }
        }
    }


    async componentDidMount() {
        this.getCliente()
        this.getServico()
        this.getOrcamento()
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

                        <h5 className='form-row col-12'>Adicionar serviço</h5>

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
                                    const { valor_mao_de_obra, datainicial, datafinal, descricao, valor_total } = servico
                                    return (
                                        <tr key={index}>
                                            <td>{valor_mao_de_obra}</td>
                                            <td>{datafinal}</td>
                                            <td>{datainicial}</td>
                                            <td>{descricao}</td>
                                            <td>{valor_total}</td>
                                            <td><button type="submit" class="btn btn-primary butao" onClick={this.adicionarServico.bind(this, servico, valor_total)}><i class="material-icons">add_circle</i></button></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>

                        <h5 className='form-row col-12'>Adicionar Auxiliar</h5>

                        <table className="table col-9">
                            <thead>
                                <tr>
                                    <th scope="col">Nome</th>
                                    <th scope="col">E-mail</th>
                                    <th scope="col">Tipo Cliente</th>
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



                            <div class="form-row col-12">
                                <h5 class="col-5"> Valor total:</h5>

                                <div class="col-3">
                                    <input readOnly value={this.state.valor_total} type="text" class="form-control" name="nome" id="preco" placeholder="Valor Total" />
                                </div>

                                <div class="col-3">
                                    <input type="text" value={this.state.observacoes} onChange={this.handleChange} class="form-control" name="observacoes" id="observacoes" placeholder="Observações" />
                                </div>
                            </div>

                            <div class="form-row col-12">
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
