import React, { Component } from 'react';
import {
    Button,
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter
} from 'reactstrap';

import { connect } from 'react-redux';
import { ExcluirUsuario, EsconderModalExcluirUsuario, ObterUsuarios } from '../../redux/actions/Usuario/UsuarioActions';

class ModalDeletarUsuario extends Component {
  constructor(props){
    super(props);
    this.excluirUsuario = this.excluirUsuario.bind(this);
  }

  excluirUsuario(id) {
    this.props.ExcluirUsuario(this.props.idUsuario)
    .then(() => {
      this.props.ObterUsuarios();
      this.props.EsconderModalExcluirUsuario();
    })
  }
    render() {
        return(
            <Modal isOpen={this.props.showModalExcluirUsuario} toggle={() => this.props.EsconderModalExcluirUsuario()} className={this.props.className}>
              <ModalHeader toggle={() => this.props.EsconderModalExcluirUsuario()}>Excluir Usuário</ModalHeader>
              <ModalBody>
                Deseja realmente Excluir o usuário?
              </ModalBody>
              <ModalFooter>
                <Button color="success" onClick={() => this.props.EsconderModalExcluirUsuario()}>Cancelar</Button>
                <Button color="danger" onClick={() => this.excluirUsuario()}>Excluir</Button>{' '}
              </ModalFooter>
            </Modal>
        )
    }
}

const MapStateToProps = state => {
  return {
    idUsuario: state.UsuarioReducer.usuario.id,
    showModalExcluirUsuario:  state.UsuarioReducer.showModalExcluirUsuario
  }
}
export default connect(MapStateToProps, { ExcluirUsuario, EsconderModalExcluirUsuario, ObterUsuarios })(ModalDeletarUsuario);