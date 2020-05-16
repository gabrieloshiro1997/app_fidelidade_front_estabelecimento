import React, { Component } from 'react';
import {
    Button,
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter
} from 'reactstrap';

import { connect } from 'react-redux';
import { AprovarEstabelecimento,
	ReprovarEstabelecimento, 
	EsconderModalAprovarEstabelecimento,
	ObterEstabelecimentos } 
from '../../redux/actions/Estabelecimento/EstabelecimentoActions';

class ModalAprovacaoEstabelecimento extends Component {
	constructor(props){
		super(props);
		this.aprovarEstabelecimento = this.aprovarEstabelecimento.bind(this);
		this.reprovarEstabelecimento = this.reprovarEstabelecimento.bind(this);
	}

	aprovarEstabelecimento(id) {
		this.props.AprovarEstabelecimento(id)
		.then(() => {
			this.props.EsconderModalAprovarEstabelecimento();
			this.props.ObterEstabelecimentos();
		})
	}

	reprovarEstabelecimento(id) {
		this.props.ReprovarEstabelecimento(id)
		.then(() => {
		this.props.EsconderModalAprovarEstabelecimento();
		this.props.ObterEstabelecimentos();
		})
	}
    render() {
        return(
            <Modal isOpen={this.props.showModalAprovarEstabelecimento} toggle={() => this.props.EsconderModalAprovarEstabelecimento()} className={this.props.className}>
              <ModalHeader toggle={() => this.props.EsconderModalAprovarEstabelecimento()}>Deseja aprovar o estabelecimento com as informações abaixo?</ModalHeader>
              <ModalBody>
				<h6 ><b>Nome Fantasia:</b> { this.props.estabelecimento.nome_fantasia}</h6>
				<h6><b>CNPJ:</b> { this.props.estabelecimento.cnpj}</h6>
				<h6><b>Email:</b> { this.props.estabelecimento.email}</h6>

              </ModalBody>
              <ModalFooter>
                <Button color="success" onClick={() => this.aprovarEstabelecimento(this.props.estabelecimento.id)}>Sim</Button>
                <Button color="danger" onClick={() => this.reprovarEstabelecimento(this.props.estabelecimento.id)}>Não</Button>
              </ModalFooter>
            </Modal>
        )
    }
}

const MapStateToProps = state => {
  return {
	showModalAprovarEstabelecimento:  state.EstabelecimentoReducer.showModalAprovarEstabelecimento,
	estabelecimento: state.EstabelecimentoReducer.estabelecimento
  }
}
export default connect(MapStateToProps, { AprovarEstabelecimento, 
	ReprovarEstabelecimento, 
	EsconderModalAprovarEstabelecimento,
	ObterEstabelecimentos
})(ModalAprovacaoEstabelecimento);