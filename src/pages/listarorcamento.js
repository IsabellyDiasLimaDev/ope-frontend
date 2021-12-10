import '../App.css';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/navbar';
import PageHeader from '../components/page-header/PageHeader';
import axios from 'axios';
import { Component } from 'react';



class ListarOrcamento extends Component {

    constructor(props) {
        super(props);
        this.state = {   
            orcamentosRender: []
        }

        this.getOrcamento = this.getOrcamento.bind(this)
    }

    async getOrcamento() {
        try {
            await axios.get('http://localhost:8081/orcamentos').then((response) => {
                this.setState({ orcamentosRender: response.data })
            });

        } catch (error) {
            console.error(error);
        }
    }

    async componentDidMount() {
        this.getOrcamento()
    }

    render() {
        
        
        return (
            <section>
                <Navbar />
                <PageHeader />
                <div class="main main-raised">
                    <div class="profile-content">
                        <div class="name">
                            <h3 class="titleservices">Orçamentos </h3>
                            <button href="/orcamento" ><i class="material-icons">keyboard_return</i></button>
                        </div>

                        <table className="table col-9">
                            <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">observacoes</th>
                                    <th scope="col">valor total</th>
                                    <th scope="col">Descrição</th>
 
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.orcamentosRender.map((orcamento, index) => {
                                const { id, observacoes, valor_total } = orcamento
                                console.log(orcamento)
                                return (
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td>{observacoes}</td>
                                        <td>{valor_total}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                            </table>
                    </div>
                </div>
                <Footer />
            </section>
        );
    }
}

export default ListarOrcamento;
