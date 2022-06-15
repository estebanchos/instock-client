import React from 'react';
import './Inventories.scss';
import {Link} from 'react-router-dom';
import InventoryList from '../InventoryList/InventoryList';

// DATA
import axios from 'axios';
import Button from '../Button/Button';
const inventoriesURL = 'http://localhost:8080/inventories';

class Inventories extends React.Component {

    state = {
        inventories: []
    }

// initial mount fills state with inventory info from API
    componentDidMount(){
        axios
            .get(inventoriesURL)
            .then(response => {
                this.setState({
                    inventories: response.data
                })
                console.log(response.data);
            })
            .catch(error => console.error(error))
    };

    render(){
        return (
            <section className='inventory'>
                    <h1 className='inventory__title'>Inventory</h1>
                    <input 
                        className='inventory__searchbar' 
                        name='search' 
                        type='search'
                        placeholder='Search...'
                        >
                    </input>
                    <Button color="blue" prompt="+Add New Item" />
                <InventoryList inventories={this.state.inventories}/>
            </section>
        )
    }




}

export default Inventories;