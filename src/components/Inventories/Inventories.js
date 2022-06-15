import React from 'react';
import './Inventories.scss';
import {Link} from 'react-router-dom';
import Header from '../Header/Header';
import InventoryList from '../InventoryList/InventoryList';
import Footer from '../Footer/Footer';

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
                console.log(response.data)
            })
            .catch(error => console.error(error))
    };

    render(){
        return (
            <section className='inventory__container'>
                
                <InventoryList inventories={this.state.inventories}/>
                

            </section>
        )
    }







}

export default Inventories;