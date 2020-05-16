import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { NotificationManager, NotificationContainer } from 'react-notifications';
import { connect } from 'react-redux';
import { RealizarLoginEstabelecimento } from '../../../redux/actions/Login/LoginActions';

class LoginEstabelecimento extends Component {
    constructor(props){
        super(props);

        this.handleEnterPress = this.handleEnterPress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            usuario: '',
            senha: ''
        }
    }

    handleChangeUsuario(e){
        console.log(e.target.value);
        this.setState({
            ...this.state,
            usuario: e.target.value
        });
    }

    handleChangeSenha(e){
        console.log(e.target.value);
        this.setState({
            ...this.state,
            senha: e.target.value
        });
    }

    login(e){
        e.preventDefault();
        
        if(!this.state.usuario){
            NotificationManager.warning('Insira o usuário', 'Preencha os campos');
            return;
        }

        if(!this.state.senha){
            NotificationManager.warning('Insira a senha', 'Preencha os campos');
            return;
        }

        this.props.RealizarLoginEstabelecimento(this.state.usuario, this.state.senha)
        .then((res) => {
			if(res.type == "LOGIN_ESTABELECIMENTO_SUCCESS") {
				this.props.history.push('/Home');
			} else {
				this.props.history.push('/Login/Estabelecimento');
			}
		});

    }
    handleEnterPress(event) {
      if (event.key === 'Enter') {
          this.login();
      }
    }

    onSubmit(e){
      e.preventDefault()
      this.login(e);
    }
    render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={(e) => this.onSubmit(e)}>
                      <h1>Login</h1>
                      <p className="text-muted">Faça login em sua conta do estabelecimento</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input onChange={(e) => this.handleChangeUsuario(e)}type="text" placeholder="Usuário" autoComplete="username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input onChange={(e) => this.handleChangeSenha(e)} type="password" placeholder="Senha" autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button onClick={(e) => this.login(e)} color="primary" className="px-4">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Esqueci minha senha</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          	</Row>
		  	<div className="text-center">
				<Link to="/Login/Selecionar">
					<Button color="light" width='50' className="mt-3" active tabIndex={-1}>Voltar</Button>
				</Link>
			</div>
        </Container>
        <NotificationContainer />
      </div>
    );
  }
}

export default connect(null, { RealizarLoginEstabelecimento })(LoginEstabelecimento)
