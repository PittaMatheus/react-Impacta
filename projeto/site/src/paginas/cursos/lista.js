import React from 'react';


export const ListaCursos = props => {
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