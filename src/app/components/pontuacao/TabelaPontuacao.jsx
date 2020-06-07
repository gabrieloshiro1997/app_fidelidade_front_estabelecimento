import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'reactstrap';
import {
	ObterPontuacoes
} from '../../redux/actions/Pontuacao/PontuacaoActions';

class TabelaPontuacao extends Component {
	constructor(props) {
		super(props);

		this.props.ObterPontuacoes();
	}

	render() {
		return (
			<Table responsive>
				<thead>
					<tr className="text-center">
						<th className="text-left">Nome</th>
						<th className="text-left">CPF</th>
						<th className="text-left">Descrição</th>
						<th className="text-left">Pontuação</th>
					</tr>
				</thead>
				<tbody>
					{
						this.props.pontuacoes.map((pontuacao, index) => (
							<tr key={index}>
								<td>{pontuacao.nome}</td>
								<td>{pontuacao.cpf}</td>
								<td>{pontuacao.descricao}</td>
								<td>{pontuacao.valor}</td>
							</tr>
						))
					}
				</tbody>
			</Table>
		)
	}
}

const MapStateToProps = (state) => {
	return {
		pontuacoes: state.PontuacaoReducer.pontuacoes
	}
}
export default connect(MapStateToProps, {
	ObterPontuacoes
})(TabelaPontuacao);