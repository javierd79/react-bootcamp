import React from 'react';

const Home = React.lazy(() => import("../Pages/home"));
const Opening = React.lazy(() => import("../Pages/Opening"));
const Digimons = React.lazy(() => import("../Pages/digimon"));

const routes = [
  {
    title: 'Opening',
    path: '/Opening',
    component: Opening,
  },
  {
    title: 'Digimons',
    path: '/digimons',
    component: Digimons,
  },
  {
    title: 'Home',
    path: '/',
    component: Home,
  },
];

export default routes;