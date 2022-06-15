import Button from '../Button/Button';
import './InventoryForm.scss';
import { Component } from 'react';
import { categoryList, warehouseList } from '../../utils/dropdownLists';

class InventoryForm extends Component {
    state = {
        name: '',
        description: '',
        category: '',
        status: '',
        quantity: 0,
        warehouseId: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form className='inventory-item'>
                <section className='inventory-item__form-inputs'>
                    <section className='inventory-item__details'>
                        <h2 className='inventory-item__subheader'>Item Details</h2>
                        <div className='inventory-item__input-container'>
                            <label className='inventory-item__label' htmlFor=''>Item Name</label>
                            <input

                                className='inventory-item__input'
                                name='name'
                                id='name'
                                placeholder='Please enter item name...'
                                value={this.state.name}
                                onChange={this.handleChange} />
                        </div>
                        <div className='inventory-item__input-container'>
                            <label className='inventory-item__label' htmlFor=''>Description</label>
                            <input
                                className='inventory-item__input input-description'
                                name='description'
                                id='description'
                                placeholder='Please enter a brief item description'
                                value={this.state.description}
                                onChange={this.handleChange} />
                        </div>
                        <div className='inventory-item__input-container'>
                            <label className='inventory-item__label' htmlFor=''>Category</label>
                            <select
                                className='inventory-item__dropdown'
                                name='category'
                                id='category'
                                placeholder='Please select'
                                value={this.state.category}
                                onChange={this.handleChange}
                            >
                                <option value='' disabled selected hidden>Please select</option>
                                {categoryList.map(category => {
                                    return (
                                        <option value={category}>{category}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </section>
                    <section className='inventory-item__availability'>
                        <h2 className='inventory-item__subheader'>Item Availability</h2>
                        <div className='inventory-item__status-container'>
                            <label className='inventory-item__label' htmlFor=''>Status</label>
                            <div className='inventory-item__radio-container radio'>
                                <div className='radio__option'>
                                    <input type='radio' name='status' id='in-stock' value='In stock' onChange={this.handleChange} checked />
                                    <label htmlFor='in-stock' >In stock</label>
                                </div>
                                <div className='radio__option'>
                                    <input type='radio' name='status' id='out-of-stock' value='Out of stock' onChange={this.handleChange} />
                                    <label htmlFor='out-of-stock' >Out of stock</label>
                                </div>
                            </div>
                        </div>
                        <div className='inventory-item__input-container'>
                            <label className='inventory-item__label' htmlFor=''>Quantity</label>
                            <input
                                className='inventory-item__input'
                                name='quantity'
                                id='quantity'
                                value={this.state.quantity}
                                onChange={this.handleChange} />
                        </div>
                        <div className='inventory-item__input-container'>
                            <label className='inventory-item__label' htmlFor=''>Warehouse</label>
                            <select
                                className='inventory-item__dropdown'
                                name='warehouse'
                                id='warehouse'
                                placeholder='Please select'
                                value={this.state.warehouseId}
                                onChange={this.handleChange}
                            >
                                <option value='' disabled selected hidden>Please select</option>
                                {warehouseList.map(warehouse => {
                                    return (
                                        <option value={warehouse.id}>{warehouse.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </section>
                </section>
                <section className='inventory-item__form-actions'>
                    <Button prompt='Cancel' />
                    <Button color='blue' prompt='+ Add Item' />
                </section>
            </form>
        );
    }
}

export default InventoryForm;