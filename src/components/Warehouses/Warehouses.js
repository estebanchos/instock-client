import './Warehouses.scss';
import { Component } from 'react';
import WarehouseList from '../WarehouseList/WarehouseList';
import axios from 'axios';

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
                <div className='main__header'>
                    <h1 className='main__header-title'>Warehouses</h1>
                    <input type='text' name='search' className='main__header-search'placeholder='Search...'></input>
                    {/* <Button/> */}
                </div>
                <WarehouseList warehouses={this.state.warehouses}/>
            </main>
        );
    }
}
 
export default Warehouses;