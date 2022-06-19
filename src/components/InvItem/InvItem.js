import { NavLink } from 'react-router-dom';
import './InvItem.scss';
import chevRight from '../../assets/icons/chevron-right.svg';
import deleteIcon from '../../assets/icons/delete-outline.svg';
import editIcon from '../../assets/icons/edit-blue.svg';
import InOutStock from '../InOutStock/InOutStock';

function Warehouse({ name, id, quantity, status, category, clickTrash }) {

    return (  
        <div className='inv-item'>
            <div className='inv-item__name'>
                <h4 className='inv-item__title'>INVENTORY ITEM</h4>
                <NavLink to={`/inventories/${id}`} className='warehouse__link'>
                    <p className='inv-item__input'>
                        {name}
                        <img src={chevRight} alt='chev-right'/>
                    </p>
                </NavLink>
            </div>
            <div className='inv-item__status'>
                <h4 className='inv-item__title'>STATUS</h4>
                <InOutStock status={status}/>
            </div>
            <div className='inv-item__category'>
                <h4 className='inv-item__title'>CATEGORY</h4>
                <p className='inv-item__input'>{category}</p>
            </div>
            <div className='inv-item__quantity'>
                <h4 className='inv-item__title'>QTY</h4>
                <p className='inv-item__input'>{quantity}</p>
            </div>
            <div className='inv-item__icons'>
                <img className='inv-item__icons--icon'src={deleteIcon} alt='delete' onClick={clickTrash} name={name} id={id}/>
                <NavLink to={`/inventories/${id}/edit`}>
                    <img className='inv-item__icons--icon'src={editIcon} alt='edit' />
                </NavLink>
            </div>
        </div>
    );
}

export default Warehouse;