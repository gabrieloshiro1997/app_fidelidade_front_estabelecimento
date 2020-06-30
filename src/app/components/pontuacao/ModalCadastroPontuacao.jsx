import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';

import FormularioPontuacao from './FormularioPontuacao';
import { EsconderModalCadastroPontuacao } from '../../redux/actions/Pontuacao/PontuacaoActions';

class ModalCadastroPontuacao extends Component {
	render() {
		return (
			<div>
				<Modal size='lg' isOpen={this.props.exibirModalCadastroPontuacao} toggle={this.props.EsconderModalCadastroPontuacao} >
					<ModalHeader toggle={this.props.EsconderModalCadastroPontuacao}>Cadastrar Pontuação</ModalHeader>
					<ModalBody>
						<FormularioPontuacao />
					</ModalBody>
				</Modal>
			</div>
		);

	}
}

const MapStateToProps = (state) => {
	return {
		exibirModalCadastroPontuacao: state.PontuacaoReducer.exibirModalCadastroPontuacao
	}
}
export default connect(MapStateToProps, { EsconderModalCadastroPontuacao })(ModalCadastroPontuacao);