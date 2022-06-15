import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Warehouses from './components/Warehouses/Warehouses';
import Inventories from './components/Inventories/Inventories';
import InventoryForm from './components/InventoryForm/InventoryForm';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" component={Warehouses} />
            <Route path="/inventories" component={Inventories} />
<<<<<<< HEAD
          </Switch>
=======
            {/* <Route path="/warehouses/:warehouseId" component={WarehouseDetails} /> */}
          </Switch> 
>>>>>>> b89c60b597ea45e239ff7d1bec7858e1220148d2
          <Footer />
          <Route path='/' component={InventoryForm} />
        </BrowserRouter>
      </div>

    );
  }
}

export default App;
