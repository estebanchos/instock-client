import React from 'react';
import './Inventories.scss';
import {Link} from 'react-router-dom';
import InventoryList from '../InventoryList/InventoryList';
import ListHeader from '../ListHeader/ListHeader';

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
                console.log(response.data)
            })
            .catch(error => console.error(error))
    };

    render(){
        return (
            <main className='inventory'>
                <div className='inventory__background'></div>
                <section className='inventory__foreground'>
                <ListHeader listName='Inventory' buttonText='+Add New Item' />
                    {/* <h1 className='inventory__title'>Inventory</h1>
                    <input 
                        className='inventory__searchbar' 
                        name='search' 
                        type='search'
                        placeholder='Search...'
                        >
                    </input> */}
                    {/* <Button color="blue" prompt="+Add New Item" /> */}
                <InventoryList inventories={this.state.inventories}/>
                </section>
            </main>
        )
    }



}

export default Inventories;