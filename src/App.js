import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Warehouses from './components/Warehouses/Warehouses';
import Inventories from './components/Inventories/Inventories';


class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/warehouses" component={Warehouses} />
            <Route path="/inventories" component={Inventories} />
          </Switch> 
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
