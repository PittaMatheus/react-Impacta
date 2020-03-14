import React from 'react';
import { Lista } from './Lista';

export class Component extends React.Component {
    initialState = {
        idade:'',
        cep: '',
        dataNascimento:'',
        nome: '',
        categorias: ['Corno', 'cornin', 'cornélio', 'xifrufo']
    }
    state = this.initialState;


    limpar() {
        this.setState(this.initialState);
    }

    componentDidMount() {
        setTimeout(_ => this.setState({ ...this.state, nome: "matheus" }), 3000)
        setTimeout(_ => this.limpar(), 3000);

    }
    renderLista() {
        return (
            this.state.categorias.map((cat, index) =>
             <Lista key={index} texto={cat}/>)
        )
    }
    render() {
        return (
            <div>
                <h1>Hé{this.state.nome}</h1>
                <ul>
                    {this.renderLista()}
                </ul>
            </div>
        );

    }

}