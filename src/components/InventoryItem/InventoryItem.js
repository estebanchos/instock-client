import React from 'react';
import './InventoryItem.scss';
import {Link} from 'react-router-dom';
import deleteIcon from '../../assets/icons/delete-outline.svg';
import editIcon from '../../assets/icons/edit-blue.svg';
import chevRight from '../../assets/icons/chevron-right.svg';
// import InventoryItem from '..InventoryItem/InventoryItem.js';

// // DATA
// import axios from 'axios';
// const inventoriesURL = 'http://localhost:8080/inventories';

function InventoryItem ({ itemName, category, status, quantity, warehouseName }){

    return (
        <div className='item'>
            <div className='item__info'>
                <div className='item__info-left'>
                    <h4 className='item__subheader'>Inventory Item</h4>
                        <Link to={'/item'} className='item__link'>
                            <p className='item__item--clickable'>{itemName}</p>
                            <img className='item__chevron' src={chevRight} alt='arrow right'/>
                        </Link>
                    <h4 className='item__subheader'>Category</h4>
                    <p className='item__item'>{category}</p>
                </div>
                <div className='item__info-right'>
                    <h4 className='item__subheader'>Status</h4>
                    {/* {if (status==="In Stock"{

                    })

                    } */}
                    <p className='item__item--stock'>{status}</p>
                    <h4 className='item__subheader'>Qty</h4>
                    <p className='item__item'>{quantity}</p>
                    <h4 className='item__subheader'>Warehouse</h4>
                    <p className='item__item'>{warehouseName}</p>
                </div>
            </div>
            <div className='item__icons'>
                <img src={deleteIcon} alt='delete' />
                <img src={editIcon} alt='edit' />
            </div>
        </div>
    )
    

}

export default InventoryItem;