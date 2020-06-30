import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	Card,
	CardBody,
	FormGroup,
	Label,
	Col,
	Row,
	Button,
	CardHeader,
} from 'reactstrap';
import { NotificationManager } from 'react-notifications'
import { Form, Text } from 'informed';

import { CadastrarPontuacao, ObterPontuacoes, EsconderModalCadastroPontuacao } from '../../redux/actions/Pontuacao/PontuacaoActions';
import { ObterDadosCliente } from '../../redux/actions/Cliente/ClienteActions';

class FormularioPontuacao extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dadosCliente: {
				id: '',
				nome: '',
				email: '',
				cpf: ''
			}
		}

		this.setFormApi = this.setFormApi.bind(this);
		this.limparDadosCliente = this.limparDadosCliente.bind(this);
	}

	setFormApi(formApi) {
		this.formApi = formApi;
	}

	obterDadosCliente() {
		let cpf = this.formApi.getValue("cpfUsuario");

		this.props.ObterDadosCliente(cpf)
			.then((res) => {
				if (!res.error) {
					this.setState({
						dadosCliente: {
							id: res.payload.data.id,
							nome: res.payload.data.nome,
							email: res.payload.data.email,
							cpf: res.payload.data.cpf,
						}
					})
				} else {
					this.limparDadosCliente();
				}
			});

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
				if (!res.error) {
					this.props.ObterPontuacoes();
					this.formApi.reset();
					this.limparDadosCliente();
					this.props.EsconderModalCadastroPontuacao();
				}
			})
	}

	limparDadosCliente() {
		this.setState({
			dadosCliente: {
				id: '',
				nome: '',
				email: ''
			}
		});
	}

	dadosClientePreenchidos() {
		return this.state.dadosCliente.id !== '';
	}
	render() {
		return (
			<div className="animated fadeIn">
				<Row>
					<Col xs="12" sm="12">
						<Card>
							<CardBody>
								<Form getApi={this.setFormApi}>
									<Row>
										<Col xs="7">
											<Col xs="12">
												<FormGroup >
													<Label htmlFor="cpfUsuario">CPF</Label>
													<div className="row">
														<div className="col-10">
															<Text className="form-control" field="cpfUsuario" id="cpfUsuario" placeholder="Digite o CPF do cliente" />
														</div>
														<div className="col-2 pl-0">
															<Button primary className="btn btn-md btn-primary" onClick={() => this.obterDadosCliente()}><i className="fa fa-search"></i></Button>
														</div>

													</div>
												</FormGroup>
											</Col>
											{this.dadosClientePreenchidos() &&
												<>
													<Col xs="10">
														<FormGroup>
															<Label htmlFor="descricao">Descrição</Label>
															<Text className="form-control" field="descricao" id="descricao" placeholder="Digite uma descrição" />
														</FormGroup>
													</Col>
													<Col xs="10">
														<FormGroup>
															<Label htmlFor="valor">Valor</Label>
															<Text className="form-control" field="valor" id="valor" placeholder="Digite o valor da compra" />
														</FormGroup>
													</Col>
												</>
											}
										</Col>
										{this.dadosClientePreenchidos() &&
											<Col xs="5">
												<Card>
													<CardHeader>
														<h5>Dados do cliente</h5>
													</CardHeader>
													<CardBody>
														<p><b>Nome:</b> {this.state.dadosCliente.nome}</p>
														<p><b>Email:</b> {this.state.dadosCliente.email}</p>
														<p><b>CPF:</b> {this.state.dadosCliente.cpf}</p>
													</CardBody>
												</Card>

											</Col>
										}
									</Row>
									<Col>
										{this.dadosClientePreenchidos() &&
											<Row className="float-right">
												<Button className="btn btn-success" onClick={() => this.salvarPontuacao()}>Cadastrar</Button>
											</Row>
										}
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

export default connect(null,
	{
		CadastrarPontuacao,
		ObterPontuacoes,
		ObterDadosCliente,
		EsconderModalCadastroPontuacao
	})(FormularioPontuacao);