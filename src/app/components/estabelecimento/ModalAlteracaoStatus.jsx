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
	EsconderModalAlteracaoStatus,
	ObterEstabelecimentos } 
from '../../redux/actions/Estabelecimento/EstabelecimentoActions';

class ModalAlteracaoStatus extends Component {
	constructor(props){
		super(props);
		this.aprovarEstabelecimento = this.aprovarEstabelecimento.bind(this);
		this.reprovarEstabelecimento = this.reprovarEstabelecimento.bind(this);
	}

	aprovarEstabelecimento(id) {
		this.props.AprovarEstabelecimento(id)
		.then(() => {
			this.props.EsconderModalAlteracaoStatus();
			this.props.ObterEstabelecimentos();
		})
	}

	reprovarEstabelecimento(id) {
		this.props.ReprovarEstabelecimento(id)
		.then(() => {
		this.props.EsconderModalAlteracaoStatus();
		this.props.ObterEstabelecimentos();
		})
	}
    render() {
        return(
            <Modal isOpen={this.props.showModalAlteracaoStatus} toggle={() => this.props.EsconderModalAlteracaoStatus()} className={this.props.className}>
              <ModalHeader toggle={() => this.props.EsconderModalAlteracaoStatus()}>Selecione o status que você quer definir para o estabelecimento abaixo</ModalHeader>
              <ModalBody>
				<h6 ><b>Nome Fantasia:</b> { this.props.estabelecimento.nome_fantasia}</h6>
				<h6><b>CNPJ:</b> { this.props.estabelecimento.cnpj}</h6>
				<h6><b>Email:</b> { this.props.estabelecimento.email}</h6>

              </ModalBody>
              <ModalFooter>
                <Button color="success" onClick={() => this.aprovarEstabelecimento(this.props.estabelecimento.id)}>Ativo</Button>
                <Button color="danger" onClick={() => this.reprovarEstabelecimento(this.props.estabelecimento.id)}>Inativo</Button>
              </ModalFooter>
            </Modal>
        )
    }
}

const MapStateToProps = state => {
  return {
	showModalAlteracaoStatus:  state.EstabelecimentoReducer.showModalAlteracaoStatus,
	estabelecimento: state.EstabelecimentoReducer.estabelecimento
  }
}
export default connect(MapStateToProps, { AprovarEstabelecimento, 
	ReprovarEstabelecimento, 
	EsconderModalAlteracaoStatus,
	ObterEstabelecimentos
})(ModalAlteracaoStatus);