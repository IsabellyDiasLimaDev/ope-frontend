import axios from 'axios';
import { Component } from 'react';
import '../App.css';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/navbar';
import PageHeader from '../components/page-header/PageHeader';
export default class CadastroDeFornecedor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            telefone: '',
            nome: '',
            email: ''
        }

    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
        console.log(this.state)
    }

    handleSubmit = async e => {
        e.preventDefault();

        let fornecedor = {
            telefone: this.state.telefone,
            nome: this.state.nome,
            email: this.state.email
        }

        axios({
            method: 'post',
            url: 'https://gerenciador-orcamento-backend.herokuapp.com/fornecedores',
            data: fornecedor
        }).then(function (response) {
            alert("Fornecedor cadastrado com sucesso!")
            window.location.href = 'https://gerenciador-orcamento-frontend.herokuapp.com/inicio'
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
                        <h3 class="titleservices">Fornecedor</h3>
                    </div>

                    <form class="formu" onSubmit={this.handleSubmit.bind(this)} method="post">

                        <div class="form-row col-14">
                            <input onChange={this.handleChange} type="text" class="form-control" name="nome" id="nome" placeholder="Nome" />
                        </div>

                        <div class="form-row col-14">
                            <input onChange={this.handleChange} type="text" class="form-control" name="email" id="email" placeholder="E-mail" />
                        </div>

                        <div class="form-row col-14">
                            <input onChange={this.handleChange} type="text" class="form-control" name="telefone" id="telefone" placeholder="Telefone" />
                        </div>

                        <div class="form-row col-14">
                            <button type="submit" class="btn btn-primary">Cadastrar</button>
                        </div>

                    </form>
                </div>



                <Footer />
            </section >

        );
    }
}

