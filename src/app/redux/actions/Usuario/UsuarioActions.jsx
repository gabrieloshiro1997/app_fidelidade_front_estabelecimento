import { 
    OBTER_USUARIOS, 
    OBTER_USUARIOS_ADMINISTRADORES, 
    OBTER_USUARIO,
    CADASTRAR_USUARIO,
    ATUALIZAR_USUARIO,
    EXCLUIR_USUARIO,
    EXIBIR_MODAL_FORMULARIO_USUARIO,
    ESCONDER_MODAL_FORMULARIO_USUARIO,
    EXIBIR_MODAL_EXCLUIR_USUARIO,
	ESCONDER_MODAL_EXCLUIR_USUARIO,
	CADASTRAR_CLIENTE
} from './UsuarioActionTypes'

export const ObterUsuarios = () => ({
    type: OBTER_USUARIOS,
    payload: {
        request: {
            url: `/api/usuario/`,
            method: 'GET'
        }
    }
});

export const ObterUsuariosAdministradores = () => ({
	type: OBTER_USUARIOS_ADMINISTRADORES,
	payload: {
		request: {
            url: `/api/usuario/administradores`,
            method: 'GET'
        }
	}
})

export const ObterUsuario = (id) => ({
    type: OBTER_USUARIO,
    payload: {
        request: {
            url: `/api/usuario/${id}`,
            method: 'GET'
        }
    }
});

export const CadastrarUsuario = (usuario) => ({
    type: CADASTRAR_USUARIO,
    payload: {
        request: {
            url: `/api/usuario`,
            method: 'POST',
            data: usuario
        }
    }
});

export const AtualizarUsuario = (usuario) => ({
    type: ATUALIZAR_USUARIO,
    payload: {
        request: {
            url: `/api/usuario`,
            method: 'PUT',
            data: usuario
        }
    }
});

export const ExcluirUsuario = (id) => ({
    type: EXCLUIR_USUARIO,
    payload: {
        request: {
            url: `/api/usuario/${id}`,
            method: 'DELETE'
        }
    }
})

export const ExibirModalFormularioUsuario = () => ({
    type: EXIBIR_MODAL_FORMULARIO_USUARIO
});

export const EsconderModalFormularioUsuario = () => ({
    type: ESCONDER_MODAL_FORMULARIO_USUARIO
});

export const ExibirModalExcluirUsuario = () => ({
    type: EXIBIR_MODAL_EXCLUIR_USUARIO
});

export const EsconderModalExcluirUsuario = () => ({
    type: ESCONDER_MODAL_EXCLUIR_USUARIO
});

export const CadastrarCliente = (cliente) => ({
    type: CADASTRAR_CLIENTE,
    payload: {
        request: {
            url: `/api/cliente`,
            method: 'POST',
            data: cliente
        }
    }
});