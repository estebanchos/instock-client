import Button from '../Button/Button';
import './InventoryForm.scss';
import { Component } from 'react';
import { categoryList, warehouseList } from '../../utils/dropdownLists';
import { inventoriesUrl } from '../../utils/api';
import InvalidMessage from '../InvalidMessage/InvalidMessage';
import axios from 'axios';
import ButtonNav from '../ButtonNav/ButtonNav';

class InventoryForm extends Component {
    state = {
        name: '',
        description: '',
        category: '',
        status: 'In stock',
        quantity: 0,
        warehouseId: '',
        isValidName: true,
        isValidDescription: true,
        isValidCategory: true,
        isValidStatus: true,
        isValidQuantity: true,
        isValidWarehouseId: true,
        showQty: true
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // method returns false if any input is invalid
    isFormValid = () => {
        const { name, description, category, status, quantity, warehouseId } = this.state
        let isValid = true
        if (!name) {
            this.setState({
                isValidName: false
            })
            isValid = false
        } else {
            this.setState({
                isValidName: true
            })
        }

        if (!description) {
            this.setState({
                isValidDescription: false
            })
            isValid = false
        } else {
            this.setState({
                isValidDescription: true
            })
        }

        if (!category) {
            this.setState({
                isValidCategory: false
            })
            isValid = false
        } else {
            this.setState({
                isValidCategory: true
            })
        }

        if (!status) {
            this.setState({
                isValidStatus: false
            })
            isValid = false
        } else {
            this.setState({
                isValidStatus: true
            })
        }

        if (!quantity) {
            this.setState({
                isValidQuantity: false
            })
            isValid = false
        } else {
            this.setState({
                isValidQuantity: true
            })
        }

        if (!warehouseId) {
            this.setState({
                isValidWarehouseId: false
            })
            isValid = false
        } else {
            this.setState({
                isValidWarehouseId: true
            })
        }

        return isValid
    }

    handleSubmit = (e) => {
        const newItemUrl = `${inventoriesUrl}new`
        e.preventDefault()
        if (this.isFormValid()) {
            let newItem = {
                name: this.state.name,
                description: this.state.description,
                category: this.state.category,
                status: this.state.status,
                quantity: this.state.quantity,
                warehouseId: this.state.warehouseId
            }
            axios.post(newItemUrl, newItem)
                .then(_res => {
                    setTimeout(() => this.returnToInventory(), 1000);
                })
                .catch(err => {
                    console.error("Unable to post: ", err)
                })
        }
    }

    // click handler for IN STOCK radio input
    quantityShow = (e) => {
        this.setState({
            showQty: true
        })
    }

    // click handler for OUT OF STOCK radio input
    quantityHide = (e) => {
        this.setState({
            showQty: false
        })
        e.target.setAttribute("checked", true)
    }


    render() {
        const {prompt} = this.props
        return (
            <form className='inventory-item' onSubmit={this.handleSubmit}>
                <section className='inventory-item__form-inputs'>
                    <section className='inventory-item__details'>
                        <h2 className='inventory-item__subheader'>Item Details</h2>
                        <div className='inventory-item__input-container'>
                            <label className='inventory-item__label' htmlFor=''>Item Name</label>
                            <input
                                className={this.state.isValidName ? 'input-type__input' : 'input-type__input--error'}
                                name='name'
                                id='name'
                                placeholder='Please enter item name...'
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                            <InvalidMessage isValid={this.state.isValidName} />
                        </div>
                        <div className='inventory-item__input-container'>
                            <label className='inventory-item__label' htmlFor=''>Description</label>
                            <textarea
                                className={this.state.isValidDescription ? 'input-type__description' : 'input-type__description--error'}
                                name='description'
                                id='description'
                                placeholder='Please enter a brief item description'
                                rows='5'
                                value={this.state.description}
                                onChange={this.handleChange}
                            />
                            <InvalidMessage isValid={this.state.isValidDescription} />
                        </div>
                        <div className='inventory-item__input-container'>
                            <label className='inventory-item__label' htmlFor=''>Category</label>
                            <select
                                className={this.state.isValidCategory ? 'input-type__dropdown' : 'input-type__dropdown--error'}
                                name='category'
                                id='category'
                                value={this.state.category}
                                onChange={this.handleChange}
                            >
                                <option value='' disabled hidden>Please select</option>
                                {categoryList.map((category, index) => {
                                    return (
                                        <option key={index} value={category}>{category}</option>
                                    )
                                })}
                            </select>
                            <InvalidMessage isValid={this.state.isValidCategory} />
                        </div>
                    </section>

{/* ITEM AVAILABILITY - STATUS, QTY, WAREHOUSE */}
                    <section className='inventory-item__availability'>
                        <h2 className='inventory-item__subheader'>Item Availability</h2>
                        {/* STATUS */}
                        <div className='inventory-item__status-container'>
                            <label className='inventory-item__label' htmlFor=''>Status</label>
                            <div className='inventory-item__radio-container'>
                                <div className='input-type__option'>
                                    <input type='radio' 
                                    name='status' 
                                    id='in-stock' 
                                    value='In stock' 
                                    onChange={this.handleChange}
                                    onClick={this.quantityShow}
                                    />
                                    <label htmlFor='in-stock' >In stock</label>
                                </div>
                                <div className='input-type__option'>
                                    <input type='radio' name='status' id='out-of-stock' value='Out of stock' 
                                    onChange={this.handleChange} 
                                    onClick={this.quantityHide}
                                    />
                                    <label htmlFor='out-of-stock' >Out of stock</label>
                                </div>
                            </div>
                        </div>
                        {/*  QUANTITY */}
                        <div className={`inventory-item__input-container${this.state.showQty ? '' : '--hide'}`}>
                            <label className='inventory-item__label' htmlFor=''>Quantity</label>
                            <input
                                className={this.state.isValidQuantity ? 'input-type__quantity' : 'input-type__quantity--error'}
                                name='quantity'
                                id='quantity'
                                value={this.state.quantity}
                                onChange={this.handleChange}
                            />
                            <InvalidMessage isValid={this.state.isValidQuantity} />
                        </div>
                        {/* WAREHOUSE */}
                        <div className='inventory-item__input-container'>
                            <label className='inventory-item__label' htmlFor=''>Warehouse</label>
                            <select
                                className={this.state.isValidWarehouseId ? 'input-type__dropdown' : 'input-type__dropdown--error'}
                                name='warehouseId'
                                id='warehouseId'
                                value={this.state.warehouseId}
                                onChange={this.handleChange}
                            >
                                <option value='' disabled hidden>Please select</option>
                                {warehouseList.map(warehouse => {
                                    return (
                                        <option key={warehouse.id} value={warehouse.id}>{warehouse.name}</option>
                                    )
                                })}
                            </select>
                            <InvalidMessage isValid={this.state.isValidWarehouseId} />
                        </div>
                    </section>
                </section>
                {/* BUTTONS */}
                <section className='inventory-item__form-actions'>
                    <ButtonNav prompt='Cancel' path='/inventories' />
                    <Button color='blue' prompt={prompt}/>
                </section>
            </form>
        );
    }
}

export default InventoryForm;