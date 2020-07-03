export const addMaskCpf = (cpf) => {

	if(!cpf) return '';
	
	return cpf
			.replace(/\D/g, '')
			.replace(/(\d{3})(\d)/, '$1.$2')
			.replace(/(\d{3})(\d)/, '$1.$2')
			.replace(/(\d{3})(\d{1,2})/, '$1-$2')
			.replace(/(-\d{2})\d+?$/, '$1');
};

export const addMaskCnpj = (cnpj) => {
	
	if(!cnpj) return '';

	return cnpj
			.replace(/\D/g, '')
			.replace(/(\d{2})(\d)/, '$1.$2')
			.replace(/(\d{3})(\d)/, '$1.$2')
			.replace(/(\d{3})(\d)/, '$1/$2')
			.replace(/(\d{4})(\d)/, '$1-$2')
			.replace(/(-\d{2})\d+?$/, '$1');
};

export const removeMaskCpf = (cpf) => {

	if(!cpf) return '';
	
	return cpf
			.replace(/\./g, '')
			.replace(/\-/g, '');
};

export const removeMaskCnpj = (cnpj) => {
	
	if(!cnpj) return '';

	return cnpj
			.replace(/\./g, '')
			.replace(/\-/g, '')
			.replace(/\//g, '');
};

export const addMaskData = (data) => {
	let dia = new Date(data).getDate();
	let mes = new Date(data).getMonth() + 1;
	let ano = new Date(data).getFullYear();

	let dataFormatada = dia + '/' + mes + '/' + ano;
	
	return dataFormatada;
}