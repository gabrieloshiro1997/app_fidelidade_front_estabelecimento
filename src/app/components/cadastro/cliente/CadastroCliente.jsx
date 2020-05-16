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
import { CadastrarCliente } from '../../../redux/actions/Usuario/UsuarioActions';

class CadastroCliente extends Component {
    constructor(props){
		super(props);
		this.setFormApi = this.setFormApi.bind(this);
	}

	setFormApi(formApi) {
		this.formApi = formApi;
	}

	salvarCliente() {
      let data = this.formApi.getValues();

      let nome = data.nome; 
      let cpf = data.cpf; 
	  let email = data.email; 
	  let acessoUsuario = TipoAcessoUsuarioEnum.Cliente;

      if(!nome || !cpf || !email){
        NotificationManager.warning('Preencha todos campos!', 'Atenção');
        return;
      }

      let usuario = { 
        nome,
        cpf,
		email,
		acessoUsuario
      };

		this.props.CadastrarCliente(usuario)
			.then((res) => {
				if(res.type != "CADASTRAR_CLIENTE_FAIL") {
					this.props.history.push('/Cadastro/Cliente/Sucesso');
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
									<strong>Cadastrar Cliente</strong>
								</CardHeader>
								<CardBody>
									<Form getApi={this.setFormApi} initialValues={this.props.usuario}>
										<Row>
											<Col xs="12">
												<FormGroup>
													<Label htmlFor="nome">Nome</Label>
													<Text className="form-control" field="nome" id="nome" placeholder="Digite seu nome" />
												</FormGroup>
											</Col>
										</Row>
										<Row>
											<Col xs="12">
												<FormGroup>
													<Label htmlFor="cpf">CPF</Label>
													<Text className="form-control" field="cpf" id="cpf" placeholder="Digite seu CPF" />
												</FormGroup>
											</Col>
										</Row>
										<Row>
											<Col xs="12">
												<FormGroup>
													<Label htmlFor="email">E-mail</Label>
													<Text className="form-control" field="email" id="email" placeholder="Digite seu e-mail" />
												</FormGroup>
											</Col>
										</Row>
									</Form>
								</CardBody>
								<CardFooter>
									<div className="text-right">
										<Button  onClick={() => this.salvarCliente()} color="primary" width='50' className="mt-3" active tabIndex={-1}>Realizar cadastro</Button>
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

export default connect(null, { CadastrarCliente })(CadastroCliente);
