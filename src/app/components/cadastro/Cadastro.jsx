import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
	Container,
	Card,
	CardBody,
	CardGroup,
	Button,
	Col,
	Row,
  } from 'reactstrap';
  
  
export default class Login extends Component {
    constructor(props){
        super(props);
	}
	
    render() {
    return (
		<div className="animated fadeIn">
			<div className="app flex-row align-items-center">
				<Container>
					<Row className="justify-content-center">
						<Col xs="8" sm="8">
							<CardGroup>
								<Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
									<CardBody className="text-center">
										<div>
										<h2>Cadastrar um novo estabelecimento</h2>
										<p>Para realizar o cadastro de um novo estabelecimento, clique no link abaixo:</p>

										<div className="text-center">
											<Link to="/Cadastro/Estabelecimento">
												<Button color="success" width='50' className="mt-3" active tabIndex={-1}>Realizar cadastro</Button>
											</Link>
										</div>
										</div>
									</CardBody>
								</Card>
								<Card className="text-white bg-info py-5 d-md-down-none" style={{ width: '44%' }}>
									<CardBody className="text-center">
										<div>
										<h2>Cadastrar um novo cliente</h2>
										<p>Para realizar o cadastro de um novo cliente clique no link abaixo:</p>

										<div className="text-center">
											<Link to="/Cadastro/Cliente">
												<Button color="success" width='50' className="mt-3" active tabIndex={-1}>Realizar cadastro</Button>
											</Link>
										</div>
										</div>
									</CardBody>
								</Card>
							</CardGroup>
						</Col>
					</Row>
					<div className="text-center">
						<Link to="/login">
							<Button color="light" width='50' className="mt-3" active tabIndex={-1}>Voltar</Button>
						</Link>
					</div>
				</Container>
			</div>
		</div>
    );
  }
}