import React, { Component } from 'react';
import {
    Col, 
    Button,
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    Row,
    FormGroup,
    Label
} from 'reactstrap';
import { connect } from 'react-redux';
import { Form, Text } from 'informed';
import { NotificationManager } from 'react-notifications'

import TipoAcessoUsuarioEnum from '../../utils/TipoAcessoUsuarioEnum';
import { 
  EsconderModalFormularioUsuario,
  CadastrarUsuario,
  AtualizarUsuario,
  ObterUsuarios
 } from '../../redux/actions/Usuario/UsuarioActions';

class ModalFormularioUsuario extends Component{  
    constructor(props){
      super(props);
      this.setFormApi = this.setFormApi.bind(this);
    }

    setFormApi(formApi) {
      this.formApi = formApi;
    }

    salvarUsuario() {
      let data = this.formApi.getValues();

      let nome = data.nome; 
      let cpf = data.cpf; 
	  let email = data.email; 
	  let acessoUsuario = TipoAcessoUsuarioEnum.Admin;

      if(!nome || !cpf || !email){
        NotificationManager.warning('Preencha todos campos!', 'Atenção');
        return;
      }

      let usuario = {
        id: this.props.usuario.id ? this.props.usuario.id : null, 
        nome,
        cpf,
		email,
		acessoUsuario
      };

      if(this.props.usuario.id){
        this.props.AtualizarUsuario(usuario)
          .then(() => this.props.ObterUsuarios());
      } else {
        console.log('cadastrar')
        this.props.CadastrarUsuario(usuario)
          .then(() => this.props.ObterUsuarios());
      }
 
    }

    render(){

        return(
            <Modal isOpen={this.props.showModalFormularioUsuario} toggle={() => this.props.EsconderModalFormularioUsuario()} className={this.props.className}>
              <ModalHeader toggle={() => this.props.EsconderModalFormularioUsuario()}>Usuário</ModalHeader>
              <ModalBody>
                  <Form getApi={this.setFormApi} initialValues={this.props.usuario}>
                    <Row>

                      <Col xs="12">
                        <FormGroup>
                          <Label htmlFor="nome">Nome</Label>
                          <Text className="form-control" field="nome" id="nome" placeholder="Digite seu nome" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12">
                        <FormGroup>
                          <Label htmlFor="cpf">CPF</Label>
                          <Text className="form-control" field="cpf" id="cpf" placeholder="Digite seu CPF" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12">
                        <FormGroup>
                          <Label htmlFor="email">E-mail</Label>
                          <Text className="form-control" field="email" id="email" placeholder="Digite seu e-mail" />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
              </ModalBody>
              <ModalFooter>
                  <Button color="primary" onClick={() => this.salvarUsuario()}>Salvar</Button>
                <Button color="secondary" onClick={() => this.props.EsconderModalFormularioUsuario()}>Cancelar</Button>
              </ModalFooter>
            </Modal>
        )
    }
}

const MapStateToProps = (state) => {
  return {
    usuario: state.UsuarioReducer.usuario,
    showModalFormularioUsuario: state.UsuarioReducer.showModalFormularioUsuario
  }
}
export default connect(MapStateToProps, { EsconderModalFormularioUsuario, CadastrarUsuario, AtualizarUsuario, ObterUsuarios })(ModalFormularioUsuario);