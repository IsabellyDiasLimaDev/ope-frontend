import '../App.css';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/navlogin';
import PageHeader from '../components/page-header/PageHeader';
import axios from 'axios';
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class TelaInicial extends Component {
    render() {
        return (
            <section>
                <Navbar />
                <PageHeader />
                <div class="main main-raised">
                    <div class="profile-content">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 ml-auto mr-auto">
                                    <div class="profile">
                                        <div class="avatar form-row col-12">
                                            <img
                                                src="https://cdn.discordapp.com/attachments/746027270845759568/844740364278693928/ansel-elgort-poses-for-a-portrait-during-the-baby-driver-premiere-2017-sxsw-conference-and-festivals.png"
                                                alt="Circle Image" class="img-raised rounded-circle img-fluid" />
                                        </div>

                                        <div class="name">
                                            <h3 class="title">Giorni Service</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="name">
                                <h3 class="titleservices"> Início </h3>
                            </div>
                        </div>
                        <div class="row form-row col-12">
                            <div class="col-md-6 ml-auto mr-auto ">
                                <div class="profile-tabs">
                                    <ul class="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
                                    
                                        <li class="nav-item">
                                            <a class="nav-link nav-link active" href="/materiais/novo" role="tab" data-toggle="tab">
                                                <i class="material-icons">inventory_2</i>
                                                Materiais
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link nav-link active" href="/servicos/novo" role="tab" data-toggle="tab">
                                                <i class="material-icons">home_repair_service</i>
                                                Serviços
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link nav-link active" href="/auxiliares/novo" role="tab" data-toggle="tab">
                                                <i class="material-icons">person</i>
                                                Auxiliares
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link nav-link active" href="/empresa/novo" role="tab" data-toggle="tab">
                                                <i class="material-icons">business</i>
                                                Empresa
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a class="nav-link nav-link active" href="/orcamento/novo" role="tab" data-toggle="tab">
                                                <i class="material-icons">paid</i>
                                                Orçamento
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a class="nav-link nav-link active" href="/cliente/novo" role="tab" data-toggle="tab">
                                                <i class="material-icons">people</i>
                                                Cliente
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a class="nav-link nav-link active" href="/fornecedor/novo" role="tab" data-toggle="tab">
                                                <i class="material-icons">add_business</i>
                                                Fornecedor
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link nav-link active" href="/" role="tab" data-toggle="tab">
                                                <i class="material-icons">logout</i>
                                                Sair
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        )
    }
}

export default TelaInicial;
