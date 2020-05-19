import React, { Component } from 'react';
import {
	Card, 
	CardBody, 
	CardHeader, 
	Col,
	Button
} from 'reactstrap';
import TabelaRecompensa from './TabelaRecompensa';
import ModalFormularioRecompensa from './ModalFormularioRecompensa';
import ModalDeletarRecompensa from './ModalDeletarRecompensa';
import ModalAlterarStatusRecompensa from './ModalAlterarStatusRecompensa';
import { connect } from 'react-redux';
import { ExibirModalFormularioRecompensa } from '../../redux/actions/Recompensa/RecompensaActions';

class Recompensa extends Component {
	render() {
		return (
			<>
				<Col xs="12" lg="12">
					<Card>
						<CardHeader>
							<big id="titulo-header-componente">Lista de Recompensas</big>
							<div className="card-header-actions">
								<Button className="fa fa-plus btn-sm mx-1 bg-success" onClick={() => this.props.ExibirModalFormularioRecompensa()}></Button>
							</div>
						</CardHeader>
						<CardBody>
							<TabelaRecompensa />
						</CardBody>
					</Card>
					<ModalFormularioRecompensa />
					<ModalDeletarRecompensa />
					<ModalAlterarStatusRecompensa />
				</Col>
			</>
		)
	}
}

export default connect(null, { ExibirModalFormularioRecompensa })(Recompensa);