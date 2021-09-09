import * as React from "react";
import { Route, Switch } from "react-router-dom";
import cadastrodemateriais from '../pages/cadastrodemateriais';
import cadastrodeservicos from '../pages/cadastrodeservicos';


export default function routes() {

    return (
        <Switch>
            <Route path="/materiais" component={cadastrodemateriais}/>
            <Route path="/servicos" component={cadastrodeservicos}/>
        </Switch>
    );

}