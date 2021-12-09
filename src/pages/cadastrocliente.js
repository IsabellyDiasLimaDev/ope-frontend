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
            endereco_id: '',
            cpf_cnpj: '',
            telefone: ''
        }

    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
        console.log(this.state)
    }

    handleSubmit = async e => {
        e.preventDefault();

        let cliente = {
            tipo_cliente: this.state.tipo_cliente,
            email: this.state.email,
            nome: this.state.nome,
            endereco_id: this.state.endereco_id,
            cpf_cnpj: this.state.cpf_cnpj,
            telefone: this.state.telefone
        }

        axios({
            method: 'post',
            url: 'http://localhost:8081/clientes',
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
                        <div class="form-row col-9">

                            <div class="col-3">
                                <input onChange={this.handleChange} type="text" class="form-control" name="nome" id="nome" placeholder="Nome" />
                            </div>
                            <div class="col-4">
                                <input onChange={this.handleChange} type="text" class="form-control" name="email" id="email" placeholder="E-mail" />
                            </div>
                            <div class="col-4">
                                <input onChange={this.handleChange} type="text" class="form-control" name="endereco_id" id="endereco_id" placeholder="Endereço" />
                            </div>
                            <div class="col-3">
                                <input onChange={this.handleChange} type="text" class="form-control" name="tipo_cliente" id="tipo_cliente" placeholder="Tipo de Cliente" />
                            </div>
                            <div class="col-3">
                                <input onChange={this.handleChange} type="text" class="form-control" name="cpf_cnpj" id="cpf_cnpj" placeholder="CPF/CNPJ" />
                            </div>
                            <div class="col-3">
                                <input onChange={this.handleChange} type="text" class="form-control" name="telefone" id="telefone" placeholder="Telefone" />
                            </div>
                        </div>

                        <div class="form-row col-9">
                            <button type="submit" class="btn btn-primary">Cadastrar cliente</button>

                        </div>

                    </form>

                </div>

                <Footer />
            </section>

        );
    }
}
export default cadastroDeClientes;
