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
                            <a class="button butaobn col-12" href="/orcamento" role="tab" data-toggle="tab">
                                <i class="material-icons">keyboard_return</i>
                            </a>
                            <h3 class="titleservices">Clientes </h3>
                        </div>

                        <table className="table col-9">
                            <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">nome</th>
                                    <th scope="col">email</th>
                                    <th scope="col">telefone</th>
                                    <th scope="col">tipo de cliente</th>
                                    <th scope="col">alterar</th>

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
                        <a class="nav-link nav-link active btn btn-primary butao" href="/cadastrocliente/novo" role="tab" data-toggle="tab"><i class="material-icons">add</i></a>
                    </div>
                </div>
                <Footer />
            </section>
        );
    }
}

export default ListarCliente;
