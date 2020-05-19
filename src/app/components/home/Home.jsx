import React, { Component } from 'react';
import { Row } from 'reactstrap';
import { connect } from 'react-redux';
import { ObterRecompensas } from '../../redux/actions/Recompensa/RecompensaActions';
import CardHome from '../global/Card';

class Home extends Component {
	constructor(props) {
		super(props);
		this.props.ObterRecompensas();
	}
    render(){
        return(
			<div className="animated fadeIn">
				<Row>
					<CardHome classeCor="danger" quantidade={this.props.recompensas.length} tipoCard="Recompensas Cadastradas" icone="icon-basket" />
				</Row>
            </div>
        )
    }
}

const MapStateToProps = (state) => {
	return {
		recompensas: state.RecompensaReducer.recompensas
	}
}

export default connect(MapStateToProps, { ObterRecompensas })(Home)