import React from 'react';

const Home = React.lazy(() => import('./app/components/home/Home'));
const Usuario = React.lazy(() => import('./app/components/usuario/Usuario'));
const Cadastro = React.lazy(() => import('./app/components/cadastro/Cadastro'));
const Estabelecimento = React.lazy(() => import('./app/components/estabelecimento/Estabelecimento'));

const routes = [
  { path: '/Home', exact: true, name: 'Home', component:  Home },
  { path: '/Clientes', exact: true, name: 'Clientes', component:  Usuario },
  { path: '/Cadastro', exact: true, name: 'Cadastro', component:  Cadastro },
  { path: '/Estabelecimento', exact: true, name: 'Estabelecimento', component:  Estabelecimento },
];

export default routes;
