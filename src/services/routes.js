import * as React from "react";
import { Route, Switch } from "react-router-dom";
import cadastrodemateriais from '../pages/cadastrodemateriais';
import cadastrodeservicos from '../pages/cadastrodeservicos';
import cadastrodeauxiliares from '../pages/cadastrodeauxiliares';
import cadastroorcamentos from '../pages/cadastroorcamentos';
import cadastrodeempresa from '../pages/cadastrodeempresa';
import cadastrodefornecedor from '../pages/cadastrodefornecedor';
import cadastrocliente from '../pages/cadastrocliente'
import login from  '../pages/login'
import telainicial from  '../pages/telainicial'


export default function routes() {

    return (
        <Switch>
            <Route path="/cliente" component={cadastrocliente} />
            <Route path="/fornecedor" component={cadastrodefornecedor}/>
            <Route path="/empresa" component={cadastrodeempresa}/>
            <Route path="/materiais" component={cadastrodemateriais}/>
            <Route path="/servicos" component={cadastrodeservicos}/>
            <Route path="/auxiliares" component={cadastrodeauxiliares}/>
            <Route path="/orcamento" component={cadastroorcamentos}/>
            <Route path="/" exact={true} component={login}/>
            <Route path="/inicio" component={telainicial}/>

        </Switch>
    );

}