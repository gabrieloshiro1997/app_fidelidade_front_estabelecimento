import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Card, CardHeader, CardBody } from 'reactstrap';
import { ESTABELECIMENTO_ID } from '../../../config/utils/LocalStorageKeys';
import { ObterDadosDashboard } from '../../redux/actions/Global/GlobalActions';
import { Pie, Bar, Doughnut } from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

class Relatorio extends Component {
	constructor(props) {
		super(props);
		let idEstabelecimento = localStorage.getItem(ESTABELECIMENTO_ID);
		this.setData = this.setData.bind(this);
		this.formatarObjetoMasculinoFeminino = this.formatarObjetoMasculinoFeminino.bind(this);
		this.formatarObjetoPontuacaoMensal = this.formatarObjetoPontuacaoMensal.bind(this);
		this.converterNumeroParaMes = this.converterNumeroParaMes.bind(this);
		this.props.ObterDadosDashboard(idEstabelecimento)
			.then(() => {
				this.setData();
			});

		this.state = {
			dadosUsuarioPorSexo: {},
			dadosPontuacaMensal: {},
			dadosRecompensasRetiradas: {}
		}
	}

	formatarObjetoMasculinoFeminino(dadosSexoMasculino = undefined, dadosSexoFeminino = undefined) {
		if (!dadosSexoMasculino && dadosSexoFeminino) {
			return {
				labels: [
					'Homem',
					'Mulher'
				],
				datasets: [
					{
						data: [0, dadosSexoFeminino.pontos],
						backgroundColor: [
							'#36A2EB',
							'#FF6384'
						],
						hoverBackgroundColor: [
							'#36A2EB',
							'#FF6384'
						],
					}
				],
				exibirGraficoSexoPontos: true
			}
		} else if (!dadosSexoFeminino && dadosSexoMasculino) {
			return {
				labels: [
					'Homem',
					'Mulher'
				],
				datasets: [
					{
						data: [dadosSexoMasculino.pontos, 0],
						backgroundColor: [
							'#36A2EB',
							'#FF6384'
						],
						hoverBackgroundColor: [
							'#36A2EB',
							'#FF6384'
						],
					}
				],
				exibirGraficoSexoPontos: true
			}
		} else if (!dadosSexoMasculino && !dadosSexoFeminino) {
			return {
				labels: [
					'Homem',
					'Mulher'
				],
				datasets: [
					{
						data: [],
						backgroundColor: [
						],
						hoverBackgroundColor: [
						],
					}
				],
				exibirGraficoSexoPontos: false
			}
		} else {
			return {
				labels: [
					'Homem',
					'Mulher'
				],
				datasets: [
					{
						data: [dadosSexoMasculino.pontos, dadosSexoFeminino.pontos],
						backgroundColor: [
							'#36A2EB',
							'#FF6384'
						],
						hoverBackgroundColor: [
							'#36A2EB',
							'#FF6384'
						],
					}
				],
				exibirGraficoSexoPontos: true
			}
		}
	}

	converterNumeroParaMes(numero) {
		switch (numero) {
			case 1:
				return "Janeiro";
			case 2:
				return "Fevereiro";
			case 3:
				return "Março";
			case 4:
				return "Abril";
			case 5:
				return "Maio";
			case 6:
				return "Junho";
			case 7:
				return "Julho";
			case 8:
				return "Agosto";
			case 9:
				return "Setembro";
			case 10:
				return "Outubro";
			case 11:
				return "Novembro";
			case 12:
				return "Dezembro";
			default:
				break;
		}
	}

	formatarObjetoPontuacaoMensal(pontosMensais = undefined) {
		let meses = [];
		let pontuacoes = [];

		if (!pontosMensais || pontosMensais.length === 0) {
			return {
				labels: [],
				datasets: [
					{
						label: '',
						backgroundColor: 'rgba(255,99,132,0.2)',
						borderColor: 'rgba(255,99,132,1)',
						borderWidth: 1,
						hoverBackgroundColor: 'rgba(255,99,132,0.4)',
						hoverBorderColor: 'rgba(255,99,132,1)',
						data: [],
					},
				],
				exibirGraficoPontuacaoMensal: false
			};
		}

		for (const pontuacao of pontosMensais) {
			meses.push(this.converterNumeroParaMes(pontuacao.mes));
			pontuacoes.push(pontuacao.valor);
		}

		return {
			labels: meses,
			datasets: [
				{
					label: 'Pontuação',
					backgroundColor: 'rgba(255,99,132,0.2)',
					borderColor: 'rgba(255,99,132,1)',
					borderWidth: 1,
					hoverBackgroundColor: 'rgba(255,99,132,0.4)',
					hoverBorderColor: 'rgba(255,99,132,1)',
					data: pontuacoes,
				},
			],
			options: {
				tooltips: {
					enabled: false,
					custom: CustomTooltips
				},
				maintainAspectRatio: false
			},
			exibirGraficoPontuacaoMensal: true
		};
	}

	formatarObjetoRecompensasRetiradas(recompensasRetiradas) {

		let pontos = [];
		let produtos = [];

		if (!recompensasRetiradas || recompensasRetiradas.length === 0) {
			return {
				labels: [],
				datasets: [
					{
						data: [],
						backgroundColor: [
							'#FF6384',
							'#36A2EB',
							'#FFCE56',
						],
						hoverBackgroundColor: [
							'#FF6384',
							'#36A2EB',
							'#FFCE56',
						],
					}
				],
				exibirGraficoRecompensasRetiradas: false
			}
		}

		for (const recompensa of recompensasRetiradas) {
			produtos.push(recompensa.produto);
			pontos.push(recompensa.pontuacao);
		}

		return {
			labels: produtos,
			datasets: [
				{
					data: pontos,
					backgroundColor: [
						'#FF6384',
						'#36A2EB',
						'#FFCE56',
						'#e6ac00',
						'#800080',
						'#e60000',
						'#006600',
						'#99ff33'

					],
					hoverBackgroundColor: [
						'#FF6384',
						'#36A2EB',
						'#FFCE56',
						'#e6ac00',
						'#800080',
						'#e60000',
						'#006600',
						'#99ff33'
					],
				}
			],
			exibirGraficoRecompensasRetiradas: true
		}




	}
	setData() {
		let dadosDashboard = this.props.dadosDashboard;

		let objetoRetornoSexoPontos;
		let objetoRetornoPontuacaoMensal;
		let objetoRetornoRecompensasRetiradas;

		let dadosSexoFeminino = dadosDashboard.sexoPontos.filter((item) => item.sexo === "F");
		let dadosSexoMasculino = dadosDashboard.sexoPontos.filter((item) => item.sexo === "M");

		let pontosMensais = dadosDashboard.pontosMensais;

		let recompensasRetiradas = dadosDashboard.recompensasRetiradas;

		objetoRetornoSexoPontos = this.formatarObjetoMasculinoFeminino(dadosSexoMasculino[0], dadosSexoFeminino[0]);

		objetoRetornoPontuacaoMensal = this.formatarObjetoPontuacaoMensal(pontosMensais);

		objetoRetornoRecompensasRetiradas = this.formatarObjetoRecompensasRetiradas(recompensasRetiradas);

		this.setState({
			dadosUsuarioPorSexo: objetoRetornoSexoPontos,
			dadosPontuacaMensal: objetoRetornoPontuacaoMensal,
			dadosRecompensasRetiradas: objetoRetornoRecompensasRetiradas
		});

	}
	render() {
		return (
			<div className="animated fadeIn">
				<Row className="col-12 col-sm-12 col-md-12 col-lg-12">
					<Card className="col-12 p-0">
						<CardHeader>
							<h5>
								Pontuação dos usuário de acordo com o sexo
							</h5>
						</CardHeader>
						<CardBody>
							{this.state.dadosUsuarioPorSexo.exibirGraficoSexoPontos &&
								<div className="chart-wrapper">
									<Pie data={this.state.dadosUsuarioPorSexo} />
								</div>
							}

							{!this.state.dadosUsuarioPorSexo.exibirGraficoSexoPontos &&
								<div className="chart-wrapper">
									<label>Você não tem nenhum usuário vinculado ao seu estabelecimento</label>
								</div>
							}

						</CardBody>
					</Card>
				</Row>
				<Row className="col-12 col-sm-12 col-md-12 col-lg-12">
					<Card className="col-12 p-0">
						<CardHeader>
							<h5>
								Pontuações registradas por mês
							</h5>
						</CardHeader>
						<CardBody>
							{this.state.dadosPontuacaMensal.exibirGraficoPontuacaoMensal &&
								<div className="chart-wrapper">
									<Bar data={this.state.dadosPontuacaMensal} options={this.state.dadosPontuacaMensal.exibirGraficoPontuacaoMensal ? this.state.dadosPontuacaMensal.options : {}} />
								</div>
							}

							{!this.state.dadosPontuacaMensal.exibirGraficoPontuacaoMensal &&
								<div className="chart-wrapper">
									<label>Você não tem nenhuma pontuação registrada</label>
								</div>
							}
						</CardBody>
					</Card>
				</Row>
				<Row className="col-12 col-sm-12 col-md-12 col-lg-12">
					<Card className="col-12 p-0">
						<CardHeader>
							<h5>
								Pontuação por recompensas resgatadas
							</h5>
						</CardHeader>
						<CardBody>
							{this.state.dadosRecompensasRetiradas.exibirGraficoRecompensasRetiradas &&
								<div className="chart-wrapper">
									<Doughnut data={this.state.dadosRecompensasRetiradas} />
								</div>
							}

							{!this.state.dadosRecompensasRetiradas.exibirGraficoRecompensasRetiradas &&
								<div className="chart-wrapper">
									<label>Você não tem nenhuma recompensa resgatada</label>
								</div>
							}
						</CardBody>
					</Card>
				</Row>
			</div>
		)
	}
}

const MapStateToProps = (state) => {
	return {
		dadosDashboard: state.GlobalReducer.dadosDashboard
	}
}
export default connect(MapStateToProps, { ObterDadosDashboard })(Relatorio)