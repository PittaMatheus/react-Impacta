import { combineReducers } from 'redux';

import contatoReducer from './contato';
import cursoReducer from './curso';

const tabelas = combineReducers({
  contato: contatoReducer,
  curso: cursoReducer
})

export default tabelas;