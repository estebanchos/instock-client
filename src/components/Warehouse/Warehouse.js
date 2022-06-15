import { NavLink } from 'react-router-dom';
import './Warehouse.scss';
import chevRight from '../../assets/icons/chevron-right.svg';
import deleteIcon from '../../assets/icons/delete-outline.svg';
import editIcon from '../../assets/icons/edit.svg';

function Warehouse({ name, address, city, country, contactName, phone, email }) {
    return (  
        <div className='warehouse'>
            <div className='warehouse__name'>
                <h4 className='warehouse__title'>WAREHOUSE</h4>
                <NavLink to={'/'} className='warehouse__link'>
                    <p className='warehouse__input'>
                        {name}
                        <img src={chevRight} alt='chev-right'/>
                    </p>
                </NavLink>
            </div>
            <div className='warehouse__address'>
                <h4 className='warehouse__title'>ADDRESS</h4>
                <p className='warehouse__input'>{address},{city},{country}</p>
            </div>
            <div className='warhouse__contact-name'>
                <h4 className='warehouse__title'>CONTACT NAME</h4>
                <p className='warehouse__input'>{contactName}</p>
            </div>
            <div className='warhouse__contact-info'>
                <h4 className='warehouse__title'>CONTACT INFORMATION</h4>
                <p className='warehouse__input'>{phone}{email}</p>
            </div>
            <div className='warehouse__icons'>
                <img src={deleteIcon} alt='delete'/>
                <img src={editIcon} alt='edit' />
            </div>
        </div>
    );
}

export default Warehouse;