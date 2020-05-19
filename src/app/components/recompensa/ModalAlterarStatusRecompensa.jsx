import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { ObterRecompensas, EsconderModalAlterarStatusRecompensa, AtivarRecompensa, InativarRecompensa } from '../../redux/actions/Recompensa/RecompensaActions';

class ModalAlterarStatusRecompensa extends Component {
	constructor(props) {
		super(props);
		this.ativarRecompensa = this.ativarRecompensa.bind(this);
		this.inativarRecompensa = this.inativarRecompensa.bind(this);
	}

	ativarRecompensa() {
		this.props.AtivarRecompensa(this.props.recompensa.id)
		.then(() => {
			this.props.ObterRecompensas();
			this.props.EsconderModalAlterarStatusRecompensa();
		});
	}

	inativarRecompensa() {
		this.props.InativarRecompensa(this.props.recompensa.id)
		.then(() => {
			this.props.ObterRecompensas();
			this.props.EsconderModalAlterarStatusRecompensa();
		});
	}

	render() {
		return (
			<Modal isOpen={this.props.showModalAlterarStatusRecompensa} toggle={() => this.props.EsconderModalAlterarStatusRecompensa()}>
				<ModalHeader toggle={() => this.props.EsconderModalAlterarStatusRecompensa()}>{this.props.recompensa.status === 0 ? 'Ativar' : 'Inativar'} Recompensa</ModalHeader>
				<ModalBody>
					Deseja realmente {this.props.recompensa.status === 0 ? 'ativar' : 'inativar'} a recompensa?
              </ModalBody>
				<ModalFooter>
					<Button color="light" onClick={() => this.props.EsconderModalAlterarStatusRecompensa()}>Cancelar</Button>

					{ this.props.recompensa.status === 0 &&
						<Button color="success" onClick={() => this.ativarRecompensa()}>Ativar</Button>
					}

					{ this.props.recompensa.status === 1 &&
						<Button color="success" onClick={() => this.inativarRecompensa()}>Inativar</Button>
					}
				</ModalFooter>
			</Modal>
		)
	}
}

const MapStateToProps = state => {
	return {
		recompensa: state.RecompensaReducer.recompensa,
		showModalAlterarStatusRecompensa: state.RecompensaReducer.showModalAlterarStatusRecompensa
	}
}
export default connect(MapStateToProps, { EsconderModalAlterarStatusRecompensa, ObterRecompensas, AtivarRecompensa, InativarRecompensa })(ModalAlterarStatusRecompensa);