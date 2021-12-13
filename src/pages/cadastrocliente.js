import React from 'react';
import '../App.css';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/navbar';
import PageHeader from '../components/page-header/PageHeader';
import axios from 'axios';

class cadastroDeClientes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tipo_cliente: '',
            email: '',
            nome: '',
            cpf_cnpj: '',
            telefone: '',
            logradouro: '',
            numero: '',
            cep: '',
            bairro: '',
            cidade: '',
            estado: ''
        }
        this.getCliente = this.getCliente.bind(this)

    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
        console.log(this.state)
    }

    handleSubmit = async e => {

        e.preventDefault()

        let cliente = {
            tipo_cliente: this.state.tipo_cliente,
            email: this.state.email,
            nome: this.state.nome,
            cpf_cnpj: this.state.cpf_cnpj,
            telefone: this.state.telefone,
            logradouro: this.state.logradouro,
            numero: this.state.numero,
            cep: this.state.cep,
            bairro: this.state.bairro,
            cidade: this.state.cidade,
            estado: this.state.estado
        }

        const idCliente = this.state === null ? "novo" : this.props.match.params.idcliente;
        if (idCliente === "novo") {
            axios({
                method: 'post',
                url: 'https://gerenciador-orcamento-backend.herokuapp.com/clientes',
                data: cliente
            }).then(function (response) {
                alert("Cliente cadastrado com sucesso!")
                window.location.href = 'https://gerenciador-orcamento-frontend.herokuapp.com/listarcliente'
                console.log(response.data)
            })
        }
        else {
            console.log(idCliente)
            cliente["id"] = parseInt(idCliente)
            console.log(cliente)
            axios({
                method: 'put',
                url: 'https://gerenciador-orcamento-backend.herokuapp.com/clientes',
                data: cliente
            }).then(function (response) {
                alert("Cliente alterado com sucesso!")
                window.location.href = 'https://gerenciador-orcamento-frontend.herokuapp.com/listarcliente'
            })
        }


    }

    async getCliente() {
        const idCliente = this.state === null ? "novo" : this.props.match.params.idcliente;
        if (idCliente === "novo") {
            this.setState({
                tipo_cliente: '',
                email: '',
                nome: '',
                cpf_cnpj: '',
                telefone: '',
                logradouro: '',
                numero: '',
                cep: '',
                bairro: '',
                cidade: '',
                estado: '',
            })
        } else {
            try {
                await axios.get(`https://gerenciador-orcamento-backend.herokuapp.com/clientes/${idCliente}`).then((response) => {
                    console.log("cliente", response.data)
                    this.setState({
                        tipo_cliente: response.data.tipo_cliente,
                        email: response.data.email,
                        nome: response.data.nome,
                        cpf_cnpj: response.data.cpf_cnpj,
                        telefone: response.data.telefone,
                        logradouro: response.data.logradouro,
                        numero: response.data.numero,
                        cep: response.data.cep,
                        bairro: response.data.bairro,
                        cidade: response.data.cidade,
                        estado: response.data.estado,
                    })
                });

            } catch (error) {
                console.error(error);
            }
        }
    }

    async componentDidMount() {
        this.getCliente()
    }



    render() {
        return (
            <section>
                <Navbar />
                <PageHeader />


                <div class="main main-raised">
                    <div class="avatar">
                    </div>
                    <div class="name">
                        <h3 class="titleservices">Cliente</h3>
                    </div>

                    <form class="formu" onSubmit={this.handleSubmit.bind(this)} method="post">
                        <div class="form-row dropdown ">
                            <div class="dropdown col-2">
                            <label for="tipo_cliente">Tipo Pessoa</label>
                                <select required onChange={this.handleChange} id="tipo_cliente" class="form-control form-control-lg ">
                                    <option value="">Tipo Pessoa</option>
                                    <option value="F" {...(this.state.tipo_cliente === 'F' ? { selected: 'selected' } : {})}>Física</option>
                                    <option value="J" {...(this.state.tipo_cliente === 'J' ? { selected: 'selected' } : {})}>Jurídica</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-row dropdown col-12">

                            <div class="col-3">
                            <label for="nome">Nome</label>
                                <input required onChange={this.handleChange} value={this.state.nome} type="text" class="form-control" name="nome" id="nome" placeholder="Nome" />
                            </div>

                            <div class="col-3">
                            <label for="cpf_cnpf">CPF/CNPJ</label>
                                <input required onChange={this.handleChange} value={this.state.cpf_cnpj} type="text" class="form-control" name="cpf_cnpj" id="cpf_cnpj" placeholder="CPF/CNPJ" />
                            </div>
                            <div class="col-3">
                            <label for="email">E-mail</label>
                                <input required onChange={this.handleChange} value={this.state.email} type="text" class="form-control" name="email" id="email" placeholder="E-mail" />
                            </div>
                            <div class="col-3">
                            <label for="telefone">Telefone</label>
                                <input required onChange={this.handleChange} value={this.state.telefone} type="text" class="form-control" name="telefone" id="telefone" placeholder="Telefone" />
                            </div>
                        </div>


                        <div class="form-row dropdown col-12">
                            <div class="col">
                            <label for="logradouro">Logradouro</label>
                                <input required onChange={this.handleChange} value={this.state.logradouro} type="text" class="form-control" name="logradouro" id="logradouro" placeholder="Logradouro" />
                            </div>
                            <div class="col">
                            <label for="numero">Número</label>
                                <input required onChange={this.handleChange} value={this.state.numero} type="text" class="form-control" name="numero" id="numero" placeholder="Número" />
                            </div>
                            <div class="col">
                            <label for="bairro">Bairro</label>
                                <input required onChange={this.handleChange} value={this.state.bairro} type="text" class="form-control" name="bairro" id="bairro" placeholder="Bairro" />
                            </div>
                        </div>
                        <div class="form-row dropdown col-12">
                            <div class="col">
                            <label for="cidade">Cidade</label>
                                <input required onChange={this.handleChange} value={this.state.cidade} type="text" class="form-control" name="cidade" id="cidade" placeholder="Cidade" />
                            </div>
                            <div class="col">
                            <label for="estado">Estado</label>
                                <input required onChange={this.handleChange} value={this.state.estado} type="text" class="form-control" name="estado" id="estado" placeholder="Estado" />
                            </div>
                            <div class="col">
                            <label for="cep">CEP</label>
                                <input required onChange={this.handleChange} value={this.state.cep} type="text" class="form-control" name="cep" id="cep" placeholder="CEP" />
                            </div>
                        </div>


                        <div class="form-row col-12">
                            <button type="submit" class="clear btn btn-primary">Cadastrar</button>

                        </div>

                    </form>

                </div>

                <Footer />
            </section>

        );
    }
}
export default cadastroDeClientes;
