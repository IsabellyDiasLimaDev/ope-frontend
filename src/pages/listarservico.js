import '../App.css';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/navbar';
import PageHeader from '../components/page-header/PageHeader';
import axios from 'axios';
import { Component } from 'react';



class ListarServico extends Component {

    constructor(props) {
        super(props);
        this.state = {
            servicoRender: []
        }

        this.getServico = this.getServico.bind(this)
    }

    async getServico() {
        try {
            await axios.get('https://gerenciador-orcamento-backend.herokuapp.com/servicos').then((response) => {
                this.setState({ servicoRender: response.data })
            });

        } catch (error) {
            console.error(error);
        }
    }

    async componentDidMount() {
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
                            <h3 class="titleservices">Servicos </h3>
                        </div>

                        <table className="table col-9">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Valor Mão de Obra</th>
                                    <th scope="col">Data Inicial</th>
                                    <th scope="col">Data Final</th>
                                    <th scope="col">Descrição</th>
                                    <th scope="col">valor total</th>

                                </tr>
                            </thead>
                            <tbody>
                                {this.state.servicoRender.map((servico, index) => {
                                    const { id, valor_mao_de_obra, data_inicial, data_final, descricao, valor_total } = servico
                                    console.log(servico)
                                    return (
                                        <tr class="form " key={id}>
                                            <td>{id}</td>
                                            <td>{valor_mao_de_obra}</td>
                                            <td>{data_final}</td>
                                            <td>{data_inicial}</td>
                                            <td>{descricao}</td>
                                            <td>{valor_total}</td>
                                            <td><a class="nav-link nav-link active btn btn-primary butao" href={`/cadastroservicos/${id}`} role="tab" data-toggle="tab"><i class="material-icons">edit</i></a></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <div class="form-row col-12">
                            <div class="col-5">
                                <a class="nav-link nav-link active btn btn-primary " href="/cadastroservicos/novo" role="tab" data-toggle="tab">Adicionar<i class="material-icons">app_registration</i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        );
    }
}

export default ListarServico;
