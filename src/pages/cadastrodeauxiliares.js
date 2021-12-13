import React from 'react';
import '../App.css';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/navbar';
import PageHeader from '../components/page-header/PageHeader';
import axios from 'axios';
class cadastroDeAuxiliares extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            telefone: '',
            nome: '',
            tipo_servico: '',
            disponibilidade: '',
            email: ''
        }

    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
        console.log(this.state)
    }

    handleSubmit = async e => {
        e.preventDefault();

        let auxiliar = {
            telefone: this.state.telefone,
            nome: this.state.nome,
            tipo_servico: this.state.tipo_servico,
            disponibilidade: this.state.disponibilidade === 'Sim' ? true : false,
            email: this.state.email
        }

        const idAuxiliar = this.state === null ? "novo" : this.props.match.params.idauxiliar;
        if (idAuxiliar === "novo") {
            axios({
                method: 'post',
                url: 'https://gerenciador-orcamento-backend.herokuapp.com/auxiliares',
                data: auxiliar
            }).then(function (response) {
                alert("Auxiliar cadastrado com sucesso!")
                window.location.href = 'https://gerenciador-orcamento-frontend.herokuapp.com/listarauxiliar'
                console.log(response.data)
            })
        }
        else {
            console.log(idAuxiliar)
            auxiliar["id"] = parseInt(idAuxiliar)
            console.log(auxiliar)
            axios({
                method: 'put',
                url: 'https://gerenciador-orcamento-backend.herokuapp.com/auxiliares',
                data: auxiliar
            }).then(function (response) {
                alert("Auxiliar alterado com sucesso!")
                window.location.href = 'https://gerenciador-orcamento-frontend.herokuapp.com/listarauxiliar'
            })
        }
    }


    async getAuxiliar() {
        const idAuxiliar = this.state === null ? "novo" : this.props.match.params.idauxiliar;
        if (idAuxiliar === "novo") {
            this.setState({
                telefone: '',
                nome: '',
                tipo_servico: '',
                disponibilidade: '',
                email: ''
            })
        } else {
            try {
                await axios.get(`https://gerenciador-orcamento-backend.herokuapp.com/auxiliares/${idAuxiliar}`).then((response) => {
                    console.log("auxiliar", response.data)
                    this.setState({
                        tipo_servico: response.data.tipo_servico,
                        email: response.data.email,
                        nome: response.data.nome,
                        telefone: response.data.telefone,
                        disponibilidade: response.data.disponibilidade
                    })
                });

            } catch (error) {
                console.error(error);
            }
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
                    <div class="avatar">
                    </div>
                    <div class="name">
                        <h3 class="titleservices">Auxiliares</h3>
                    </div>
                    

                    <form class="formu" onSubmit={this.handleSubmit.bind(this)} method="post">
                    <div class="form-row dropdown col-12">
                        <div class="col-6">
                            <label for="nome">Nome</label>
                                <input required onChange={this.handleChange} value={this.state.nome} type="text" class="form-control" name="nome" id="nome" placeholder="Nome" required/>
                            </div>
                    </div>

                    <div class="form-row dropdown col-12">
                        <div class="col-6">
                                <label for="tipo_servico">Tipo Serviço</label>
                                <input required onChange={this.handleChange} value={this.state.tipo_servico} type="text" class="form-control" name="tipo_servico" id="tipo_servico" placeholder="Tipo de serviço" required/>
                            </div>
                    </div>

                    <div class="form-row dropdown col-12">
                        <div class="col-6">
                                <label for="telefone">Telefone</label>
                                <input required onChange={this.handleChange} value={this.state.telefone} type="text" class="form-control" name="telefone" id="telefone"  placeholder="Telefone" />
                            </div>
                    </div>

                    <div class="form-row dropdown col-12">
                        <div class="col-6">
                                <label for="email">E-mail</label>
                                <input required onChange={this.handleChange} value={this.state.email} type="text" class="form-control" name="email" id="email" placeholder="E-mail" required/>
                            </div>
                    </div>

                        <div class="form-row dropdown col-12">
                            <div class="dropdown col-2">
                            <label for="disponibilidade">Disponibilidade</label>
                                <select required onChange={this.handleChange} id="disponibilidade" value={this.state.value} class="form-control form-control-lg ">
                                    <option>Disponibilidade</option>
                                    <option value="Sim" {...(this.state.disponibilidade === true ? { selected: 'selected' } : {})} >Sim</option>
                                    <option value="Não" {...(this.state.disponibilidade === false ? { selected: 'selected' } : {})} >Não</option>
                                </select>
                            </div>
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
export default cadastroDeAuxiliares;
