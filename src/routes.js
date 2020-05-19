import React from 'react';

const Home = React.lazy(() => import('./app/components/home/Home'));
const Recompensa = React.lazy(() => import('./app/components/recompensa/Recompensa'));

const routes = [
  { path: '/Home', exact: true, name: 'Home', component:  Home },
  { path: '/Recompensa', exact: true, name: 'Recompensa', component:  Recompensa }
];

export default routes;
