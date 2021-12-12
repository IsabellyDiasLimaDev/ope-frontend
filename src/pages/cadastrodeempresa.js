import React from 'react';
import '../App.css';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/navbar';
import PageHeader from '../components/page-header/PageHeader';
import axios from 'axios';
class cadastroDeEmpresa extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nome_fantasia: '',
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
        e.preventDefault();

        let empresa = {
            nome_fantasia: this.state.nome_fantasia,
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
            url: 'https://gerenciador-orcamento-backend.herokuapp.com/empresas',
            data: empresa
        }).then(function (response) {
            alert("Emprea cadastrada com sucesso!")
            window.location.href = 'https://gerenciador-orcamento-frontend.herokuapp.com/inicio'
            console.log(response.data)
        })

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
                        <h3 class="titleservices">Empresa</h3>
                    </div>

                    <form onSubmit={this.handleSubmit.bind(this)} method="post">
                        <div class="form-row col-12">
                            <div class="col-6">
                                <input onChange={this.handleChange} type="text" class="form-control" name="nome_fantasia" id="nome_fantasia" placeholder="Nome Fantasia" />
                            </div>
                        </div>
                        <div class="form-row col-12">
                            <div class="col-3">
                                <input onChange={this.handleChange} type="text" class="form-control" name="logradouro" id="logradouro" placeholder="Logradouro" />
                            </div>
                            <div class="col-3">
                                <input onChange={this.handleChange} type="text" class="form-control" name="numero" id="numero" placeholder="Número" />
                            </div>
                            <div class="col-3">
                                <input onChange={this.handleChange} type="text" class="form-control" name="cep" id="cep" placeholder="CEP" />
                            </div>
                            <div class="col-3">
                                <input onChange={this.handleChange} type="text" class="form-control" name="bairro" id="bairro" placeholder="Bairro" />
                            </div>
                        </div>
                            <div class="form-row col-12">
                                <div class="col-6">
                                    <input onChange={this.handleChange} type="text" class="form-control" name="cidade" id="cidade" placeholder="Cidade" />
                                </div>
                                <div class="col-6">
                                    <input onChange={this.handleChange} type="text" class="form-control" name="estado" id="estado" placeholder="Estado" />
                                </div>
                            </div>
                            

                        <div class="form-row col-12">
                            <button type="submit" class="btn btn-primary">Cadastrar</button>
                        </div>

                    </form>

                </div>

                <Footer />
            </section>

        );
    }
}
export default cadastroDeEmpresa;
