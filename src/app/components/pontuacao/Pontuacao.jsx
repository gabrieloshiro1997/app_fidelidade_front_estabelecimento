import React, { Component } from 'react';
import { Col, Card, CardBody, CardHeader } from 'reactstrap';
import FormularioPontuacao from './FormularioPontuacao';
import TabelaPontuacao from './TabelaPontuacao';

export default class Pontuacao extends Component {
	render() {
		return (
			<>
				<Col xs="12" lg="12">
					<Card>
						<FormularioPontuacao />
					</Card>
					<Card>
						<CardBody>
							<TabelaPontuacao />
						</CardBody>
					</Card>
				</Col>
			</>
		)
	}
}