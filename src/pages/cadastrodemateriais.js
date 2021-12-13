import React from 'react';
import '../App.css';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/navbar';
import PageHeader from '../components/page-header/PageHeader';

import axios from 'axios';
class cadastroDemateriais extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            descricao: "",
            preco: 0,
            quantidade_disponivel: 0,
            tipo: "",
            cor: "",
            fornecedores: [],
            fornecedoresRender: [],
        }
        this.getMaterial = this.getMaterial.bind(this);
        this.getFornecedor = this.getFornecedor.bind(this);
        this.adicionarFornecedor = this.adicionarFornecedor.bind(this);

    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
        console.log(this.state)
    }

    handleSubmit = async e => {
        e.preventDefault();

        let materiais = {
            descricao: this.state.descricao,
            preco: this.state.preco,
            tipo: this.state.tipo,
            quantidade_disponivel: this.state.quantidade_disponivel,
            categoria: this.state.categoria,
            cor: this.state.cor,
            fornecedores: this.state.fornecedores

        }
        const idMaterial = this.state === null ? "novo" : this.props.match.params.idmaterial;
        if (idMaterial === "novo") {

            axios({
                method: 'post',
                url: 'https://gerenciador-orcamento-backend.herokuapp.com/materiais',
                data: materiais
            }).then(function (response) {
                alert("Material cadastrado com sucesso!")
                window.location.href = 'https://gerenciador-orcamento-frontend.herokuapp.com/listarmateriais'
                console.log(response.data)
            })

        }
        else{
            materiais["id"] = idMaterial
            axios({
                method: 'put',
                url: 'https://gerenciador-orcamento-backend.herokuapp.com/materiais',
                data: materiais
            }).then(function (response) {
                alert("Material alterado com sucesso!")
                window.location.href = 'https://gerenciador-orcamento-frontend.herokuapp.com/listarmateriais'
                console.log(response.data)
            })
        }
    }

    adicionarFornecedor(fornecedor) {
        this.setState(prevState => ({
            fornecedores: [...prevState.fornecedores, fornecedor]
        }));
    }

    async getFornecedor() {
        try {
            await axios.get('https://gerenciador-orcamento-backend.herokuapp.com/fornecedores').then((response) => {
                this.setState({ fornecedoresRender: response.data })
            });

        } catch (error) {
            console.error(error);
        }
    }

    async getMaterial() {
        const idMaterial = this.state === null ? "novo" : this.props.match.params.idmaterial;
        if (idMaterial === "novo") {
            this.setState({
                descricao: "",
                preco: 0,
                quantidade_disponivel: 0,
                tipo: "",
                cor: "",
                fornecedores: [],
            })
        } else {
            try {
                await axios.get(`https://gerenciador-orcamento-backend.herokuapp.com/materiais/${idMaterial}`).then((response) => {
                    this.setState({
                        descricao: response.data.descricao,
                        preco: response.data.preco,
                        quantidade_disponivel: response.data.quantidade_disponivel,
                        tipo: response.data.tipo,
                        cor: response.data.cor,
                        fornecedores: response.data.fornecedores,
                        categoria: response.data.categoria
                    })
                });

            } catch (error) {
                console.error(error);
            }
        }
    }
            

    async componentDidMount() {
        this.getFornecedor()
        this.getMaterial()
    }


    render() {



        return (
            <section>
                <Navbar />
                <PageHeader />


                <div class="main main-raised">

                    <div class="profile">
                        <div class="avatar">
                        </div>
                        <div class="name">
                            <h3 class="titleservices">Materiais</h3>
                        </div>
                    </div>


                    <form class="formu" onSubmit={this.handleSubmit.bind(this)} method="post">
                        <div class="form-row dropdown col-12">

                            <div class="col-3">
                                <label for="categoria">Categoria</label>
                                <input onChange={this.handleChange} value={this.state.categoria} type="text" class="form-control" name="categoria" id="categoria" placeholder="Categoria" />
                            </div>

                            <div class="col-3">
                                <label for="preco">Preço</label>
                                <input onChange={this.handleChange} value={this.state.preco} type="number" class="form-control" name="preco" id="preco" placeholder="Preço" />
                            </div>

                            <div class="col-3">
                                <label for="quantidade_disponivel">Qtd Disponivel</label>
                                <input onChange={this.handleChange} value={this.state.quantidade_disponivel} type="number" class="form-control" name="quantidade_disponivel" id="quantidade_disponivel" placeholder="Quantidade" />
                            </div>

                        </div>

                        <div class="form-row dropdown col-12">

                            <div class="col-3">
                                <label for="cor">Cor</label>
                                <input onChange={this.handleChange} type="text" class="form-control" value={this.state.cor} name="cor" id="cor" placeholder="Cor" />
                            </div>

                            <div class="col-3">
                                <label for="tipo">Tipo</label>
                                <input onChange={this.handleChange} type="text" class="form-control" value={this.state.tipo} name="tipo" id="tipo" placeholder="Tipo" />
                            </div>
                            <div class="col-3">
                                <label for="descricao">Descrição</label>
                                <input onChange={this.handleChange} value={this.state.descricao} type="text" class="form-control" name="descricao" id="descricao" placeholder="Descrição" />
                            </div>

                        </div>

                        <div class="form-row col-12">
                            <button type="submit" class="btn btn-primary">Cadastrar Materiais</button>
                        </div>

                    </form>
                    <table className="table col-12">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">nome</th>
                                <th scope="col">telefone</th>
                                <th scope="col">email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.fornecedoresRender.map((fornecedor, index) => {
                                const { id, nome, email, telefone } = fornecedor
                                console.log(fornecedor)
                                return (
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td>{nome}</td>
                                        <td>{telefone}</td>
                                        <td>{email}</td>
                                        <td><button onClick={this.adicionarFornecedor.bind(this, fornecedor)}>Adicionar</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

                <Footer />
            </section>

        );
    }
}
export default cadastroDemateriais;
