import React from 'react';
import '../App.css';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/navbar';
import PageHeader from '../components/page-header/PageHeader';
import axios from 'axios';
class cadastroDeAuxiliares extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            telefone: '',
            nome: '',
            tipo_servico: '',
            disponibilidade: '',
            email: ''
        }

    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
        console.log(this.state)
    }

    handleSubmit = async e => {
        e.preventDefault();

        let auxiliar = {
            telefone: this.state.telefone,
            nome: this.state.nome,
            tipo_servico: this.state.tipo_servico,
            disponibilidade: this.state.disponibilidade === 'sim' ? true : false,
            email: this.state.email
        }
        axios({
            method: 'post',
            url: 'https://gerenciador-orcamento-backend.herokuapp.com/auxiliares',
            data: auxiliar
        }).then(function (response) {
            alert("Auxiliar cadastrado com sucesso!")
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
                        <h3 class="titleservices">Auxiliares</h3>
                    </div>
                    

                    <form class="formu" onSubmit={this.handleSubmit.bind(this)} method="post">
                        <div class="form-row col-12">

                            <div class="col-3">
                                <input onChange={this.handleChange} type="text" class="form-control" name="nome" id="nome" placeholder="Nome" required/>
                            </div>

                            <div class="col-3">
                                <input onChange={this.handleChange} type="text" class="form-control" name="tipo_servico" id="tipo_servico" placeholder="Tipo de serviço" required/>
                            </div>


                            <div class="col-3">
                                <input onChange={this.handleChange} type="text" class="form-control" name="telefone" id="telefone" placeholder="Telefone" />
                            </div>


                            <div class="col-3">
                                <input onChange={this.handleChange} type="text" class="form-control" name="email" id="email" placeholder="E-mail" required/>
                            </div>

                        </div>

                        <div class="form-row dropdown col-12">
                            <div class="dropdown col-6">
                                <select onChange={this.handleChange} id="disponibilidade" value={this.state.value} class="form-control form-control-lg ">
                                    <option>Disponibilidade</option>
                                    <option value="sim">Sim</option>
                                    <option value="não">Não</option>
                                </select>
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
export default cadastroDeAuxiliares;
