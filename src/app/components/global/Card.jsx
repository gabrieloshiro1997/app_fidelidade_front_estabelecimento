import React, { Component } from 'react';
import { 
	Row,
	Col,
	Card,
	CardBody,
	ButtonGroup

} from 'reactstrap';
export default class CardHome extends Component {
    render(){
        return(
			<Col xs="12" sm="6" lg="3">
				<Card className={"text-white bg-" + this.props.classeCor}>
				<CardBody className="pb-0">
					<ButtonGroup className="float-right">
					<i class={"nav-icon " + this.props.icone}></i>
					</ButtonGroup><div className="text-value">{this.props.quantidade}</div>
					<h5>{this.props.tipoCard}</h5>
				</CardBody>
				<div className="chart-wrapper mx-3" style={{ height: '70px' }}>
				</div>
				</Card>
			</Col>

        )
    }
}