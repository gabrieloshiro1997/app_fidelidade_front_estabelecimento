import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { NotificationManager, NotificationContainer } from 'react-notifications';
import { connect } from 'react-redux';
import { LoginUsuario } from '../../redux/actions/Login/LoginActions';

class Login extends Component {
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

        this.props.LoginUsuario(this.state.usuario, this.state.senha)
        .then(() => this.props.history.push('/Home'));

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
            <Col md="10">
              <CardGroup>
                <Card className="text-white bg-info py-5 d-md-down-none" style={{ width: '44%' }}>
				<CardBody className="text-center">
                    <div>
                      <h2>Login</h2>
                      <p>Para efetuar o login, clique no link abaixo:</p>

					  <div className="text-center">
						<Link to="/Login/Selecionar">
							<Button color="primary" width='50' className="mt-3" active tabIndex={-1}>Continuar com o Login</Button>
						</Link>
					  </div>
                    </div>
                  </CardBody>
                </Card>
				<Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Criar uma nova conta</h2>
                      <p>Para efetuar o cadastro, clique no link abaixo:</p>

					  <div className="text-center">
						<Link to="/Cadastro">
							<Button color="primary" width='50' className="mt-3" active tabIndex={-1}>Continuar com o cadastro</Button>
						</Link>
					  </div>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
        <NotificationContainer />
      </div>
    );
  }
}

export default connect(null, { LoginUsuario })(Login)
