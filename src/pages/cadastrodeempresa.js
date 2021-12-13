import React from 'react';
import '../App.css';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/navbar';
import PageHeader from '../components/page-header/PageHeader';
import axios from 'axios';
class cadastroDeEmpresa extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email:'',
            nome_fantasia: '',
            logradouro: '',
            numero: '',
            cep: '',
            bairro: '',
            cidade: '',
            estado: '',
            telefone: '',
        }
        this.getEmpresa = this.getEmpresa.bind(this)

    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
        console.log(this.state)
    }

    handleSubmit = async e => {
        e.preventDefault();

        let empresa = {
            email: this.state.email,
            nome_fantasia: this.state.nome_fantasia,
            logradouro: this.state.logradouro,
            numero: this.state.numero,
            cep: this.state.cep,
            bairro: this.state.bairro,
            cidade: this.state.cidade,
            estado: this.state.estado,
            telefone: this.state.telefone
        }

        const idEmpresa = this.state === null ? "novo" : this.props.match.params.idempresa;
        if (idEmpresa === "novo") {
            axios({
                method: 'post',
                url: 'https://gerenciador-orcamento-backend.herokuapp.com/empresas',
                data: empresa
            }).then(function (response) {
                alert("Empresa cadastrada com sucesso!")
                window.location.href = 'https://gerenciador-orcamento-frontend.herokuapp.com/listarempresa'
                console.log(response.data)
            })
        }
        else {
            console.log(idEmpresa)
            empresa["id"] = parseInt(idEmpresa)
            console.log(empresa)
            axios({
                method: 'put',
                url: 'https://gerenciador-orcamento-backend.herokuapp.com/empresas',
                data: empresa
            }).then(function (response) {
                alert("Empresa alterada com sucesso!")
                window.location.href = 'https://gerenciador-orcamento-frontend.herokuapp.com/listarempresa'
            })
        }

    }

    async getEmpresa() {
        const idEmpresa = this.state === null ? "novo" : this.props.match.params.idempresa;
        if (idEmpresa === "novo") {
            this.setState({
                email:'',
                nome_fantasia: '',
                logradouro: '',
                numero: '',
                cep: '',
                bairro: '',
                cidade: '',
                estado: '',
                telefone: ''
            })
        } else {
            try {
                await axios.get(`https://gerenciador-orcamento-backend.herokuapp.com/empresas/${idEmpresa}`).then((response) => {
                    console.log("empresa", response.data)
                    this.setState({

                        email: response.data.email,
                        telefone: response.data.telefone,
                        nome_fantasia: response.data.nome_fantasia,
                        logradouro: response.data.logradouro,
                        numero: response.data.numero,
                        cep: response.data.cep,
                        bairro: response.data.bairro,
                        cidade: response.data.cidade,
                        estado: response.data.estado,
                    })
                });

            } catch (error) {
                console.error(error);
            }
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
                    <div class="avatar">
                    </div>
                    <div class="name">
                        <h3 class="titleservices">Empresa</h3>
                    </div>

                    <form onSubmit={this.handleSubmit.bind(this)} method="post">
                        <div class="form-row dropdown col-12">
                            <div class="col">
                            <label for="nome_fantasia">Nome Fantasia</label>
                                <input required onChange={this.handleChange} value={this.state.nome_fantasia} type="text" class="form-control" name="nome_fantasia" id="nome_fantasia" placeholder="Nome Fantasia" />
                            </div>
                            <div class="col">
                            <label for="telefone">Telefone</label>
                                <input required onChange={this.handleChange} value={this.state.telefone} type="text" class="form-control" name="telefone" id="telefone" placeholder="Telefone" />
                            </div>
                            <div class="col">
                            <label for="email">E-mail</label>
                                <input required onChange={this.handleChange} value={this.state.email} type="text" class="form-control" name="email" id="email" placeholder="E-mail" />
                            </div>
                        </div>
                        <div class="form-row dropdown col-12">
                            <div class="col">
                            <label for="logradouro">Logradouro</label>
                                <input required onChange={this.handleChange} value={this.state.logradouro} type="text" class="form-control" name="logradouro" id="logradouro" placeholder="Logradouro" />
                            </div>
                            <div class="col">
                            <label for="numero">Número</label>
                                <input required onChange={this.handleChange} value={this.state.numero} type="text" class="form-control" name="numero" id="numero" placeholder="Número" />
                            </div>
                            <div class="col">
                            <label for="bairro">Bairro</label>
                                <input required onChange={this.handleChange} value={this.state.bairro} type="text" class="form-control" name="bairro" id="bairro" placeholder="Bairro" />
                            </div>
                        </div>
                        <div class="form-row dropdown col-12">
                            <div class="col">
                            <label for="cidade">Cidade</label>
                                <input required onChange={this.handleChange} value={this.state.cidade} type="text" class="form-control" name="cidade" id="cidade" placeholder="Cidade" />
                            </div>
                            <div class="col">
                            <label for="estado">Estado</label>
                                <input required onChange={this.handleChange} value={this.state.estado} type="text" class="form-control" name="estado" id="estado" placeholder="Estado" />
                            </div>
                            <div class="col">
                            <label for="cep">CEP</label>
                                <input required onChange={this.handleChange} value={this.state.cep} type="text" class="form-control" name="cep" id="cep" placeholder="CEP" />
                            </div>
                        </div>

                        <div class="form-row dropdown col-12">
                        </div>


                        <div class="form-row col-12">
                            <button type="submit" class="btn btn-primary">Cadastrar</button>
                        </div>

                    </form>

                </div>

                <Footer />
            </section>

        );
    }
}
export default cadastroDeEmpresa;
