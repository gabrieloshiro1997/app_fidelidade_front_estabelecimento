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
import { addMaskCpf, removeMaskCpf } from '../../utils/helper/helper';

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
		this.addMaskCpf = this.addMaskCpf.bind(this);
	}

	setFormApi(formApi) {
		this.formApi = formApi;
	}

	addMaskCpf(event) {
		this.formApi.setValue('cpfUsuario', addMaskCpf(event.target.value))
	}

	obterDadosCliente() {

		let cpf = this.formApi.getValue("cpfUsuario");
		
		cpf = removeMaskCpf(cpf);

		if (!cpf || cpf.length !== 11) {
			NotificationManager.warning('Informe um cpf válido!', 'Atenção');
		} else {
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

	}

	salvarPontuacao() {
		let data = this.formApi.getValues();

		let { descricao, valor } = data;
		let cpfUsuario = removeMaskCpf(data.cpfUsuario);

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
					this.limparDadosCliente();
					this.props.EsconderModalCadastroPontuacao();
				}
			})
	}

	limparDadosCliente() {
		this.formApi.reset();
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
															<Text maxLength="14" disabled={this.dadosClientePreenchidos()} onChange={(e) => this.addMaskCpf(e)} className="form-control" field="cpfUsuario" id="cpfUsuario" placeholder="Digite o CPF do cliente" />
														</div>
														{this.dadosClientePreenchidos() &&
															<div className="col-2 pl-0">
																<Button primary className="btn btn-md btn-primary" onClick={() => this.limparDadosCliente()}><i className="fa fa-refresh"></i></Button>
															</div>
														}

														{!this.dadosClientePreenchidos() &&
															<div className="col-2 pl-0">
																<Button primary className="btn btn-md btn-primary" onClick={() => this.obterDadosCliente()}><i className="fa fa-search"></i></Button>
															</div>
														}

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
															<Text className="form-control" type="number" field="valor" id="valor" placeholder="Digite o valor da compra" />
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
														<p><b>CPF:</b> {addMaskCpf(this.state.dadosCliente.cpf)}</p>
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