import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	Card,
	CardBody,
	CardHeader,
	FormGroup,
	Label,
	Col,
	Row,
	Button,
} from 'reactstrap';
import { NotificationManager } from 'react-notifications'
import { Form, Text } from 'informed';

import { CadastrarPontuacao, ObterPontuacoes } from '../../redux/actions/Pontuacao/PontuacaoActions';

class FormularioPontuacao extends Component {
	constructor(props) {
		super(props);
		this.setFormApi = this.setFormApi.bind(this);
	}

	setFormApi(formApi) {
		this.formApi = formApi;
	}

	salvarPontuacao() {
		let data = this.formApi.getValues();

		let { descricao, cpfUsuario, valor } = data;

		if (!descricao || !cpfUsuario || !valor) {
			NotificationManager.warning('Preencha todos campos!', 'Atenção');
			return;
		}

		let pontuacao = { 
			descricao,
			cpfUsuario,
			valor
		};

		this.props.CadastrarPontuacao(pontuacao)
		.then((res) => {
			if(res.type !== "CADASTRAR_PONTUACAO_FAIL") {
				this.props.ObterPontuacoes();
				this.formApi.reset();
			}
		})
	}

	render() {
		return (
			<div className="animated fadeIn">
				<Row>
					<Col xs="12" sm="12">
						<Card>
							<CardHeader>
								<big id="titulo-header-componente">Cadastro de pontuação</big>
							</CardHeader>
							<CardBody>
								<Form getApi={this.setFormApi}>
									<Row>
										<Col xs="4">
											<FormGroup>
												<Label htmlFor="descricao">Descrição</Label>
												<Text className="form-control" field="descricao" id="descricao" placeholder="Digite uma descrição" />
											</FormGroup>
										</Col>
										<Col xs="4">
											<FormGroup>
												<Label htmlFor="cpfUsuario">CPF</Label>
												<Text className="form-control" field="cpfUsuario" id="cpfUsuario" placeholder="Digite o do cliente" />
											</FormGroup>
										</Col>
										<Col xs="4">
											<FormGroup>
												<Label htmlFor="valor">Valor</Label>
												<Text className="form-control" field="valor" id="valor" placeholder="Digite o valor da compra" />
											</FormGroup>
										</Col>
									</Row>
									<Col>
										<Row className="float-right">
											<Button className="btn btn-success" onClick={()=> this.salvarPontuacao()}>Cadastrar</Button>
										</Row>
									</Col>
								</Form>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</div>
		)
	}
}

export default connect(null, { CadastrarPontuacao, ObterPontuacoes })(FormularioPontuacao);