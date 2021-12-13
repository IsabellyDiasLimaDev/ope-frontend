import * as React from "react";
import { Route, Switch } from "react-router-dom";
import cadastrodemateriais from '../pages/cadastrodemateriais';
import cadastrodeservicos from '../pages/cadastrodeservicos';
import cadastrodeauxiliares from '../pages/cadastrodeauxiliares';
import cadastroorcamentos from '../pages/cadastroorcamentos';
import cadastrodeempresa from '../pages/cadastrodeempresa';
import cadastrodefornecedor from '../pages/cadastrodefornecedor';
import cadastrocliente from '../pages/cadastrocliente';
import ListarOrcamento from "../pages/listarorcamento";
import ListarFornecedor from "../pages/listarfornecedor";
import login from  '../pages/login';
import telainicial from  '../pages/telainicial';
import ListarCliente from "../pages/listarcliente";
import ListarEmpresa from "../pages/listarempresa";
import ListarMateriais from "../pages/listarmateriais";
import ListarServico from "../pages/listarservico";
import ListarAuxiliar from "../pages/listarauxiliar";

export default function routes() {

    return (
        <Switch>
            <Route path="/cadastrocliente/:idcliente" component={cadastrocliente} />
            <Route path="/cadastromateriais/:idmaterial" component={cadastrodemateriais} />
            <Route path="/cadastrofornecedor/:idfornecedor" component={cadastrodefornecedor}/>
            <Route path="/cadastroempresa/:idempresa" component={cadastrodeempresa}/>
            <Route path="/cadastroservicos/:idservico" component={cadastrodeservicos}/>
            <Route path="/cadastroauxiliares/:idauxiliar" component={cadastrodeauxiliares}/>
            <Route path="/cadastroorcamento/:idorcamento" component={cadastroorcamentos}/>
            <Route path="/listarorcamento" component={ListarOrcamento}/>
            <Route path="/listarmateriais" component={ListarMateriais}/>
            <Route path="/listarempresa" component={ListarEmpresa}/>
            <Route path="/listarfornecedor" component={ListarFornecedor}/>
            <Route path="/listarcliente" component={ListarCliente}/>
            <Route path="/listarauxiliar" component={ListarAuxiliar}/>
            <Route path="/listarservicos" component={ListarServico}/>
            <Route path="/" exact={true} component={login}/>
            <Route path="/inicio" component={telainicial}/>

        </Switch>
    );

}