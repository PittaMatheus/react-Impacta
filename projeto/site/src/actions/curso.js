import axios from 'axios';
const URL = 'http://localhost:3200/api/cursos';

export const limparCursos = e => ({
  type: 'LIMPAR_CURSOS', 
})

export const atualizaPreco = e => ({
  type: 'ATUALIZA_PRECO', 
  info: e.target.value
})

export const atualizaCodigo = e => ({
  type: 'ATUALIZA_CODIGO', 
  info: e.target.value
})
export const atualizaDescricao = e => ({
  type: 'ATUALIZA_DESCRICAO', 
  info: e.target.value
})
export const atualizaCargaHoraria = e => ({
  type: 'ATUALIZA_CARGA_HORARIA', 
  info: e.target.value
})
export const atualizaCategoria = e => ({
  type: 'ATUALIZA_CATEGORIA', 
  info: e.target.value
})

export const getCursos = e => ({
  type: 'GET_CURSOS', 
  info: e
})

export const adicionarCurso = props => {
  return async (dispatch) => {
      const { codigo, descricao, cargaHoraria, preco, categoria } = props;

      if (codigo === 0 || descricao === '' || cargaHoraria === 0 || preco === 0 || categoria === '') {
          alert('Favor preencher todos os campos');
          return;
      }

      try{
        const body = { codigo, descricao, cargaHoraria, preco, categoria };
          await axios.post(URL, body)
          alert('Contato enviado com sucesso, aguarde retorno');
          return dispatch(limparCursos())
      }catch(error) {
          console.log(error)
          alert('Erro ao salvar contato')
      }
  }
} 


export const listarCursos = props => {
  return async (dispatch) => {
      try{
          let cursos = await axios.get(URL)
          return dispatch(getCursos(cursos.data))
      }catch(error) {
          console.log(error)
      }
  }
} 
