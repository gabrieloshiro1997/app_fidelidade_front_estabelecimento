import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'reactstrap';
import { ObterRecompensas, ObterRecompensa, ExibirModalFormularioRecompensa, ExibirModalExcluirRecompensa } from '../../redux/actions/Recompensa/RecompensaActions';

class TabelaRecompensa extends Component {
	constructor(props) {
		super(props);
		this.editarRecompensa = this.editarRecompensa.bind(this);
		this.excluirRecompensa = this.excluirRecompensa.bind(this);
		this.formatarData = this.formatarData.bind(this);
		this.props.ObterRecompensas();
	}
	editarRecompensa(idRecompensa) {
		this.props.ObterRecompensa(idRecompensa)
        .then(() => this.props.ExibirModalFormularioRecompensa());
	}

	excluirRecompensa(idRecompensa) {
		this.props.ObterRecompensa(idRecompensa)
        .then(() => this.props.ExibirModalExcluirRecompensa());
	}

	formatarData(data) {
		return new Date(data).getDay() + '/' + new Date(data).getMonth() + '/' + new Date(data).getFullYear(); 
	}
	render() {
		return (
			<Table responsive>
				<thead>
					<tr className="text-center">
						<th className="text-left">Descricao</th>
						<th>Pontos</th>
						<th>Preço</th>
						<th>Data de validade</th>
						<th>Status</th>
						<th>Ações</th>
					</tr>
				</thead>
				<tbody>
					{
						this.props.recompensas.map((recompensa, index) => (
							<tr className="text-center" key={index}>
								<td className="text-left">{recompensa.descricao}</td>
								<td>{recompensa.pontos}</td>
								<td>{recompensa.preco}</td>
								<td>{this.formatarData(recompensa.data_validade)}</td>
								<td>{recompensa.status === 0 ? 'Inativo' : 'Ativo'}</td>
								<td>
									<Button className="fa fa-edit btn-sm mx-1 bg-primary" onClick={() => this.editarRecompensa(recompensa.id)} />
									<Button className="fa fa-edit btn-sm mx-1 bg-danger" onClick={() => this.excluirRecompensa(recompensa.id)} />
								</td>
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
		recompensas: state.RecompensaReducer.recompensas
	}
}
export default connect(MapStateToProps, { ObterRecompensas, ObterRecompensa, ExibirModalFormularioRecompensa, ExibirModalExcluirRecompensa })(TabelaRecompensa);