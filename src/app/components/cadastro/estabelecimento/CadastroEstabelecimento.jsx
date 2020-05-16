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

import { NotificationManager } from 'react-notifications'

import TipoAcessoUsuarioEnum from '../../../utils/TipoAcessoUsuarioEnum';
import { CadastrarEstabelecimento } from '../../../redux/actions/Estabelecimento/EstabelecimentoActions';

class CadastroEstabelecimento extends Component {
    constructor(props){
		super(props);
		this.setFormApi = this.setFormApi.bind(this);
	}

	setFormApi(formApi) {
		this.formApi = formApi;
	}

	salvarEstabelecimento() {
		let data = this.formApi.getValues();

		let nomeFantasia = data.nomeFantasia; 
		let cnpj = data.cnpj; 
		let email = data.email; 
		//   let acessoUsuario = TipoAcessoUsuarioEnum.Estabelecimento;

		if(!nomeFantasia || !cnpj || !email){
			NotificationManager.warning('Preencha todos campos!', 'Atenção');
			return;
		}

		let estabelecimento = { 
			nomeFantasia,
			cnpj,
			email,
			// acessoUsuario
		};

		this.props.CadastrarEstabelecimento(estabelecimento)
			.then((res) => {
				if(res.type != "CADASTRAR_ESTABELECIMENTO_FAIL") {
					this.props.history.push('/Cadastro/Estabelecimento/Sucesso');
				}
			}
		)
	}
	
    render() {
    return (
		<div className="animated fadeIn">
			<div className="app flex-row align-items-center">
				<Container>
					<Row className="justify-content-center">
						<Col xs="8" sm="8">
							<Card>
								<CardHeader>
									<strong>Cadastrar Estabelecimento</strong>
								</CardHeader>
								<CardBody>
									<Form getApi={this.setFormApi} initialValues={this.props.estabelecimento}>
										<Row>
											<Col xs="12">
												<FormGroup>
													<Label htmlFor="nome">Nome Fantasia</Label>
													<Text className="form-control" field="nomeFantasia" id="nomeFantasia" placeholder="Digite o nome fantasia da sua empresa" />
												</FormGroup>
											</Col>
										</Row>
										<Row>
											<Col xs="12">
												<FormGroup>
													<Label htmlFor="cnpj">CNPJ</Label>
													<Text className="form-control" field="cnpj" id="cnpj" placeholder="Digite o CNPJ da sua empresa" />
												</FormGroup>
											</Col>
										</Row>
										<Row>
											<Col xs="12">
												<FormGroup>
													<Label htmlFor="email">E-mail</Label>
													<Text className="form-control" field="email" id="email" placeholder="Digite o email da sua empresa" />
												</FormGroup>
											</Col>
										</Row>
									</Form>
								</CardBody>
								<CardFooter>
									<div className="text-right">
										<Button  onClick={() => this.salvarEstabelecimento()} color="primary" width='50' className="mt-3" active tabIndex={-1}>Realizar cadastro</Button>
									</div>
								</CardFooter>
							</Card>
						</Col>
					</Row>
					<div className="text-center">
						<Link to="/Cadastro">
							<Button color="light" width='50' className="mt-3" active tabIndex={-1}>Voltar</Button>
						</Link>
					</div>
				</Container>
			</div>
		</div>
    );
  }
}

export default connect(null, { CadastrarEstabelecimento })(CadastroEstabelecimento);
