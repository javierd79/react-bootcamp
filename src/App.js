import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Navbar from './Components/navbar'
import routes from './Config/routes';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} component={route.component}/>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
