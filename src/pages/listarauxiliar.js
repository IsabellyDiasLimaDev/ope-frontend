import '../App.css';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/navbar';
import PageHeader from '../components/page-header/PageHeader';
import axios from 'axios';
import { Component } from 'react';



class ListarAuxiliar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            auxiliarRender: []
        }

        this.getAuxiliar = this.getAuxiliar.bind(this)
    }

    async getAuxiliar() {
        try {
            await axios.get('https://gerenciador-orcamento-backend.herokuapp.com/auxiliares').then((response) => {
                this.setState({ auxiliarRender: response.data })
            });

        } catch (error) {
            console.error(error);
        }
    }

    async componentDidMount() {
        this.getAuxiliar()
    }

    render() {


        return (
            <section>
                <Navbar />
                <PageHeader />
                <div class="main main-raised">
                    <div class="profile-content">
                        <div class="name">
                            <h3 class="titleservices">Auxiliares </h3>
                        </div>

                        <table className="table col-9">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Tipo de Serviço</th>
                                    <th scope="col">Telefone</th>
                                    <th scope="col">E-mail</th>
                                    <th scope="col">Disponibilidade</th>
                                    <th scope="col">Alterar</th>

                                </tr>
                            </thead>
                            <tbody>
                                {this.state.auxiliarRender.map((auxiliar, index) => {
                                    const { id, nome, tipo_servico, telefone, email, disponibilidade } = auxiliar
                                    console.log(auxiliar)
                                    return (
                                        <tr class="form " key={id}>
                                            <td>{id}</td>
                                            <td>{nome}</td>
                                            <td>{tipo_servico}</td>
                                            <td>{telefone}</td>
                                            <td>{email}</td>
                                            <td>{disponibilidade === true ? 'Sim' : 'Não'}</td>
                                            <td><a class="nav-link nav-link active btn btn-primary butao" href={`/cadastroauxiliares/${id}`} role="tab" data-toggle="tab"><i class="material-icons">edit</i></a></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <div class="form-row col-12">
                            <div class="col-5">
                                <a class="nav-link nav-link active btn btn-primary " href="/cadastroauxiliares/novo" role="tab" data-toggle="tab">Adicionar<i class="material-icons">app_registration</i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        );
    }
}

export default ListarAuxiliar;
