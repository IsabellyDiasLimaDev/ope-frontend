import * as React from "react";
import { Route, Switch } from "react-router-dom";
import cadastrodemateriais from '../pages/cadastrodemateriais';
import cadastrodeservicos from '../pages/cadastrodeservicos';
import cadastrodeauxiliares from '../pages/cadastrodeauxiliares';
import cadastroorcamentos from '../pages/cadastroorcamentos';
import cadastrodeempresa from '../pages/cadastrodeempresa';
import cadastrodefornecedor from '../pages/cadastrodefornecedor';
import cadastrocliente from '../pages/cadastrocliente';
import menuorcamento from '../pages/menuorcamento';
import ListarOrcamento from "../pages/listarorcamento";
import ListarFornecedor from "../pages/listarfornecedor";
import login from  '../pages/login';
import telainicial from  '../pages/telainicial';
import ListarCliente from "../pages/listarcliente";
import ListarEmpresa from "../pages/listarempresa";


export default function routes() {

    return (
        <Switch>
            <Route path="/cadastrocliente/:idcliente" component={cadastrocliente} />
            <Route path="/cadastrofornecedor/:idfornecedor" component={cadastrodefornecedor}/>
            <Route path="/cadastroempresa/:idempresa" component={cadastrodeempresa}/>
            <Route path="/materiais/:idmaterial" component={cadastrodemateriais}/>
            <Route path="/servicos/:idservico" component={cadastrodeservicos}/>
            <Route path="/auxiliares/:idauxiliar" component={cadastrodeauxiliares}/>
            <Route path="/cadastroorcamento/:idorcamento" component={cadastroorcamentos}/>
            <Route path="/listarorcamento" component={ListarOrcamento}/>
            <Route path="/listarempresa" component={ListarEmpresa}/>
            <Route path="/listarfornecedor" component={ListarFornecedor}/>
            <Route path="/listarcliente" component={ListarCliente}/>
            <Route path="/orcamento" component={menuorcamento}/>
            <Route path="/" exact={true} component={login}/>
            <Route path="/inicio" component={telainicial}/>

        </Switch>
    );

}