import Button from '../Button/Button';
import './WarehouseForm.scss';
import { Component } from 'react';
import { warehousesUrl } from '../../utils/api';
import InvalidMessage from '../InvalidMessage/InvalidMessage';
import axios from 'axios';
import ButtonNav from '../ButtonNav/ButtonNav';

class WarehouseForm extends Component {
    state = {
        warehouseId: '',
        name: '',
        address: '',
        city: '',
        country: '',
        contactName: '',
        position: '',
        phone: '',
        email: '',
        isValidName: true,
        isValidAddress: true,
        isValidCity: true,
        isValidCountry: true,
        isValidContactName: true,
        isValidPosition: true,
        isValidPhone: true,
        isValidEmail: true
    }

    componentDidMount() {
        const warehouseId = this.props.warehouseId
        if (warehouseId) {
            axios.get(warehousesUrl)
                .then((res) => {
                    const found = res.data.find(warehouse => warehouse.id === warehouseId)
                    const { id, name, address, city, country, contact: { name: contactName, position, phone, email } } = found
                    this.setState({
                        warehouseId: id,
                        name: name,
                        address: address,
                        city: city,
                        country: country,
                        contactName: contactName,
                        position: position,
                        phone: phone,
                        email: email,
                    })
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
        const { name, address, city, country, contactName, position, phone, email } = this.state
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

        if (!address) {
            this.setState({
                isValidAddress: false
            })
            isValid = false
        } else {
            this.setState({
                isValidAddress: true
            })
        }

        if (!city) {
            this.setState({
                isValidCity: false
            })
            isValid = false
        } else {
            this.setState({
                isValidCity: true
            })
        }

        if (!country) {
            this.setState({
                isValidCountry: false
            })
            isValid = false
        } else {
            this.setState({
                isValidCountry: true
            })
        }

        if (!contactName) {
            this.setState({
                isValidContactName: false
            })
            isValid = false
        } else {
            this.setState({
                isValidContactName: true
            })
        }

        if (!position) {
            this.setState({
                isValidPosition: false
            })
            isValid = false
        } else {
            this.setState({
                isValidPosition: true
            })
        }

        if (!phone) {
            this.setState({
                isValidPhone: false
            })
            isValid = false
        } else {
            this.setState({
                isValidPhone: true
            })
        }

        if (!email) {
            this.setState({
                isValidEmail: false
            })
            isValid = false
        } else {
            this.setState({
                isValidEmail: true
            })
        }

        return isValid
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.isFormValid()) {
            let newWarehouse = {
                name: this.state.name,
                address: this.state.address,
                city: this.state.city,
                country: this.state.country,
                contactName: this.state.contactName,
                position: this.state.position,
                phone: this.state.phone,
                email: this.state.email
            }
            // if warehouseId exists we update the existing warehouse, otherwise we send a post to create a new one
            if (this.state.warehouseId.length > 3) {
                //put
                const editWarehouseUrl = `${warehousesUrl}${this.state.warehouseId}/edit`
                axios.put(editWarehouseUrl, newWarehouse)
                    .then(_res => console.log("edited"))
                    .catch(err => console.error("Unable to update: ", err))
            } else {
                const newWarehouseUrl = `${warehousesUrl}new`
                axios.post(newWarehouseUrl, newWarehouse)
                .then(_res => {
                    // pending functionality to return to warehouses page
                    // setTimeout(() => this.returnToWarehouses(), 1000);
                })
                .catch(err => console.error("Unable to create new warehouse: ", err))
            }
        }
    }

    render() {
        const { prompt } = this.props
        return (
            <form className='warehouse-item' onSubmit={this.handleSubmit}>
                <section className='warehouse-item__form-inputs'>
                    <section className='warehouse-item__warehouse-details'>
                        <h2 className='warehouse-item__subheader'>Warehouse Details</h2>
                        <div className='warehouse-item__input-container'>
                            <label className='warehouse-item__label' htmlFor=''>Warehouse Name</label>
                            <input
                                className={this.state.isValidName ? 'input-type__input' : 'input-type__input--error'}
                                name='name'
                                id='name'
                                placeholder='Warehouse Name'
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                            <InvalidMessage isValid={this.state.isValidName} />
                        </div>
                        <div className='warehouse-item__input-container'>
                            <label className='warehouse-item__label' htmlFor=''>Street Address</label>
                            <input
                                className={this.state.isValidAddress ? 'input-type__input' : 'input-type__input--error'}
                                name='address'
                                id='address'
                                placeholder='Street Address'
                                value={this.state.address}
                                onChange={this.handleChange}
                            />
                            <InvalidMessage isValid={this.state.isValidAddress} />
                        </div>
                        <div className='warehouse-item__input-container'>
                            <label className='warehouse-item__label' htmlFor=''>City</label>
                            <input
                                className={this.state.isValidCity ? 'input-type__input' : 'input-type__input--error'}
                                name='city'
                                id='city'
                                placeholder='City'
                                value={this.state.city}
                                onChange={this.handleChange}
                            />
                            <InvalidMessage isValid={this.state.isValidCity} />
                        </div>
                        <div className='warehouse-item__input-container'>
                            <label className='warehouse-item__label' htmlFor=''>Country</label>
                            <input
                                className={this.state.isValidCountry ? 'input-type__input' : 'input-type__input--error'}
                                name='country'
                                id='country'
                                placeholder='Country'
                                value={this.state.country}
                                onChange={this.handleChange}
                            />
                            <InvalidMessage isValid={this.state.isValidCountry} />
                        </div>
                    </section>
                    <section className='warehouse-item__contact-details'>
                        <h2 className='warehouse-item__subheader'>Contact Details</h2>
                        <div className='warehouse-item__input-container'>
                            <label className='warehouse-item__label' htmlFor=''>Contact Name</label>
                            <input
                                className={this.state.isValidContactName ? 'input-type__input' : 'input-type__input--error'}
                                name='contactName'
                                id='contactName'
                                placeholder='Contact Name'
                                value={this.state.contactName}
                                onChange={this.handleChange}
                            />
                            <InvalidMessage isValid={this.state.isValidContactName} />
                        </div>
                        <div className='warehouse-item__input-container'>
                            <label className='warehouse-item__label' htmlFor=''>Position</label>
                            <input
                                className={this.state.isValidPosition ? 'input-type__input' : 'input-type__input--error'}
                                name='position'
                                id='position'
                                placeholder='Position'
                                value={this.state.position}
                                onChange={this.handleChange}
                            />
                            <InvalidMessage isValid={this.state.isValidPosition} />
                        </div>
                        <div className='warehouse-item__input-container'>
                            <label className='warehouse-item__label' htmlFor=''>Phone Number</label>
                            <input
                                className={this.state.isValidPhone ? 'input-type__input' : 'input-type__input--error'}
                                name='phone'
                                id='phone'
                                placeholder='+1 (647) 123-4567'
                                value={this.state.phone}
                                onChange={this.handleChange}
                            />
                            <InvalidMessage isValid={this.state.isValidPhone} />
                        </div>
                        <div className='warehouse-item__input-container'>
                            <label className='warehouse-item__label' htmlFor=''>Email</label>
                            <input
                                className={this.state.isValidEmail ? 'input-type__input' : 'input-type__input--error'}
                                name='email'
                                id='email'
                                placeholder='email@address.com'
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                            <InvalidMessage isValid={this.state.isValidEmail} />
                        </div>
                    </section>
                </section>
                <section className='warehouse-item__form-actions'>
                    <ButtonNav prompt='Cancel' path='/' />
                    <Button color='blue' prompt={prompt} />
                </section>
            </form>
        );
    }
}

export default WarehouseForm;