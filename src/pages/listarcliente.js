import '../App.css';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/navbar';
import PageHeader from '../components/page-header/PageHeader';
import axios from 'axios';
import { Component } from 'react';



class ListarCliente extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clienteRender: []
        }

        this.getCliente = this.getCliente.bind(this)
    }

    async getCliente() {
        try {
            await axios.get('https://gerenciador-orcamento-backend.herokuapp.com/clientes').then((response) => {
                this.setState({ clienteRender: response.data })
            });

        } catch (error) {
            console.error(error);
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
                    <div class="profile-content">
                        <div class="name">
                            <h3 class="titleservices">Clientes </h3>
                        </div>

                        <table className="table col-9">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">E-mail</th>
                                    <th scope="col">Telefone</th>
                                    <th scope="col">Tipo Cliente</th>
                                    <th scope="col">Alterar</th>

                                </tr>
                            </thead>
                            <tbody>
                                {this.state.clienteRender.map((cliente, index) => {
                                    const { id, nome, email, telefone, tipo_cliente } = cliente
                                    console.log(cliente)
                                    return (
                                        <tr class="form " key={id}>
                                            <td>{id}</td>
                                            <td>{nome}</td>
                                            <td>{email}</td>
                                            <td>{telefone}</td>
                                            <td>{tipo_cliente}</td>
                                            <td><a class="nav-link nav-link active btn btn-primary butao" href={`/cadastrocliente/${id}`} role="tab" data-toggle="tab"><i class="material-icons">edit</i></a></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <div class="form-row col-12">
                            <div class="col-5">
                                <a class="nav-link nav-link active btn btn-primary " href="/cadastrocliente/novo" role="tab" data-toggle="tab">Adicionar<i class="material-icons">app_registration</i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        );
    }
}

export default ListarCliente;
