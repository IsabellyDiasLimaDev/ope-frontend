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
            endereco_id: ''
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
            endereco_id: this.state.endereco_id
        }

        axios({
            method: 'post',
            url: 'http://localhost:8081/empresas',
            data: empresa
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
                        <h3 class="titleservices">Empresa</h3>
                    </div>

                    <form class="formu" onSubmit={this.handleSubmit.bind(this)} method="post">
                        <div class="form-row col-21">
                            <div class="col-20">
                                <input onChange={this.handleChange} type="text" class="form-control" name="nome_fantasia" id="nome_fantasia" placeholder="Nome Fantasia" />
                            </div>
                            <div class="col-20">
                                <input onChange={this.handleChange} type="text" class="form-control" name="endereco_id" id="endereco_id" placeholder="Endereço" />
                            </div>
                        </div>

                        <div class="form-row col-9">
                            <button type="submit" class="btn btn-primary">Cadastrar Empresa</button>
                        </div>

                    </form>

                </div>

                <Footer />
            </section>

        );
    }
}
export default cadastroDeEmpresa;
