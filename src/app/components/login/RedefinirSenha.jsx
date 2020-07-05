import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
	Container,
	Card,
	CardBody,
	CardHeader,
	FormGroup,
	Label,
	Col,
	Row,
	Button,
	CardFooter,
} from 'reactstrap';
import { Form, Text } from 'informed';
import { NotificationManager } from 'react-notifications';
import { ResetarSenha } from '../../redux/actions/Login/LoginActions';
import './css/Login.css';

class RedefinirSenha extends Component {
	constructor(props) {
		super(props);
		this.setFormApi = this.setFormApi.bind(this);
		this.enviar = this.enviar.bind(this);
		this.state = {
			email: this.props.match.params.email,
			token: this.props.match.params.token
		}
	}

	setFormApi(formApi) {
		this.formApi = formApi;
	}

	enviar() {
		let token = this.state.token;

		let { email, senha, confirmeSenha } = this.formApi.getValues();

		if (!email || !senha || !confirmeSenha) {
			NotificationManager.warning('Preencha todos campos!', 'Atenção');
			return;
		}

		if (senha !== confirmeSenha) {
			NotificationManager.warning('Preencha os campos das senhas com os mesmos valores!', 'Atenção');
			return;
		}

		this.props.ResetarSenha(email, senha, token)
			.then((res) => {
				if (res.type !== "RESETAR_SENHA_FAIL") {
					NotificationManager.success('Sua senha foi alterada com sucesso!', 'Sucesso');
					this.props.history.push('/Login');
				}
			}
			)
	}

	render() {
		return (
			<div className="animated fadeIn">
				<div className="app flex-row align-items-center bg-image">
					<Container>
						<Row className="justify-content-center">
							<Col xs="8" sm="8">
								<Card>
									<CardHeader>
										<strong>Informe seu e-mail e confirme a senha</strong>
									</CardHeader>
									<CardBody>
										<Form getApi={this.setFormApi} initialValues={this.state}>
											<Row>
												<Col xs="12">
													<FormGroup>
														<Label htmlFor="email">E-mail</Label>
														<Text disabled type="email" className="form-control" field="email" id="email" placeholder="Digite seu e-mail" />
													</FormGroup>
												</Col>
											</Row>
											<Row>
												<Col xs="12">
													<FormGroup>
														<Label htmlFor="senha">Senha</Label>
														<Text type="password" className="form-control" field="senha" id="senha" placeholder="Digite sua nova senha" />
													</FormGroup>
												</Col>
											</Row>
											<Row>
												<Col xs="12">
													<FormGroup>
														<Label htmlFor="confirmeSenha">Confirme a senha</Label>
														<Text type="password" className="form-control" field="confirmeSenha" id="confirmeSenha" placeholder="Confirme sua nova senha" />
													</FormGroup>
												</Col>
											</Row>
										</Form>
									</CardBody>
									<CardFooter>
										<div className="text-right">
											<Button color="primary" width='50' className="mt-3" active tabIndex={-1} onClick={() => this.enviar()}>Enviar</Button>
										</div>
									</CardFooter>
								</Card>
							</Col>
						</Row>
						<div className="text-center">
							<Link to="/Login">
								<Button color="info" width='50' className="mt-3" active tabIndex={-1}>Voltar</Button>
							</Link>
						</div>
					</Container>
				</div>
			</div>
		);
	}
}

export default connect(null, { ResetarSenha })(RedefinirSenha);
