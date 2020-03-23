import axios from 'axios';
const URL = 'http://localhost:3200/api/cursos';

export const limparCursos = e => ({
  type: 'LIMPAR_CURSOS',
})

export const setField = (e, name) => ({
  type: 'ATUALIZA_CAMPO',
  info: e.target.value,
  name: name
})

export const getCursos = e => ({
  type: 'GET_CURSOS',
  info: e
})


export const editarCurso = e => ({
  type: 'EDITAR_CURSO',
  info: e
})

export const listarCursos = props => {
  return async (dispatch) => {
    try {
      let cursos = await axios.get(URL)
      return dispatch(getCursos(cursos.data))
    } catch (error) {
      console.log(error)
    }
  }
}



export const adicionarCurso = props => {
  return async (dispatch) => {
    const { codigo, descricao, cargaHoraria, preco, categoria, _id } = props;
    if (codigo === '' || descricao === '' || cargaHoraria === '' || preco === 0 || categoria === '') {
      alert('Favor preencher todos os campos');
      return;
    }

    try {
      let msg = ''
      if (_id) {
        const body = { codigo, descricao, cargaHoraria, preco, categoria };
        await axios.put(URL + '/' + _id, body)
        msg = 'Curso alterado com sucesso';
      } else {
        const body = { codigo, descricao, cargaHoraria, preco, categoria };
        await axios.post(URL, body)
        msg = 'Curso cadastrado com sucesso';
      }
      alert(msg)
      dispatch(listarCursos())
      return dispatch(limparCursos())
    } catch (error) {
      console.log(error)
      alert('Erro ao cadastrar curso')
    }
  }
}

export const removerCurso = id => {
  return async (dispatch) => {
    try {
      await axios.delete(URL + '/' + id)
      return dispatch(listarCursos())
    } catch (error) {
      console.log(error)
      alert('Erro ao remover curso')
    }
  }
} 