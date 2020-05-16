import React, { Component } from 'react';
import {
  Card, 
  CardBody, 
  CardHeader, 
  Col, 
  Button
} from 'reactstrap';
import { connect } from 'react-redux';
import TabelaUsuario from './TabelaUsuario';
import ModalFormularioUsuario from './ModalFormularioUsuario';
import ModalDeletarUsuario from './ModalDeletarUsuario';
import { ExibirModalFormularioUsuario } from '../../redux/actions/Usuario/UsuarioActions';

class Usuario extends Component {
  render(){
      return(
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <big id="titulo-header-componente">Lista de Clientes</big>
                <div className="card-header-actions">
                  {/* <Button className="fa fa-plus btn-sm mx-1 bg-success" onClick={() => this.props.ExibirModalFormularioUsuario()}></Button> */}
                </div>
              </CardHeader>
              <CardBody>
                <TabelaUsuario />
            </CardBody>
          </Card>
          <ModalFormularioUsuario />
          <ModalDeletarUsuario />
        </Col>
      )
  }
}

export default connect(null, { ExibirModalFormularioUsuario })(Usuario)