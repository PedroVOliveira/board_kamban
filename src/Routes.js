import React from 'react';
import { Route,BrowserRouter } from 'react-router-dom';
import Kamban from './Pages/Kamban';
import Home from './Pages/Home';
import Register from './Pages/Register';
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

    </BrowserRouter>
  )
}

export default Routes;

