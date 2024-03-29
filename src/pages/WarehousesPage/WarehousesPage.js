import './WarehousesPage.scss';
import { Component } from 'react';
import WarehouseList from '../../components/WarehouseList/WarehouseList';
import axios from 'axios';
import ListHeader from '../../components/ListHeader/ListHeader';
import Modal from '../../components/Modal/Modal';

class Warehouses extends Component {
    state = { 
        warehouses: [],
        show: false,
        selectedWarehouseName:'',
        selectedWarehouseId: ''
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
       
    clickTrash = (e) => {
        this.setState({
            show: true,
            selectedWarehouseName: e.target.name,
            selectedWarehouseId: e.target.id
        })
    }

    hideModal = () => {
        this.setState({
            show: false
        })
    }

    deleteWarehouse = (warehouseId) => {
        axios.delete(`http://localhost:8080/warehouses/${warehouseId}`)
        .then(res => {
            this.setState({
                warehouses: res.data
            })
            this.hideModal()
        })
        .catch(err => console.error(err))
            
    }

    render() { 
        const warehouseObj = {
            name: `${this.state.selectedWarehouseName} warehouse` || '',
            place: 'list of warehouses',
            deleteId: this.state.selectedWarehouseId
            
        }
        return (
            <main className='main'>
                 <Modal 
                    show={this.state.show} 
                    hideModal={this.hideModal} 
                    infoObj={warehouseObj}
                    deleteHandler={this.deleteWarehouse}
                    />
                <div className='main__background'></div>
                <section className='main__inner'>
                    <ListHeader 
                    listName='Warehouses' 
                    buttonText='+ Add New Warehouse' 
                    path='/warehouses/warehouse/new'
                    />
                    <WarehouseList 
                    warehouses={this.state.warehouses} 
                    deleteClick={this.clickTrash} 
                    show={this.state.show}
                    isWarehouse={true}
                    />
                </section>
            </main>
        );
    }
}
 
export default Warehouses;