import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  limparCursos,
  adicionarCurso,
  setField,
} from '../../actions/curso';

const Formulario = props => {

  const atualizar = (e, name) => {
    props.setField(e, name)
  }
  const adicionar = (e) => {
    e.preventDefault(e);
    props.adicionarCurso(props)
  }

  const limpar = async e => {
    e.preventDefault();
    props.limparCursos()
  }
  return (
    <div className="border-right pl-3 pr-3">
      <h3 className="border-bottom">Formulario</h3>
      <form>
        <div className="form-group row">
          <label htmlFor="codigo"
            className="col-sm-3 col-form-label">
            Código:
      </label>
          <div className="col-sm-5 col-6">
            <input type="number"
              onChange={(e) => atualizar(e, 'codigo')}
              className="form-control" id="codigo" value={props.codigo} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="descrição"
            className="col-sm-3 col-for m-label">
            Descrição:
      </label>
          <div className="col-sm-9">
            <input type="text"
              onChange={(e) => atualizar(e, 'descricao')}
              className="form-control" id="descricao" value={props.descricao} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="cargaHoraria"
            className="col-sm-3 col-form-label">
            Carga Horária:</label>
          <div className="col-sm-5 col-6">
            <input type="number"
              onChange={(e) => atualizar(e, 'cargaHoraria')}
              className="form-control" value={props.cargaHoraria} id="cargaHoraria" />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="preco"
            className="col-sm-3 col-form-label">
            Preço:</label>
          <div className="col-sm-5 col-6">
            <input type="text"
              onChange={(e) => atualizar(e, 'preco')}
              className="form-control" value={props.preco} id="preco" />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="categoria"
            className="col-sm-3 col-form-label">Categoria:</label>
          <div className="col-sm-6 col-6">
            <select
              onChange={(e) => atualizar(e, 'categoria')}
              value={props.categoria} className="form-control" id="categoria" >
              <option>INFORMATICA</option>
              <option>ENGENHARIA</option>
              <option>ADMINISTRACAO</option>
              <option>REDES</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <button
            className="btn btn-primary ml-3 mb-3"
            onClick={adicionar}>
            {props._id === '' ? 'Adicionar' : 'Atualizar'}
          </button>
          <button
            className="btn btn-secondary ml-3 mb-3"
            onClick={limpar}>
            Limpar
            </button>
        </div>
      </form>
    </div>
  )
}

const mapStoreTopProps = store => ({
  _id: store.curso._id,
  codigo: store.curso.codigo,
  descricao: store.curso.descricao,
  cargaHoraria: store.curso.cargaHoraria,
  preco: store.curso.preco,
  categoria: store.curso.categoria,
  cursos: store.curso.cursos

});

const mapActionsToProps = dispatch => bindActionCreators({
  setField,
  limparCursos,
  adicionarCurso
}, dispatch);

const conn = connect(mapStoreTopProps, mapActionsToProps)(Formulario);

export { conn as Formulario }