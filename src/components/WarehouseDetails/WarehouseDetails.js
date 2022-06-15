import './WarehouseDetails.scss';
import { Component } from 'react';
import axios from 'axios';
import WarehouseInvList from '../WarehouseInvList/WarehouseInvList';

class WarehouseDetails extends Component {
    state = { 
        warehouse: [],
        warehouseContact: {}
     } 

    componentDidMount() {
        const id = (this.props.match.params.warehouseId)
        axios.get('http://localhost:8080/warehouses')
            .then((res) => {
                this.setState ({
                    warehouseContact: res.data.find((warehouse) =>{
                        return warehouse.id === id
                    })
                })
            })
            .catch((error) => console.error(error))
        
        axios.get(`http://localhost:8080/warehouses/${id}`)
            .then((res) => {
                this.setState ({
                    warehouse: res.data
                })
            })
            .catch((error) => console.error(error))
    }

    render() { 
        console.log(this.state.warehouseContact)
        return (
            <section className='warehouse-inv'>
                <div className='warehouse-inv__background'></div>
                <section className='warehouse-inv__inner'>
                    <div className='warehouse-inv__header'></div>
                    <div className='warehouse-inv__info'>
                        {/* <div className='warehouse-inv__address'>
                            <p className='warehouse-inv__title'>WAREHOUSE ADDRESS:</p>
                            <p className='warehouse-inv__input'>
                                {this.state.warehouseContact.address}
                                {this.state.warehouseContact.city}
                                {this.state.warehouseContact.country}
                            </p>
                        </div>
                        <div className='warehouse-inv__contact'>
                            <div className='warehouse-inv__contact-name'>
                                <p className='warehouse-inv__title'>CONTACT NAME:</p>
                                <p className='warehouse-inv__input'>
                                    {this.state.warehouseContact.contact.name}
                                </p>
                            </div>
                            <div className='warehouse-inv__contact-info'>
                                <p className='warehouse-inv__title'>CONTACT INFORMATION:</p>
                                <p className='warehouse-inv__input'>
                                    {this.state.warehouseContact.contact.phone}
                                    {this.state.warehouseContact.contact.email}
                                </p>
                            </div>
                        </div> */}
                    </div>
                    <WarehouseInvList warehouse={this.state.warehouse}/>
                </section>
            </section>
        );
    }
}

export default WarehouseDetails;