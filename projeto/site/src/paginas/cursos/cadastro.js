import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { listarCursos } from '../../actions/curso';





import { ListaCursos } from './lista';
import { Formulario } from './formulario';

const URL = 'http://localhost:3200/api/cursos';

class Cadastro extends React.Component {

  ListarCursos(){
   this.props.listarCursos();
  }

  componentDidMount(){
    this.ListarCursos()
  }
  render() {
    return (
      <div className="row border-bottom">
        <div className="col-md-6">
          <Formulario/>
        </div>
        <div className="col-md-6">
          <ListaCursos/>
        </div>
      </div>
    );
  }
}


const mapActionsToProps = dispatch => bindActionCreators({
  listarCursos
}, dispatch);

const conn = connect(null, mapActionsToProps)(Cadastro);

export { conn as Cadastro }