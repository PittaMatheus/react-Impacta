import React from 'react';
import { Cabecalho } from '../../componentes/cabecalho';
import { Cadastro } from './cadastro';

export class Cursos extends React.Component {
    render(){
        return (
            <div className="container">
                <Cabecalho titulo="Curso" subTitulo="Entre em contato cu nois"/>
                <Cadastro/>
            </div>)
    }
}