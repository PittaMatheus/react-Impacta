import React from 'react';
export const Formulario = props => (
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
            onChange={props.atualizaCodigo}
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
            onChange={props.atualizaDescricao}
            className="form-control" id="descricao" value={props.descricao} />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="cargaHoraria"
          className="col-sm-3 col-form-label">
          Carga Horária:</label>
        <div className="col-sm-5 col-6">
          <input type="number"
            onChange={props.atualizaCargaHoraria}
            className="form-control" value={props.cargaHoraria} id="cargaHoraria" />
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="preco"
          className="col-sm-3 col-form-label">
          Preço:</label>
        <div className="col-sm-5 col-6">
          <input type="text"
            onChange={props.atualizaPreco}
            className="form-control" value={props.preco} id="preco" />
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="categoria"
          className="col-sm-3 col-form-label">Categoria:</label>
        <div className="col-sm-6 col-6">
          <select
            onChange={props.atualizaCategoria}
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
          onClick={props.adicionarCurso}> 
          {props._id === '' ? 'Adicionar' : 'Atualizar'}
          </button>
        <button
          className="btn btn-secondary ml-3 mb-3"
          onClick={props.limparForm}> 
          Limpar
        </button>
      </div>
    </form>
  </div>
)