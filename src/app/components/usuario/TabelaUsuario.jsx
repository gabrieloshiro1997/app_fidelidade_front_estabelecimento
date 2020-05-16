import React, { Component } from 'react';
import { 
    Button, 
    Table 
} from 'reactstrap';
import { connect } from 'react-redux';
import { ObterUsuarios, ObterUsuario, ExibirModalFormularioUsuario, ExibirModalExcluirUsuario } from '../../redux/actions/Usuario/UsuarioActions';

class TabelaUsuario extends Component {
    constructor(props){
        super(props);
        this.props.ObterUsuarios();
        this.excluirUsuario = this.excluirUsuario.bind(this);
        this.editarUsuario = this.editarUsuario.bind(this); 
    }

    excluirUsuario(id) {
        this.props.ObterUsuario(id)
        .then(() => this.props.ExibirModalExcluirUsuario());
    }

    editarUsuario(id) {
        this.props.ObterUsuario(id)
        .then(() => this.props.ExibirModalFormularioUsuario());
    }
    render(){
        return(
            <Table responsive>
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>E-mail</th>
                    <th>Ações </th>
                </tr>
                </thead>
                <tbody>
                    {
                        this.props.usuarios.map((usuario, key) => (
                            <tr>
                                <td>{usuario.nome}</td>
                                <td>{usuario.cpf}</td>
                                <td>{usuario.email}</td>
                                <td>
                                    <Button className="fa fa-edit btn-sm mx-1 bg-primary" onClick={() => this.editarUsuario(usuario.id)}></Button>
                                    <Button className="fa fa-trash btn-sm mx-1 bg-danger" onClick={() => this.excluirUsuario(usuario.id)}></Button>
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
        usuarios: state.UsuarioReducer.usuarios
    }
}
export default connect(MapStateToProps, 
    {   
        ObterUsuarios, 
        ObterUsuario,
        ExibirModalFormularioUsuario,
        ExibirModalExcluirUsuario 
    })(TabelaUsuario);