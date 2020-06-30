import React from 'react';

const Home = React.lazy(() => import('./app/components/home/Home'));
const Recompensa = React.lazy(() => import('./app/components/recompensa/Recompensa'));
const Pontuacao = React.lazy(() => import('./app/components/pontuacao/Pontuacao'));
const Relatorio = React.lazy(() => import('./app/components/relatorios/Relatorio'));

const routes = [
  { path: '/Home', exact: true, name: 'Home', component:  Home },
  { path: '/Recompensa', exact: true, name: 'Recompensa', component:  Recompensa },
  { path: '/Pontuacao', exact: true, name: 'Pontuacao', component:  Pontuacao },
  { path: '/Relatorios', exact: true, name: 'Relatórios', component:  Relatorio }
];

export default routes;
