import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import  Login  from './components/auth/Login';
import  NuevaCuenta  from './components/auth/NuevaCuenta';
import  Pacientes  from './components/administrar-pacientes/Pacientes';




function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
        <Route exact path="/pacientes" component={Pacientes} />
      </Switch>
    </Router>
  );
}

export default App;
