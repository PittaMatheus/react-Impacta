const INITIAL_STATE = {
  _id: '',
  codigo: 0,
  descricao: '',
  cargaHoraria: 0,
  preco: 0,
  categoria: 'INFORMATICA',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LIMPAR_CURSOS': { 
      let cursos = state.cursos
      return {...INITIAL_STATE, cursos}
    } ;
    case 'ATUALIZA_CODIGO': return { ...state, codigo: action.info }
    case 'ATUALIZA_DESCRICAO': return { ...state, descricao: action.info }
    case 'ATUALIZA_CARGA_HORARIA': return { ...state, cargaHoraria: action.info }
    case 'ATUALIZA_CATEGORIA': return { ...state, categoria: action.info }
    case 'ATUALIZA_PRECO': return { ...state, preco: action.info }
    case 'GET_CURSOS': return { ...state, cursos: action.info }

    default: return state;
  }
}