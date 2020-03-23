const INITIAL_STATE = {
  _id: '',
  codigo: 0,
  descricao: '',
  cargaHoraria: 0,
  preco: 0,
  categoria: 'INFORMATICA',
}

export default (state = INITIAL_STATE, action) => {
  // mantem os cursos existentes
  let cursos = state.cursos
  switch (action.type) {
    case 'LIMPAR_CURSOS': { return { ...INITIAL_STATE, cursos } };
    case 'ATUALIZA_CAMPO': return { ...state, [action.name]: action.info }
    case 'EDITAR_CURSO': let curso = action.info; return { ...curso, cursos }
    case 'GET_CURSOS': return { ...state, cursos: action.info }

    default: return state;
  }
}