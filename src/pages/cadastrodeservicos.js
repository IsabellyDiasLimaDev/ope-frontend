import '../App.css';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/navbar';
import PageHeader from '../components/page-header/PageHeader';
import axios from 'axios';
import { Component, useState } from 'react';


class CadastroDeServico extends Component {

    constructor(props) {
        super(props);
        this.state = {
            valor_mao_de_obra: 0,
            valor_total: 0,
            descricao: '',
            dt_inicial: '',
            dt_final: '',
            material_servico: [],
            auxiliares: [],
            materiaisRender: [],
            auxiliaresRender: [],
            quantidade_material: 0
        }
        this.adicionarMaterial = this.adicionarMaterial.bind(this)
        this.adicionarAuxiliar = this.adicionarAuxiliar.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeValor = this.handleChangeValor.bind(this)
        this.editarMaterial = this.editarMaterial.bind(this)

    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
        console.log(this.state)
    }
    handleChangeValor = e => {
        this.setState({ valor_total: this.state.valor_total + parseInt(this.state.valor_mao_de_obra) });
        console.log(this.state)
    }


    handleSubmit = async e => {
        e.preventDefault();

        let servico = {
            valor_mao_de_obra: this.state.valor_mao_de_obra,
            valor_total: this.state.valor_total,
            descricao: this.state.descricao,
            dt_inicial: this.state.dt_inicial,
            dt_final: this.state.dt_final,
            material_servico: this.state.material_servico,
            auxiliares: this.state.auxiliares
        }

        axios({
            method: 'post',
            url: 'https://gerenciador-orcamento-backend.herokuapp.com/servicos',
            data: servico
        }).then(function (response) {
            alert("Serviço cadastrado com sucesso!")
            window.location.href = 'https://gerenciador-orcamento-frontend.herokuapp.com/inicio'
            console.log(response.data)
        })
    }

    adicionarMaterial(material, preco, quantidade_disponivel) {
        if (this.state.quantidade_material <= quantidade_disponivel) {
            let material_servico = {
                material: material,
                quantidade_material: this.state.quantidade_material
            }
            this.setState(prevState => ({
                material_servico: [...prevState.material_servico, material_servico]
            }));
            this.setState({ valor_total: this.state.valor_total + (preco * this.state.quantidade_material) })
        }
        else {
            alert("Quantidade selecionada é maior que a disponível")
        }

    }

    adicionarAuxiliar(auxiliar, disponibilidade) {
        if (disponibilidade) {
            this.setState(prevState => ({
                auxiliares: [...prevState.auxiliares, auxiliar]
            }));
        } else {
            alert('Auxiliar não está disponível')
        }

    }

    async getMateriais() {
        try {
            await axios.get('https://gerenciador-orcamento-backend.herokuapp.com/materiais').then((response) => {
                this.setState({ materiaisRender: response.data })
            });

        } catch (error) {
            console.error(error);
        }
    }
    async getAuxiliares() {
        try {
            await axios.get('https://gerenciador-orcamento-backend.herokuapp.com/auxiliares').then((response) => {
                this.setState({ auxiliaresRender: response.data })
            });

        } catch (error) {
            console.error(error);
        }
    }

    editarMaterial(){

    }

    async componentDidMount() {
        this.getMateriais()
        this.getAuxiliares()
    }



    render() {
        return (
            <section>
                <Navbar />
                <PageHeader />
                <div class="main main-raised">
                    <div class="profile-content">
                        <div class="name">
                            <h3 class="titleservices">Cadastro de Serviços </h3>
                        </div>

                        <form class="formu" onSubmit={this.handleSubmit.bind(this)} method="post">
                            <div class="form-row col-12">
                                <div class="col-3">
                                    <input onChange={this.handleChange} type="text" class="form-control" name="valor_mao_de_obra" id="valor_mao_de_obra" placeholder="Valor Mão de Obra" />
                                </div>
                                <div class="col-3">
                                    <input onChange={this.handleChange} type="text" class="form-control" name="dt_inicial" id="dt_inicial" placeholder="Data Inicial" />
                                </div>
                                <div class="col-3">
                                    <input onChange={this.handleChange} type="text" class="form-control" name="dt_final" id="dt_final" placeholder="Data Final" />
                                </div>
                                <div class="col-3">
                                    <input onChange={this.handleChange} type="text" class="form-control" name="descricao" id="descricao" placeholder="Descrição" />
                                </div>
                            </div>
                            <div class="form-row col-12">
                                <h5 className='col-2'>Valor total: </h5>
                                <div className='col-10'>
                                <input readOnly value={this.state.valor_total} type="text" className="form-control" name="valor_total" id="valor_total" placeholder="Valor Total" />
                                </div>
                                </div>                        
                            <div class="form-row col-14">

                                <button type="submit" class="btn btn-primary">Cadastrar  <i class="material-icons">add_task</i></button>
                                <button onClick={this.handleChangeValor} type="submit" class="btn btn-primary">Atualizar valor <i class="material-icons">autorenew</i></button>
                            </div>
                           
        
                        </form>

                      

                        <table className="table col-12">
                            <thead>
                                <tr>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Telefone</th>
                                    <th scope="col">E-mail</th>
                                    <th scope="col">Tipo Servico</th>
                                    <th scope="col">Disponibilidade</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.auxiliaresRender.map((auxiliar, index) => {
                                    const { nome, email, telefone, tipo_servico, disponibilidade } = auxiliar
                                    return (
                                        <tr key={index}>
                                            <td>{nome}</td>
                                            <td>{telefone}</td>
                                            <td>{email}</td>
                                            <td>{tipo_servico}</td>
                                            <td>{disponibilidade === true ? 'sim' : 'não'}</td>
                                            <td><button type="submit" class="btn btn-primary butao" onClick={this.adicionarAuxiliar.bind(this, auxiliar, disponibilidade)}><i class="material-icons">add_circle</i></button></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>

                        <table className="table col-12">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Valor</th>
                                    <th scope="col">Tipo</th>
                                    <th scope="col">Categoria</th>
                                    <th scope="col">Qtd Disponível</th>
                                    <th scope="col">Descrição</th>
                                    <th scope="col">Cor</th>
                                    <th scope="col">Qtd Material</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.materiaisRender.map((material, index) => {
                                    const { id, preco, tipo, categoria, quantidade_disponivel, descricao, cor } = material
                                    return (
                                        <tr key={id}>
                                            <td>{id}</td>
                                            <td>{preco}</td>
                                            <td>{tipo}</td>
                                            <td>{categoria}</td>
                                            <td>{quantidade_disponivel}</td>
                                            <td>{descricao}</td>
                                            <td>{cor}</td>
                                            <td><input onChange={this.handleChange} type="text" class="form-control" name="quantidade_material " id="quantidade_material" placeholder="quantidade" /></td>
                                            <td><button type="submit" class="btn btn-primary butao" onClick={this.adicionarMaterial.bind(this, material, preco, quantidade_disponivel)}><i class="material-icons">add_circle</i></button></td>
                                            <td><a class="nav-link nav-link active btn btn-primary butao" href="/materiais/{id}" role="tab" data-toggle="tab"><i class="material-icons">edit</i></a></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>

                        <form class="formu" action="{{ url_for('calcular_valor_total') }}" method="post">
                            <div class="form-row col-11">

                            </div>
                        </form>


                        <form action="{{ url_for('servico') }}" method="post">
                            <div class="form-row col-10">



                            </div>
                            <div>

                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
            </section>
        );
    }
}

export default CadastroDeServico;