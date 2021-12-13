import '../App.css';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/navbar';
import PageHeader from '../components/page-header/PageHeader';
import axios from 'axios';
import { Component } from 'react';



class ListarEmpresa extends Component {

    constructor(props) {
        super(props);
        this.state = {
            empresaRender: []
        }

        this.getEmpresa = this.getEmpresa.bind(this)
    }

    async getEmpresa() {
        try {
            await axios.get('https://gerenciador-orcamento-backend.herokuapp.com/empresas').then((response) => {
                this.setState({ empresaRender: response.data })
            });

        } catch (error) {
            console.error(error);
        }
    }

    async componentDidMount() {
        this.getEmpresa()
    }

    render() {


        return (
            <section>
                <Navbar />
                <PageHeader />
                <div class="main main-raised">
                    <div class="profile-content">
                        <div class="name">
                            <h3 class="titleservices">Empresas</h3>
                        </div>

                        <table className="table col-9">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome Fantasia</th>
                                    <th scope="col">email</th>
                                    <th scope="col">telefone</th>
                                    <th scope="col">alterar</th>

                                </tr>
                            </thead>
                            <tbody>
                                {this.state.empresaRender.map((empresa, index) => {
                                    const { id, nome_fantasia, email, telefone } = empresa
                                    console.log(empresa)
                                    return (
                                        <tr class="form " key={id}>
                                            <td>{id}</td>
                                            <td>{nome_fantasia}</td>
                                            <td>{email}</td>
                                            <td>{telefone}</td>
                                            <td><a class="nav-link nav-link active btn btn-primary butao" href={`/cadastroempresa/${id}`} role="tab" data-toggle="tab"><i class="material-icons">edit</i></a></td>
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

export default ListarEmpresa;
