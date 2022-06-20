import './WarehouseInvPage.scss';
import { Component } from 'react';
import axios from 'axios';
import WarehouseInvList from '../../components/WarehouseInvList/WarehouseInvList';
import WarehouseInvContact from '../../components/WarehouseInvContact/WarehouseInvContact';
import PageHeaderB from '../../components/PageHeaderB/PageHeaderB';
import Modal from '../../components/Modal/Modal';

class WarehouseDetails extends Component {
    state = {
        warehouse: [],
        warehouseContact: '',
        show: false,
        modalShow: false,
        selectedItemId: '',
        selectedItemName: '',
    }

    componentDidMount() {
        const id = (this.props.match.params.warehouseId)
        axios.get(`http://localhost:8080/warehouses/${id}`)
            .then((res) => {
                this.setState({
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
                    this.setState({
                        ...this.state,
                        warehouseContact: res.data.find((warehouse) => {
                            return warehouse.id === id
                        }),
                        show: true
                    })
                })
                .catch((error) => console.error(error))
        }
    }

    hideModal = () => {
        this.setState({
            modalShow: false
        })
    }

    deleteItem = (itemId) => {
        axios.delete(`http://localhost:8080/inventories/${itemId}`)
            .then(res => {
                this.setState({
                    warehouse: res.data
                })
                this.hideModal()
            })
            .catch(err => console.error(err))
    }

    clickTrash = (e) => {
        this.setState({
            modalShow: true,
            selectedItemName: e.target.name,
            selectedItemId: e.target.id
        })
    }

    render() {
        const id = this.props.match.params.warehouseId
        const itemObj = {
            name: `${this.state.selectedItemName} inventory item`,
            place: 'inventory list',
            deleteId: this.state.selectedItemId
        }

        return (
            <section className='warehouse-inv'>
                <Modal
                    show={this.state.modalShow}
                    hideModal={this.hideModal}
                    infoObj={itemObj}
                    deleteHandler={this.deleteItem}
                />
                <div className='warehouse-inv__background'></div>
                <section className='warehouse-inv__inner'>
                    <PageHeaderB
                        headerTitle={this.state.warehouseContact.name}
                        prevPageUrl='/'
                        editUrl={`/warehouses/${id}/edit`}
                    />
                    <WarehouseInvContact warehouseContact={this.state.warehouseContact} show={this.state.show} />
                    <WarehouseInvList
                        warehouse={this.state.warehouse}
                        clickTrash={this.clickTrash}
                        {...this.props}
                    />
                </section>
            </section>
        );
    }
}

export default WarehouseDetails;