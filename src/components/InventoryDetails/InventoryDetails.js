import React from 'react';
import './Inventorydetails.scss';
import InOutStock from '../InOutStock/InOutStock';

function InventoryDetails ({ description, category, status, quantity, warehouseName }){

    return (
        <main className='details-main'>
            <PageHeaderB />

            {/* ITEM DESCRIPTION */}
            <div className='details'>
                <div className='details__flex-wrapper'>
                    <div className='details__single-wrapper'>
                        <h4 className='details__subheader'>Item description</h4>
                            <p className='details__text'>{description}</p>
                    </div>
                </div>
            </div>

            {/* CATEGORY */}
            <div className='details'>
                <div className='details__flex-wrapper'>
                    <div className='details__single-wrapper'>
                        <h4 className='details__subheader'>Category</h4>
                            <p className='details__text'>{category}</p>
                    </div>
                </div>
            </div>

            {/* STATUS */}
            <div className='details'>
                <div className='details__flex-wrapper'>
                    <div className='details__single-wrapper'>
                        <h4 className='details__subheader'>Status</h4>
                        <InOutStock status={status}/>
                    </div>
                </div>
            </div>

             {/* QUANTITY */}
             <div className='details'>
                <div className='details__flex-wrapper'>
                    <div className='details__single-wrapper'>
                        <h4 className='details__subheader'>Quantity</h4>
                        <p className='details__text'>{quantity}</p>
                    </div>
                </div>
            </div>

            {/* WAREHOUSE */}
            <div className='details'>
                <div className='details__flex-wrapper'>
                    <div className='details__single-wrapper'>
                        <h4 className='details__subheader'>Warehouse</h4>
                        <p className='details__text'>{warehouseName}</p>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default InventoryDetails;