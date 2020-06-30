import React, { Component } from 'react';
import { Col, Card, CardBody, Button, CardHeader } from 'reactstrap';
import { connect } from 'react-redux';

import TabelaPontuacao from './TabelaPontuacao';
import ModalCadastroPontuacao from './ModalCadastroPontuacao';
import { ExibirModalCadastroPontuacao } from '../../redux/actions/Pontuacao/PontuacaoActions';

class Pontuacao extends Component {
	render() {
		return (
			<>
				<Col xs="12" lg="12">
					<Card>
						<CardHeader>
							<big id="titulo-header-componente">Lista de Pontuações</big>
							<Button className="float-right" color="success" onClick={() => this.props.ExibirModalCadastroPontuacao()}>Cadastrar Pontuação<i className="fa fa-plus ml-1"></i></Button>
						</CardHeader>
						<CardBody>
							<TabelaPontuacao />
						</CardBody>
					</Card>
				</Col>
				<ModalCadastroPontuacao />
			</>
		)
	}
}

export default connect(null, { ExibirModalCadastroPontuacao })(Pontuacao);