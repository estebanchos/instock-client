import React from 'react';
import './InventoryItem.scss';
import {Link} from 'react-router-dom';
import deleteIcon from '../../assets/icons/delete-outline.svg';
import editIcon from '../../assets/icons/edit-blue.svg';
import chevRight from '../../assets/icons/chevron-right.svg';
import InOutStock from '../InOutStock/InOutStock';
// import InventoryItem from '..InventoryItem/InventoryItem.js';

// // DATA
// import axios from 'axios';
// const inventoriesURL = 'http://localhost:8080/inventories'

function InventoryItem ({ itemName, category, status, quantity, warehouseName }){

    return (
        <div className='item'>
            <div className='item__info'>
                <div className='item__info-left'>
                    <h4 className='item__subheader'>Inventory Item</h4>
                    <div className='item__item-wrapper'>
                        <Link to={'/item'} className='item__link'>
                            <p className='item__item--clickable'>{itemName}</p>
                            <img className='item__chevron' src={chevRight} alt='arrow right'/>
                        </Link>
                    </div>
                    <h4 className='item__subheader'>Category</h4>
                    <div className='item__item-wrapper'>
                        <p className='item__item'>{category}</p>
                    </div>
                </div>
                <div className='item__info-right'>
                    <h4 className='item__subheader'>Status</h4>
                    <div className='item__item-wrapper'>
                        <InOutStock status={status}/>
                    </div>
                    <h4 className='item__subheader'>Qty</h4>
                    <div className='item__item-wrapper'>
                        <p className='item__item'>{quantity}</p>
                    </div>
                    <h4 className='item__subheader'>Warehouse</h4>
                    <div className='item__item-wrapper'>
                        <p className='item__item'>{warehouseName}</p>
                    </div>
                </div>
            </div>
            <div className='item__icons'>
                <img className='item__icons-single' src={deleteIcon} alt='delete' />
                <img className='item__icons-single'
                src={editIcon} alt='edit' />
            </div>
        </div>
    )
    

}

export default InventoryItem;