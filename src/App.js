import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { NotificationContainer } from 'react-notifications';
import Loading from 'react-fullscreen-loading';

import './App.scss';
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./app/components/login/Login'));
const LoginAdmin = React.lazy(() => import('./app/components/login/admin/LoginAdmin'));
const LoginSelecionar = React.lazy(() => import('./app/components/login/LoginSelecionar'));
const Cadastro = React.lazy(() => import('./app/components/cadastro/Cadastro'));

const LoginEstabelecimento = React.lazy(() => import('./app/components/login/estabelecimento/LoginEstabelecimento'));
const CadastroEstabelecimento = React.lazy(() => import('./app/components/cadastro/estabelecimento/CadastroEstabelecimento'));
const CadastroEstabelecimentoSucesso = React.lazy(() => import('./app/components/cadastro/estabelecimento/CadastroEstabelecimentoSucesso'));

const LoginCliente = React.lazy(() => import('./app/components/login/cliente/LoginCliente'));
const CadastroCliente = React.lazy(() => import('./app/components/cadastro/cliente/CadastroCliente'));
const CadastroClienteSucesso = React.lazy(() => import('./app/components/cadastro/cliente/CadastroClienteSucesso'));

const MapStateToProps = state => {    
  return {
      ...state.GlobalReducer
  }
};

const Loader = connect(MapStateToProps)((props) => (
  <Loading 
    loading={props.carregando} 
    background="rgba(4, 4, 4, 0.58)" 
    loaderColor="#FFFFFF" />
));

const App = () => (
  <BrowserRouter>
    <React.Suspense fallback={loading()}>
      <Switch>
		<Route exact path="/Login" name="Login" render={props => <Login {...props}/>} />
		<Route exact path="/Login/Admin" name="Login Admin" render={props => <LoginAdmin {...props}/>} />
		<Route exact path="/Login/Selecionar" name="Selecione o tipo da sua conta" render={props => <LoginSelecionar {...props}/>} />
        <Route exact path="/Login/Estabelecimento" name="Login Estabelecimento" render={props => <LoginEstabelecimento {...props}/>} />
        <Route exact path="/Login/Cliente" name="Login" render={props => <LoginCliente {...props}/>} />
        
		<Route exact path="/Cadastro" name="Cadastro" render={props => <Cadastro {...props}/>} />

        <Route exact path="/Cadastro/Estabelecimento" name="Cadastro de estabelecimento" render={props => <CadastroEstabelecimento {...props}/>} />
        <Route exact path="/Cadastro/Cliente" name="Cadastro de Cliente" render={props => <CadastroCliente {...props}/>} />
        
		<Route exact path="/Cadastro/Estabelecimento/Sucesso" name="Cadastro do estabelecimento efetuado com sucesso" render={props => <CadastroEstabelecimentoSucesso {...props}/>} />
        <Route exact path="/Cadastro/Cliente/Sucesso" name="Cadastro do cliente efetuado com sucesso" render={props => <CadastroClienteSucesso {...props}/>} />
        
		<Route path="/" render={props => <DefaultLayout {...props}/>} />
        <Loader />  
      </Switch>
      <Loader />
      <NotificationContainer />
    </React.Suspense>
  </BrowserRouter>
)

export default App;
