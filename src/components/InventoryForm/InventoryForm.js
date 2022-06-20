import Button from '../Button/Button';
import './InventoryForm.scss';
import { Component } from 'react';
import { categoryList, warehouseList } from '../../utils/dropdownLists';
import { inventoriesUrl } from '../../utils/api';
import InvalidMessage from '../InvalidMessage/InvalidMessage';
import axios from 'axios';

class InventoryForm extends Component {
    state = {
        itemId: '',
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
        showQty: true,
        messageBanner: false
    }

    componentDidMount() {
        const itemId = this.props.itemId
        if (itemId) {
            axios.get(inventoriesUrl + itemId)
                .then((res) => {
                    const { id, itemName, description, category, status, quantity, warehouseID } = res.data
                    this.setState({
                        itemId: id,
                        name: itemName,
                        description: description,
                        category: category,
                        status: status,
                        quantity: quantity,
                        warehouseId: warehouseID,
                    })
                    if (status === "Out of Stock") {
                        this.setState({
                            showQty: false
                        })
                    }
                })
                .catch((error) => console.error(error))
        }
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
            // if itemId exists we update the existing item, otherwise we send a post to create a new one
            if (this.state.itemId.length > 3) {
                //put
                const editItemUrl = `${inventoriesUrl}${this.state.itemId}/edit`
                axios.put(editItemUrl, newItem)
                    .then(_res => {
                        this.showMessage()
                        setTimeout(() => this.returnToPrevPage(), 1000)})
                    .catch(err => console.error("Unable to update: ", err))
            } else {
                const newItemUrl = `${inventoriesUrl}new`
                axios.post(newItemUrl, newItem)
                    .then(_res => {
                        this.showMessage()
                        setTimeout(() => this.returnToPrevPage(), 1000)})
                    .catch(err => console.error("Unable to create: ", err))
            }
        }
    }

    // show message about item being saved
    showMessage = () => {
        this.setState({
            messageBanner: true
        })
    }

    // method will return to the previous page
    returnToPrevPage = () => {
        this.props.history.goBack()
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
        const { prompt } = this.props
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
                        {/*  DESCRIPTION */}
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
                        {/*  CATEGORY */}
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
                                {categoryList.map((category) => {
                                    return (
                                        <option key={category.id} value={category.name}>{category.name}</option>
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
                                        value='In Stock'
                                        onChange={this.handleChange}
                                        onClick={this.quantityShow}
                                        checked={this.state.status === 'In Stock'}
                                    // set a function then ternary
                                    />
                                    <label htmlFor='in-stock' >In stock</label>
                                </div>
                                <div className='input-type__option'>
                                    <input type='radio'
                                        name='status'
                                        id='out-of-stock'
                                        value='Out of Stock'
                                        onChange={this.handleChange}
                                        onClick={this.quantityHide}
                                        checked={this.state.status === 'Out of Stock'}
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
                {/* BANNER */}
                <div className={this.state.messageBanner ? 'item__update--true' : 'item__update--false'}>
                    <p className='item__update'>Item save successful</p>
                </div>
                {/* BUTTONS */}
                <section className='inventory-item__form-actions'>
                <p className='cancel-button' onClick={this.returnToPrevPage}>Cancel</p>
                    <Button color='blue' prompt={prompt} />
                </section>
            </form>
        );
    }
}

export default InventoryForm;