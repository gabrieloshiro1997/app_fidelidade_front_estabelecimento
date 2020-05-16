
import { 
	LOGIN,
	LOGIN_ESTABELECIMENTO,
    LOGOUT,
} from './LoginActionTypes'

export const LoginUsuario = (email, senha) => ({
    type: LOGIN,
    payload: {
        request: {
            url: `/api/autenticacao/`,
            method: 'POST',
            data: {
                email,
                senha
            }
        }
    }
});

export const RealizarLoginEstabelecimento = (email, senha) => ({
    type: LOGIN_ESTABELECIMENTO,
    payload: {
        request: {
            url: `/api/autenticacao/estabelecimento`,
            method: 'POST',
            data: {
                email,
                senha
            }
        }
    }
});

export const Logout = () => ({
    type: LOGOUT
});
