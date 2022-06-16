import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import WarehousesPage from './pages/WarehousesPage/WarehousesPage';
import InventoriesPage from './pages/InventoriesPage/InventoriesPage';
import NewInventoryPage from './pages/NewInventoryPage/NewInventoryPage';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={WarehousesPage} />
            <Route path="/inventories" exact component={InventoriesPage} />
            {/* <Route path="/warehouses/:warehouseId" component={WarehouseDetails} /> */}
            <Route path='/inventories/inventory/new' component={NewInventoryPage} />
          </Switch> 
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
