import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import WarehousesPage from './pages/WarehousesPage/WarehousesPage';
import InventoriesPage from './pages/InventoriesPage/InventoriesPage';
import NewInventoryPage from './pages/NewInventoryPage/NewInventoryPage';
import WarehouseInvPage from './pages/WarehouseInvPage/WarehouseInvPage';
import NewWarehousePage from './pages/NewWarehousePage/NewWarehousePage';
import InventoryDetails from './components/InventoryDetails/InventoryDetails';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={WarehousesPage} />
            <Route path="/inventories" exact component={InventoriesPage} />
            <Route path="/inventories/:Id" component={InventoryDetails} />
            <Route path="/warehouses/:warehouseId" exact component={WarehouseInvPage} />
            <Route path='/inventories/inventory/new' component={NewInventoryPage} />
            <Route path='/warehouses/warehouse/new' exact component={NewWarehousePage} />
          </Switch> 
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
