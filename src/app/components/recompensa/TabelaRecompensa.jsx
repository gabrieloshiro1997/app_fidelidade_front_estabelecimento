import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'reactstrap';
import {
	ObterRecompensas,
	ObterRecompensa,
	ExibirModalFormularioRecompensa,
	ExibirModalExcluirRecompensa,
	ExibirModalAlterarStatusRecompensa,
	LimparConsultaRecompensas
} from '../../redux/actions/Recompensa/RecompensaActions';
import './css/TabelaRecompensa.css';
import { addMaskData } from '../../utils/helper/helper';

class TabelaRecompensa extends Component {
	constructor(props) {
		super(props);
		this.editarRecompensa = this.editarRecompensa.bind(this);
		this.excluirRecompensa = this.excluirRecompensa.bind(this);
		this.alterarStatusRecompensa = this.alterarStatusRecompensa.bind(this);

		this.props.ObterRecompensas();
	}

	componentWillUnmount() {
		this.props.LimparConsultaRecompensas();
	}
	editarRecompensa(idRecompensa) {
		this.props.ObterRecompensa(idRecompensa)
			.then(() => this.props.ExibirModalFormularioRecompensa());
	}

	excluirRecompensa(idRecompensa) {
		this.props.ObterRecompensa(idRecompensa)
			.then(() => this.props.ExibirModalExcluirRecompensa());
	}

	alterarStatusRecompensa(idRecompensa) {
		this.props.ObterRecompensa(idRecompensa)
			.then(() => this.props.ExibirModalAlterarStatusRecompensa());
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
							<tr className={recompensa.status === 1 ? "ativo" : "inativo"} key={index}>
								<td className="text-left">{recompensa.descricao}</td>
								<td>{recompensa.pontos}</td>
								<td>{recompensa.preco}</td>
								<td>{addMaskData(recompensa.data_validade)}</td>
								<td>{recompensa.status === 0 ? 'Inativo' : 'Ativo'}</td>
								<td>
									<Button className="fa fa-edit btn-sm mx-1 bg-primary" data-toggle="tooltip" data-placement="bottom" title="Editar" onClick={() => this.editarRecompensa(recompensa.id)} />
									<Button className="fa fa-retweet btn-sm mx-1 bg-warning" data-toggle="tooltip" data-placement="bottom" title="Alterar status" onClick={() => this.alterarStatusRecompensa(recompensa.id)} />
									{/* <Button className="fa fa-trash btn-sm mx-1 bg-danger" data-toggle="tooltip" data-placement="bottom" title="Excluir" onClick={() => this.excluirRecompensa(recompensa.id)} /> */}
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
export default connect(MapStateToProps, {
	ObterRecompensas,
	ObterRecompensa,
	ExibirModalFormularioRecompensa, 
	ExibirModalExcluirRecompensa, 
	ExibirModalAlterarStatusRecompensa,
	LimparConsultaRecompensas
})(TabelaRecompensa);