import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Navbar from './Components/navbar'
import { Spinner } from 'reactstrap';
import routes from './Config/routes';


function App() {
  return (
    <Suspense fallback={<Spinner color="primary" style={{position: 'absolute', top: '50%', left:'50%'}}/>}>
      <Router>
        <Navbar/>
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} component={route.component}/>
          ))}
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
