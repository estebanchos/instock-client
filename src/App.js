import './App.scss';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import React from 'react';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/warehouses" component={Warehouses} />
          <Route path="/inventories" component={Inventories} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
