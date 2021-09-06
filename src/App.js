import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import  Login  from './components/auth/Login';
import  NuevaCuenta  from './components/auth/NuevaCuenta';
import  AdministrarPacientes  from './components/administrar-pacientes/AdministrarPacientes';

import PacienteState from './context/pacientes/PacienteState';


function App() {
  return (
    <PacienteState>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
            <Route exact path="/pacientes" component={AdministrarPacientes} />
          </Switch>
        </Router>
    </PacienteState>
  );
}

export default App;
