import React from 'react';
import './InventoriesPage.scss';
import {Link} from 'react-router-dom';
import InventoryList from '../../components/InventoryList/InventoryList';
import ListHeader from '../../components/ListHeader/ListHeader';

// DATA
import axios from 'axios';
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
            })
            .catch(error => console.error(error))
    };

    render(){
        return (
            <main className='inventory'>
                <div className='inventory__background'></div>
                <section className='inventory__foreground'>
                <ListHeader listName='Inventory' buttonText='+Add New Item' />
                <InventoryList inventories={this.state.inventories}/>
                </section>
            </main>
        )
    }



}

export default Inventories;