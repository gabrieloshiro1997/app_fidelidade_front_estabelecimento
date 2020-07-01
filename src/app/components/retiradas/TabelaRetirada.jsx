import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'reactstrap';
import {
	ObterHistoricoRetirada
} from '../../redux/actions/Retirada/RetiradaActions';
import { ESTABELECIMENTO_ID } from '../../../config/utils/LocalStorageKeys';

class TabelaRetirada extends Component {
	constructor(props) {
		super(props);
		this.state ={
			idEstabelecimento: localStorage.getItem(ESTABELECIMENTO_ID)
		} 
		this.props.ObterHistoricoRetirada(this.state.idEstabelecimento);
		this.formatarData = this.formatarData.bind(this);
	}

	formatarData(data) {
		let dia = new Date(data).getDate();
		let mes = new Date(data).getMonth() + 1;
		let ano = new Date(data).getFullYear();

		let dataFormatada = dia + '/' + mes + '/' + ano;
		
		return dataFormatada;
	}

	render() {
		return (
			<Table responsive>
				<thead>
					<tr className="text-center">
						<th className="text-left">Nome</th>
						<th className="text-left">CPF</th>
						<th className="text-left">Descrição</th>
						<th className="text-left">Pontos gastos</th>
						<th className="text-left">Data da retirada</th>
						<th><Button className="float-right btn-sm" color="primary" onClick={() => this.props.ObterHistoricoRetirada(this.state.idEstabelecimento)}><i className="fa fa-refresh"></i></Button></th>
					</tr>
				</thead>
				<tbody>
					{
						this.props.historicoRetirada.map((retirada, index) => (
							<tr key={index}>
								<td>{retirada.nome}</td>
								<td>{retirada.cpf}</td>
								<td>{retirada.descricao}</td>
								<td>{retirada.pontos_gastos}</td>
								<td>{this.formatarData(retirada.data_retirada)}</td>
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
		historicoRetirada: state.RetiradaReducer.historicoRetirada
	}
}
export default connect(MapStateToProps, {
	ObterHistoricoRetirada
})(TabelaRetirada);