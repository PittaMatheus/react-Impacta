import axios from 'axios';
const URL = 'http://localhost:3200/api/contatos';


export const atualizaData = e => ({
    type: 'ATUALIZA_DATA', 
    info: e.target.value
})

export const atualizaNome = e => ({
  type: 'ATUALIZA_NOME', 
  info: e.target.value
})

export const atualizaEmail = e => ({
  type: 'ATUALIZA_EMAIL', 
  info: e.target.value
})

export const atualizaAssunto = e => ({
  type: 'ATUALIZA_ASSUNTO', 
  info: e.target.value
})

export const limparContatos = e => ({
  type: 'LIMPAR_CONTATOS', 
})


export const adicionarContato = props => {
  return async (dispatch) => {
      const { data, nome, email, assunto } = props;

      if (data === '' || nome === '' || email === '' || assunto === '') {
          alert('Favor preencher todos os campos');
          return;
      }

      try{
          const body = {data, nome, email, assunto};

          await axios.post(URL, body)
          alert('Contato enviado com sucesso, aguarde retorno');
          return dispatch(limparContatos())
      }catch(error) {
          console.log(error)
          alert('Erro ao salvar contato')
      }
  }
} 