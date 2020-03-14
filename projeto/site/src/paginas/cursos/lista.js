import React from 'react';


export const ListaCursos = props => {
  const exibirLinhas = () => {
   const cursos = props.cursos || []
   return cursos.map(curso => (
    <tr key={curso._id}>
    <td>{curso.codigo}</td>
    <td>{curso.descricao}</td>
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