import '../App.css';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/navbar';
import PageHeader from '../components/page-header/PageHeader';
import axios from 'axios';
import { Component } from 'react';



class ListarMateriais extends Component {

    constructor(props) {
        super(props);
        this.state = {
            materiaisRender: []
        }

        this.getMaterial = this.getMaterial.bind(this)
    }

    async getMaterial() {
        try {
            await axios.get('https://gerenciador-orcamento-backend.herokuapp.com/materiais').then((response) => {
                this.setState({ materiaisRender: response.data })
            });

        } catch (error) {
            console.error(error);
        }
    }

    async componentDidMount() {
        this.getMaterial()
    }

    render() {


        return (
            <section>
                <Navbar />
                <PageHeader />
                <div class="main main-raised">
                    <div class="profile-content">
                        <div class="name">
                            <h3 class="titleservices">Materiais</h3>
                        </div>

                        <table className="table col-9">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Categoria</th>
                                    <th scope="col">Preço</th>
                                    <th scope="col">Qtd</th>
                                    <th scope="col">descrição</th>
                                    <th scope="col">Cor</th>
                                    <th scope="col">Tipo</th>
                                    <th scope="col">Alterar</th>

                                </tr>
                            </thead>
                            <tbody>
                                {this.state.materiaisRender.map((materiais, index) => {
                                    const { id, categoria, preco, quantidade, descricao, cor, tipo } = materiais
                                    console.log(materiais)
                                    return (
                                        <tr class="form " key={id}>
                                            <td>{id}</td>
                                            <td>{categoria}</td>
                                            <td>{preco}</td>
                                            <td>{quantidade}</td>
                                            <td>{descricao}</td>
                                            <td>{cor}</td>
                                            <td>{tipo}</td>
                                            <td><a class="nav-link nav-link active btn btn-primary butao" href={`/cadastromateriais/${id}`} role="tab" data-toggle="tab"><i class="material-icons">edit</i></a></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <div class="form-row col-12">
                            <div class="col-5">
                                <a class="nav-link nav-link active btn btn-primary " href="/cadastromateriais/novo" role="tab" data-toggle="tab">Adicionar<i class="material-icons">app_registration</i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        );
    }
}

export default ListarMateriais;
