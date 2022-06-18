import './WarehouseInvPage.scss';
import { Component } from 'react';
import axios from 'axios';
import WarehouseInvList from '../../components/WarehouseInvList/WarehouseInvList';
import WarehouseInvContact from '../../components/WarehouseInvContact/WarehouseInvContact';
import PageHeaderB from '../../components/PageHeaderB/PageHeaderB';

class WarehouseDetails extends Component {
    state = { 
        warehouse: [],
        warehouseContact: '',
        show: false
     } 

    componentDidMount() {
        const id = (this.props.match.params.warehouseId)
        axios.get(`http://localhost:8080/warehouses/${id}`)
            .then((res) => {
                // console.log(id);
                this.setState ({
                    ...this.state,
                    warehouse: res.data,
                })
            })
            .catch((error) => console.error(error))
    }

    componentDidUpdate() {
        if (!this.state.warehouseContact) {
        const id = (this.props.match.params.warehouseId)
        axios.get('http://localhost:8080/warehouses')
            .then((res) => {
                this.setState ({
                    ...this.state,
                    warehouseContact: res.data.find((warehouse) =>{
                        return warehouse.id === id
                    }),
                    show: true
                })
            })
            .catch((error) => console.error(error))
        } 
    }
    
    render() { 
        const id = (this.props.match.params.warehouseId)

        return (
            <section className='warehouse-inv'>
                <div className='warehouse-inv__background'></div>
                <section className='warehouse-inv__inner'>
                    <PageHeaderB headerTitle={this.state.warehouseContact.name} prevPageUrl='/' editUrl={`/warehouses/${id}/edit`}/>
                    <WarehouseInvContact warehouseContact={this.state.warehouseContact} show={this.state.show}/>
                    <WarehouseInvList warehouse={this.state.warehouse}/>
                </section>
            </section>
        );
    }
}

export default WarehouseDetails;