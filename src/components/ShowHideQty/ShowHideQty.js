import './ShowHideQty.scss';
import InvalidMessage from '../InvalidMessage/InvalidMessage';

function showHideQty ({showHide, isValidQuantity, quantity, handleChange}) {
    
    const showHideQty = showHide ? 'inventory-item__input-container--visible' : 'inventory-item__input-container--hidden'

    return (
        <div className={showHideQty}>
            <label className='inventory-item__label' htmlFor=''>Quantity</label>
                <input
                    className={isValidQuantity ? 'input-type__quantity' : 'input-type__quantity--error'}
                    name='quantity'
                    id='quantity'
                    // value={quantity}
                    // onChange={handleChange}
                />
                
        </div>
)

}


export default showHideQty;
