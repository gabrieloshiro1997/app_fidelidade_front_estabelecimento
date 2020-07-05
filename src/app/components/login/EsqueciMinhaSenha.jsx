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
import { SolocitarRedefinicaoSenha } from '../../redux/actions/Login/LoginActions';

import './css/Login.css';

class EsqueciMinhaSenha extends Component {
	constructor(props) {
		super(props);
		this.setFormApi = this.setFormApi.bind(this);
	}

	setFormApi(formApi) {
		this.formApi = formApi;
	}

	enviarEmail() {
		let { email } = this.formApi.getValues();


		if (!email) {
			NotificationManager.warning('Preencha o campo de e-mail!', 'Atenção');
			return;
		}

		this.props.SolocitarRedefinicaoSenha(email)
			.then((res) => {
				if (res.type === "SOLICITAR_REDEFINICAO_SENHA_SUCCESS") {
					NotificationManager.success(res.payload.data.mensagem, 'Sucesso');
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
										<strong>Insira seu e-mail para recuperar a senha</strong>
									</CardHeader>
									<CardBody>
										<Form getApi={this.setFormApi}>
											<Row>
												<Col xs="12">
													<FormGroup>
														<Label htmlFor="email">E-mail</Label>
														<Text type="email" className="form-control" field="email" id="email" placeholder="Digite seu e-mail" />
													</FormGroup>
												</Col>
											</Row>
										</Form>
									</CardBody>
									<CardFooter>
										<div className="text-right">
											<Button color="primary" width='50' className="mt-3" active tabIndex={-1} onClick={() => this.enviarEmail()}>Enviar</Button>
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

export default connect(null, { SolocitarRedefinicaoSenha })(EsqueciMinhaSenha);
