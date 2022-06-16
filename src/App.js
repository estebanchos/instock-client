import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Warehouses from './components/Warehouses/Warehouses';
import Inventories from './components/Inventories/Inventories';
import WarehouseDetails from './components/WarehouseDetails/WarehouseDetails';
import NewInventoryPage from './pages/NewInventoryPage/NewInventoryPage';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Warehouses} />
            <Route path="/warehouses" exact component={Warehouses} />
            {/* <Route path="/inventories" component={Inventories} /> */}
            <Route path="/warehouses/:warehouseId" component={WarehouseDetails} />
            <Route path="/inventories" exact component={Inventories} />
            <Route path='/inventories/inventory/new' component={NewInventoryPage} />
          </Switch> 
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
