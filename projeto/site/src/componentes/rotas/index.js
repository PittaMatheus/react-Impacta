import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Cursos } from '../../paginas/cursos';
import { Contatos } from '../../paginas/contatos';


export const Rotas = _ => (
    <Switch>
        <Route path="/cursos" component={Cursos} />
        <Route path="/contatos" component={Contatos} />
        <Route path="*" component={Cursos} />


    </Switch>
)