import './Warehouses.scss';
import { Component } from 'react';
import WarehouseList from '../WarehouseList/WarehouseList';
import axios from 'axios';
import ListHeader from '../ListHeader/ListHeader';

class Warehouses extends Component {
    state = { 
        warehouses: []
     } 

    componentDidMount() {
        axios.get('http://localhost:8080/warehouses')
            .then((res) => {
                this.setState ({
                    warehouses: res.data
                })
            })
            .catch((error) => console.error(error))
    }

    render() { 
        return (
            <main className='main'>
                <div className='main__background'></div>
                <section className='main__inner'>
                    <ListHeader listName='Warehouses' buttonText='+Add New Warehouse' />
                    <WarehouseList warehouses={this.state.warehouses}/>
                </section>
            </main>
        );
    }
}
 
export default Warehouses;