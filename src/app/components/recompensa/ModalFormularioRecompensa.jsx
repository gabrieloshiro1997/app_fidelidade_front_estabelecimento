import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, Row, Col, FormGroup, Label, ModalFooter, Button } from 'reactstrap';
import { Form, Text, Select, Option } from 'informed';
import { NotificationManager } from 'react-notifications';
import { ObterRecompensas, AtualizarRecompensa, CadastrarRecompensa, EsconderModalFormularioRecompensa } from '../../redux/actions/Recompensa/RecompensaActions';
import { ESTABELECIMENTO_ID } from '../../../config/utils/LocalStorageKeys';
class ModalFormularioRecompensa extends Component {
	constructor(props) {
		super(props);
		this.setFormApi = this.setFormApi.bind(this);
	}

	setFormApi(formApi) {
		this.formApi = formApi;
	}

	salvarRecompensa() {
		let data = this.formApi.getValues();

		let descricao = data.descricao;
		let preco = data.preco;
		let data_validade = data.data_validade;
		let estabelecimento_id = localStorage.getItem(ESTABELECIMENTO_ID);
		console.log(data)
		if (!descricao || !preco || !data_validade) {
			NotificationManager.warning('Preencha todos os campos!', 'Atenção');
			return;
		}

		let recompensa = {
			id: this.props.recompensa.id ? this.props.recompensa.id : null,
			descricao,
			preco,
			data_validade,
			estabelecimento_id
		}

		if (this.props.recompensa.id) {
			this.props.AtualizarRecompensa(recompensa)
				.then(() => this.props.ObterRecompensas());
		} else {
			this.props.CadastrarRecompensa(recompensa)
				.then(() => this.props.ObterRecompensas());
		}
	}
	render() {
		return (
			<Modal isOpen={this.props.showModalFormularioRecompensa} toggle={() => this.props.EsconderModalFormularioRecompensa()}>
				<ModalHeader toggle={() => this.props.EsconderModalFormularioRecompensa()}>Recompensa</ModalHeader>
				<ModalBody>
					<Form getApi={this.setFormApi} initialValues={this.props.recompensa}>
						<Row>
							<Col xs="12">
								<FormGroup>
									<Label htmlFor="descricao">Descrição</Label>
									<Text className="form-control" field="descricao" id="descricao" placeholder="Digite a descrição da recompensa" />
								</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col xs="12">
								<FormGroup>
									<Label htmlFor="pontos">Preço</Label>
									<Text className="form-control" field="preco" id="preco" placeholder="Digite o preço da recompensa" />
								</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col xs="12">
								<FormGroup>
									<Label htmlFor="data_validade">Data de Validade</Label>
									<Text type="date" className="form-control" field="data_validade" id="data_validade" placeholder="Digite o preço da recompensa" />
								</FormGroup>
							</Col>
						</Row>

					</Form>
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={() => this.salvarRecompensa()}>Salvar</Button>
					<Button color="secondary" onClick={() => this.props.EsconderModalFormularioRecompensa()}>Cancelar</Button>
				</ModalFooter>
			</Modal>
		)
	}
}

const MapStateToProps = (state) => {
	return {
		recompensa: state.RecompensaReducer.recompensa,
		showModalFormularioRecompensa: state.RecompensaReducer.showModalFormularioRecompensa
	}
}
export default connect(MapStateToProps, { ObterRecompensas, AtualizarRecompensa, CadastrarRecompensa, EsconderModalFormularioRecompensa })(ModalFormularioRecompensa)