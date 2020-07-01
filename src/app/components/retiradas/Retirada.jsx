import React, { Component } from 'react';
import { Col, Card, CardBody, Button, CardHeader } from 'reactstrap';
import { connect } from 'react-redux';

import TabelaRetirada from './TabelaRetirada';
import { ExibirModalCadastroPontuacao } from '../../redux/actions/Pontuacao/PontuacaoActions';

class Retirada extends Component {
	render() {
		return (
			<>
				<Col xs="12" lg="12">
					<Card>
						<CardHeader>
							<big id="titulo-header-componente">Retiradas</big>
						</CardHeader>
						<CardBody>
							<TabelaRetirada />
						</CardBody>
					</Card>
				</Col>
			</>
		)
	}
}

export default connect(null, { ExibirModalCadastroPontuacao })(Retirada);