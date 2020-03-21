import { combineReducers } from 'redux';

import contatoReducer from './contato';

const tabelas = combineReducers({
  contato: contatoReducer
})

export default tabelas;