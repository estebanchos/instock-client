import React from 'react';
import './InventoriesPage.scss';
import InventoryList from '../../components/InventoryList/InventoryList';
import ListHeader from '../../components/ListHeader/ListHeader';
import Modal from '../../components/Modal/Modal';

// DATA
import axios from 'axios';
const inventoriesURL = 'http://localhost:8080/inventories';

class Inventories extends React.Component {

    state = {
        inventories: [],
        show: false,
        selectedItemId: '',
        selectedItemName: '',
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

    hideModal = () => {
        this.setState({
            show: false
        })
    }

    deleteItem = (itemId) => {
        axios.delete(`http://localhost:8080/inventories/${itemId}`)
        .then(res => {
            this.setState({
                inventories: res.data
            })
            this.hideModal()
        })
        .catch(err => console.error(err))
            
    }

    clickTrash = (e) => {
        this.setState({
            show: true,
            selectedItemName: e.target.name,
            selectedItemId: e.target.id
        })
    }

    render(){
        const itemObj = {
            name:`${this.state.selectedItemName} inventory item`,
            place: 'inventory list',
            deleteId: this.state.selectedItemId
        }
        return (
            <main className='inventory'>
                 <Modal 
                    show={this.state.show} 
                    hideModal={this.hideModal} 
                    infoObj={itemObj}
                    deleteHandler={this.deleteItem}
                    />
                <div className='inventory__background'></div>
                <section className='inventory__foreground'>
                    <ListHeader 
                        listName='Inventory' 
                        buttonText='+ Add New Item' 
                        path='/inventories/inventory/new' />
                    <InventoryList 
                        inventories={this.state.inventories}
                        deleteClick={this.clickTrash} 
                        />
                </section>
            </main>
        )
    }

}

export default Inventories;