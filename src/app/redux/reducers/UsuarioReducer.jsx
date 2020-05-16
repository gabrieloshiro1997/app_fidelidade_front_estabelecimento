import { 
    OBTER_USUARIOS_SUCCESS,
    OBTER_USUARIO_SUCCESS,
    CADASTRAR_USUARIO_SUCCESS,
    ATUALIZAR_USUARIO_SUCCESS,
    EXCLUIR_USUARIO_SUCCESS,
    EXIBIR_MODAL_FORMULARIO_USUARIO,
    ESCONDER_MODAL_FORMULARIO_USUARIO,
    EXIBIR_MODAL_EXCLUIR_USUARIO,
	ESCONDER_MODAL_EXCLUIR_USUARIO,
	CADASTRAR_CLIENTE_SUCCESS
} from '../actions/Usuario/UsuarioActionTypes';

import { NotificationManager } from 'react-notifications'

const initialState = {
    usuarios: [],
    usuario: {},
    showModalFormularioUsuario: false,
    showModalExcluirUsuario: false,
}

export default (state = initialState, action) => {
    switch(action.type){
        case OBTER_USUARIOS_SUCCESS: {
            return {
                ...state,
                usuarios: action.payload.data
            };
        }

        case OBTER_USUARIO_SUCCESS: {
            return {
                ...state,
                usuario: action.payload.data,
            }
        }    
        
        case CADASTRAR_USUARIO_SUCCESS: {
            NotificationManager.success('Usuário cadastrado com sucesso', 'Sucesso')
            return {
                ...state,
                showModalFormularioUsuario: false
            }
        }

        case ATUALIZAR_USUARIO_SUCCESS: {
            NotificationManager.success('Usuário atualizado com sucesso', 'Sucesso')
            return {
                ...state,
                showModalFormularioUsuario: false
            }
        }

        case EXCLUIR_USUARIO_SUCCESS: {
            NotificationManager.success('Usuário excluído com sucesso', 'Sucesso')
            return {
                ...state,
                showModalExcluirUsuario: false
            }
        }

        case EXIBIR_MODAL_FORMULARIO_USUARIO: {
            return {
                ...state,
                showModalFormularioUsuario: true
            }
        }

        case ESCONDER_MODAL_FORMULARIO_USUARIO: {
            return {
                ...state,
                usuario: initialState.usuario,
                showModalFormularioUsuario: false
            }
        }
        
        case EXIBIR_MODAL_EXCLUIR_USUARIO: {
            return {
                ...state,
                showModalExcluirUsuario: true
            }
        }
        
        case ESCONDER_MODAL_EXCLUIR_USUARIO: {
            return {
                ...state,
                usuario: initialState.usuario,
                showModalExcluirUsuario: false
            }
        }
		
		case CADASTRAR_CLIENTE_SUCCESS: {
            NotificationManager.success('Cliente cadastrado com sucesso', 'Sucesso')
            return {
                ...state            }
        }
        
        default:
            return state;       
    }
};