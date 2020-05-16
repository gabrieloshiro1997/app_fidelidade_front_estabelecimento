import React, { Component } from 'react';
import {
  Card, 
  CardBody, 
  CardHeader, 
  Col, 
  Button
} from 'reactstrap';
import { connect } from 'react-redux';
import TabelaEstabelecimento from './TabelaEstabelecimento';
import ModalAprovaçãoEstabelecimento from './ModalAprovacaoEstabelecimento';
import ModalAlteracaoStatus from './ModalAlteracaoStatus';
// import ModalDeletarUsuario from './ModalDeletarUsuario';
import { ObterEstabelecimentos } from '../../redux/actions/Estabelecimento/EstabelecimentoActions';

class Estabelecimento extends Component {
	constructor(props) {
		super(props);
		this.props.ObterEstabelecimentos();
	}
  render(){
      return(
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <big id="titulo-header-componente">Lista de Estabelecimentos</big>
                <div className="card-header-actions">
                </div>
              </CardHeader>
              <CardBody>
				<TabelaEstabelecimento />
            </CardBody>
          </Card>
		  <ModalAprovaçãoEstabelecimento />
		  <ModalAlteracaoStatus />
        </Col>
      )
  }
}

export default connect(null, { ObterEstabelecimentos })(Estabelecimento)