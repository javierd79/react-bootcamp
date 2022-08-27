import Home from "../Pages/home";
import Opening from "../Pages/Opening";
import Digimons from "../Pages/digimon";

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