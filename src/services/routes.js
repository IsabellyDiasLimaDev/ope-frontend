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
import login from  '../pages/login';
import telainicial from  '../pages/telainicial';


export default function routes() {

    return (
        <Switch>
            <Route path="/cliente/:idcliente" component={cadastrocliente} />
            <Route path="/fornecedor/:idfornecedor" component={cadastrodefornecedor}/>
            <Route path="/empresa/:idempresa" component={cadastrodeempresa}/>
            <Route path="/materiais/:idmaterial" component={cadastrodemateriais}/>
            <Route path="/servicos/:idservico" component={cadastrodeservicos}/>
            <Route path="/auxiliares/:idauxiliar" component={cadastrodeauxiliares}/>
            <Route path="/cadastroorcamento" component={cadastroorcamentos}/>
            <Route path="/listarorcamento" component={ListarOrcamento}/>
            <Route path="/orcamento" component={menuorcamento}/>
            <Route path="/" exact={true} component={login}/>
            <Route path="/inicio" component={telainicial}/>

        </Switch>
    );

}