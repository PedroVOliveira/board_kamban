import React from 'react';
import { Route,BrowserRouter } from 'react-router-dom';
import Kamban from './Pages/Kamban';
import Home from './Pages/Home';
import Register from './Pages/Register';
import RegisterStep from './Pages/RegisterStep';
import RegisterTask from './Pages/RegisterTask';
function Routes() {
  return(
    <BrowserRouter>
      <Route
        component={Home}
        path="/"
        exact
      />
      <Route
        component={Kamban}
        path="/dashboard"

      />
      <Route
        component={Register}
        path="/register-user"
      />
      <Route
        component={RegisterStep}
        path="/register-step"
      />
      <Route
        component={RegisterTask}
        path="/register-task"
      />
    </BrowserRouter>
  )
}

export default Routes;

