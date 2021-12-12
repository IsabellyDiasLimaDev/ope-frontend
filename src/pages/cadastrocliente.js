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
            endereco: {
                logradouro: this.state.logradouro,
                numero: this.state.numero,
                cep: this.state.cep,
                bairro: this.state.bairro,
                cidade: this.state.cidade,
                estado: this.state.estado
            }
        }

        axios({
            method: 'post',
            url: 'https://gerenciador-orcamento-backend.herokuapp.com/clientes',
            data: cliente
        }).then(function (response) {
            console.log(response.data)
        })


    }

    render(){
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
                        <div class="form-row col-12">

                            <div class="col-3">
                                <input onChange={this.handleChange} type="text" class="form-control" name="nome" id="nome" placeholder="Nome" />
                            </div>

                            <div class="col-3">
                                <input onChange={this.handleChange} type="text" class="form-control" name="cpf_cnpj" id="cpf_cnpj" placeholder="CPF/CNPJ" />
                            </div>
                            <div class="col-3">
                                <input onChange={this.handleChange} type="text" class="form-control" name="email" id="email" placeholder="E-mail" />
                            </div>
                            <div class="col-3">
                                <input onChange={this.handleChange} type="text" class="form-control" name="telefone" id="telefone" placeholder="Telefone" />
                            </div>
                        </div>

                        <div class="form-row dropdown ">
                                <div class="dropdown col-3">
                                    <select onChange={this.handleChange} id="tipo_cliente" value={this.state.value} class="form-control form-control-lg ">
                                        <option>Tipo Pessoa</option>
                                        <option value="F">Física</option>
                                        <option value="J">Jurídica</option>
                                    </select>
                                </div>
                            </div>

                        <div class="form-row col-21">
                            <div class="col-20">
                                <input onChange={this.handleChange} type="text" class="form-control" name="logradouro" id="logradouro" placeholder="Logradouro" />
                            </div>
                            <div class="col-20">
                                <input onChange={this.handleChange} type="text" class="form-control" name="numero" id="numero" placeholder="Número" />
                            </div>
                            <div class="col-20">
                                <input onChange={this.handleChange} type="text" class="form-control" name="cep" id="cep" placeholder="CEP" />
                            </div>
                            <div class="col-20">
                                <input onChange={this.handleChange} type="text" class="form-control" name="bairro" id="bairro" placeholder="Bairro" />
                            </div>
                            <div class="col-20">
                                <input onChange={this.handleChange} type="text" class="form-control" name="cidade" id="cidade" placeholder="Cidade" />
                            </div>
                            <div class="col-20">
                                <input onChange={this.handleChange} type="text" class="form-control" name="estado" id="estado" placeholder="Estado" />
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
