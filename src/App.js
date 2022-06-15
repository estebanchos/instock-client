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
            <Route exact path="/" component={Warehouses} />
            <Route path="/inventories" component={Inventories} />
            {/* <Route path="/warehouses/:warehouseId" component={WarehouseDetails} /> */}
          </Switch> 
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
