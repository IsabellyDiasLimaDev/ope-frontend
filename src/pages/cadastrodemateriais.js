import React from 'react';
import '../App.css';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/navbar';
import PageHeader from '../components/page-header/PageHeader';

import axios from 'axios';
class cadastroDemateriais extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            descricao: '',
            preco: '',
            quantidade_disponivel: '',
            categoria: '',
            tipo: '',
            cor: '',
            fornecedores: []
        }

    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
        console.log(this.state)
    }

    handleSubmit = async e => {
        e.preventDefault();

        let materiais = {
            descricao: this.state.descricao,
            preco: this.state.preco,
            tipo: this.state.tipo,
            quantidade_disponivel: this.state.quantidade_disponivel,
            categoria: this.state.categoria,
            cor: this.state.cor,

        }

        axios({
            method: 'post',
            url: 'http://localhost:8081/materiais',
            data: materiais
        }).then(function (response) {
            console.log(response.data)
        })


    }

    adicionarFornecedor = e => {

    }

    renderTable() {
        const fornecedores = this.getFornecedor()
        console.log(typeof(fornecedores))
        // fornecedores.map((fornecedor, index) => {
        //     const { id, nome, email, telefone } = fornecedor
        //     console.log(fornecedor)
        //     // return (
        //     //     <tr key={id}>
        //     //         <td>{nome}</td>
        //     //     </tr>
        //     // )
        // })
    }


    async getFornecedor() {
        try {
            const response = await axios.get('http://localhost:8081/fornecedores');
            console.log(response.data)
            return response.data
        } catch (error) {
            console.error(error);
        }
    }

    render() {



        return (
            <section>
                <Navbar />
                <PageHeader />


                <div class="main main-raised">

                    <div class="profile">
                        <div class="avatar">
                        </div>
                        <div class="name">
                            <h3 class="titleservices">Materiais</h3>
                        </div>
                    </div>


                    <form class="formu" onSubmit={this.handleSubmit.bind(this)} method="post">
                        <div class="form-row formu col-14">

                            <div class="col-3">
                                <input onChange={this.handleChange} type="text" class="form-control" name="categoria" id="categoria" placeholder="Categoria" />
                            </div>

                            <div class="col-3">
                                <input onChange={this.handleChange} type="number" class="form-control" name="preco" id="preco" placeholder="Preço" />
                            </div>

                            <div class="col-3">
                                <input onChange={this.handleChange} type="number" class="form-control" name="quantidade_disponivel" id="quantidade_disponivel" placeholder="Quantidade" />
                            </div>

                            <div class="col-3">
                                <input onChange={this.handleChange} type="text" class="form-control" name="descricao" id="descricao" placeholder="Descrição" />
                            </div>

                        </div>

                        <div class="form-row dropdown col-12">

                            <div class="col-3">
                                <input onChange={this.handleChange} type="text" class="form-control" name="cor" id="cor" placeholder="Cor" />
                            </div>

                            <div class="col-3">
                                <input onChange={this.handleChange} type="text" class="form-control" name="tipo" id="tipo" placeholder="Tipo" />
                            </div>
                        </div>

                        <div class="form-row col-10">
                            <button type="submit" class="btn btn-primary">Cadastrar Materiais</button>
                        </div>

                        {/* <table id='students'>
                            <tbody>
                                {this.renderTable()}
                            </tbody>
                        </table> */}

                    </form>
                    <button onClick={this.renderTable()}>teste</button>
                </div>

                <Footer />
            </section>

        );
    }
}
export default cadastroDemateriais;
