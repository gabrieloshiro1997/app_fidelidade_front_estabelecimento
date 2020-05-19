import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { ObterRecompensa, ExcluirRecompensa, ObterRecompensas, EsconderModalFormularioRecompensa, EsconderModalExcluirRecompensa } from '../../redux/actions/Recompensa/RecompensaActions';

class ModalDeletarRecompensa extends Component {
	constructor(props) {
		super(props);
		this.excluirRecompensa = this.excluirRecompensa.bind(this);
	}

	excluirRecompensa() {
		this.props.ExcluirRecompensa(this.props.idRecompensa)
		.then(() => {
			this.props.ObterRecompensas();
			this.props.EsconderModalExcluirRecompensa();
		})
	}
	render() {
		return (
			<Modal isOpen={this.props.showModalExcluirRecompensa} toggle={() => this.props.EsconderModalExcluirRecompensa()}>
				<ModalHeader toggle={() => this.props.EsconderModalExcluirRecompensa()}>Excluir Recompensa</ModalHeader>
				<ModalBody>
					Deseja realmente excluir a recompensa?
              </ModalBody>
				<ModalFooter>
					<Button color="success" onClick={() => this.props.EsconderModalExcluirRecompensa()}>Cancelar</Button>
					<Button color="danger" onClick={() => this.excluirRecompensa()}>Excluir</Button>{' '}
				</ModalFooter>
			</Modal>
		)
	}
}

const MapStateToProps = state => {
	return {
		idRecompensa: state.RecompensaReducer.recompensa.id,
		showModalExcluirRecompensa: state.RecompensaReducer.showModalExcluirRecompensa
	}
}
export default connect(MapStateToProps, { ObterRecompensa, ExcluirRecompensa, ObterRecompensas, EsconderModalFormularioRecompensa, EsconderModalExcluirRecompensa })(ModalDeletarRecompensa);