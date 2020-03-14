import React from 'react';
import { Formulario } from './formulario';
import { ListaCursos } from './lista';
import  Axios from 'axios';

const URL = 'http://localhost:3200/api/cursos';

export class Cadastro extends React.Component {
    estadoInicial = {
        cursos : null,
        codigo: null,
        descricao: null,
        cargaHoraria: null,
        preco: null,
        categoria: "REDES"
    }
    state = this.estadoInicial

    atualizaCodigo = (e) => {
        this.setState({
            ...this.state,
            codigo: e.target.value
        })
    }

    atualizaCategoria = (e) => {
        this.setState({
            ...this.state,
            categoria: e.target.value
        })
    }

    atualizaDescricao = (e) => {
        this.setState({
            ...this.state,
            descricao: e.target.value
        })
    }

    atualizaPreco = (e) => {
        this.setState({
            ...this.state,
            preco: e.target.value
        })
    }

    atualizaCargaHoraria = (e) => {
        this.setState({
            ...this.state,
            cargaHoraria: e.target.value
        })
    }









    
    componentDidMount(){
        Axios.get(URL)
        .then(response => {
            this.setState({
                ...this.state,
                cursos: response.data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }


    // componentDidMount = async() => {
    //     try{
    //         const response = await Axios.get(URL)
    //     }catch(error){

    //     }
    // }


    render(){
        const { cursos, codigo, descricao, preco, cargaHoraria, categoria } = this.state
        return (
            <div className="row border-bottom">
                <div className="col-md-6">
                    <Formulario 
                    atualizaCodigo={this.atualizaCodigo}
                    atualizaCategoria={this.atualizaCategoria}
                    atualizaPreco={this.atualizaPreco}
                    atualizaCargaHoraria={this.atualizaCargaHoraria}
                    atualizaDescricao={this.atualizaDescricao}

                    codigo={codigo} descricao={descricao} cargaHoraria={cargaHoraria} categoria={categoria} preco={preco}/>
                </div>
                <div className="col-md-6">
                    <ListaCursos cursos={cursos} />
                </div>
            </div>
        )
    }
}