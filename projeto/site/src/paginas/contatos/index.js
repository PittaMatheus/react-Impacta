import React from 'react';
import { Cabecalho } from '../../componentes/cabecalho';
import { ContatoForm } from './form';

export class Contatos extends React.Component {
    render(){
        return (
        <div className="container">
            <Cabecalho titulo="Contato" subTitulo="Entre em contato cu nois"/>
            <ContatoForm/>
        </div>)
    }
}