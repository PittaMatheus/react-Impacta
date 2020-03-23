import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editarCurso, removerCurso } from '../../actions/curso';




const ListaCursos = props => {
  const exibirLinhas = () => {
   const cursos = props.cursos || []
   return cursos.map(curso => (
    <tr key={curso._id}>
    <td>{curso.codigo}</td>
    <td>{curso.descricao}</td>
    <td><button onClick={() => props.editarCurso(curso)} className="btn btn-success"><i className="fa fa-check"></i></button></td>
    <td><button onClick={() => props.removerCurso(curso._id)} className="btn btn-danger"><i className="fa fa-trash-o"></i></button></td>
    </tr>
    ));
  }
  return (
    <div>
      <h3>Lista de Cursos</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Código</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {exibirLinhas()}
        </tbody>
      </table>
    </div>
  )
}

const mapStoreTopProps = store => ({
  cursos: store.curso.cursos

});

const mapActionsToProps = dispatch => bindActionCreators({
  editarCurso,
  removerCurso
}, dispatch);



const conn = connect(mapStoreTopProps, mapActionsToProps)(ListaCursos);

export { conn as ListaCursos }