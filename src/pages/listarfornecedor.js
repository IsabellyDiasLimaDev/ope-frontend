import '../App.css';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/navbar';
import PageHeader from '../components/page-header/PageHeader';
import axios from 'axios';
import { Component } from 'react';



class ListarFornecedor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fornecedorRender: []
        }

        this.getFornecedor = this.getFornecedor.bind(this)
    }

    async getFornecedor() {
        try {
            await axios.get('https://gerenciador-orcamento-backend.herokuapp.com/fornecedores').then((response) => {
                this.setState({ fornecedorRender: response.data })
            });

        } catch (error) {
            console.error(error);
        }
    }

    async componentDidMount() {
        this.getFornecedor()
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
                            <h3 class="titleservices">Fornecedores </h3>
                        </div>

                        <table className="table col-9">
                            <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">nome</th>
                                    <th scope="col">email</th>
                                    <th scope="col">telefone</th>
                                    <th scope="col">alterar</th>

                                </tr>
                            </thead>
                            <tbody>
                                {this.state.fornecedorRender.map((fornecedor, index) => {
                                    const { id, nome, email, telefone } = fornecedor
                                    console.log(fornecedor)
                                    return (
                                        <tr class="form " key={id}>
                                            <td>{id}</td>
                                            <td>{nome}</td>
                                            <td>{email}</td>
                                            <td>{telefone}</td>
                                            <td><a class="nav-link nav-link active btn btn-primary butao" href={`/cadastrofornecedor/${id}`} role="tab" data-toggle="tab"><i class="material-icons">edit</i></a></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <div class="form-row col-12">
                            <div class="col-5">
                                <a class="nav-link nav-link active btn btn-primary " href="/cadastroempresa/novo" role="tab" data-toggle="tab">Adicionar<i class="material-icons">app_registration</i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        );
    }
}

export default ListarFornecedor;
