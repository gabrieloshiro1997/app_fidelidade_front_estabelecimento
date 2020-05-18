import React from 'react';

const Home = React.lazy(() => import('./app/components/home/Home'));

const routes = [
  { path: '/Home', exact: true, name: 'Home', component:  Home }
];

export default routes;
