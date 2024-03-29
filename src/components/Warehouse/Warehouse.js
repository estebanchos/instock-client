import { NavLink } from 'react-router-dom';
import './Warehouse.scss';
import chevRight from '../../assets/icons/chevron-right.svg';
import deleteIcon from '../../assets/icons/delete-outline.svg';
import editIcon from '../../assets/icons/edit-blue.svg';
import {Link} from 'react-router-dom';

function Warehouse({ name, address, city, country, contactName, tel, email, id, deleteClick }) {
    return (  
        <div className='warehouse'>
            <div className='warehouse__name'>
                <h4 className='warehouse__title'>WAREHOUSE</h4>
                <NavLink to={`/warehouses/${id}`} className='warehouse__link'>
                    <p className='warehouse__input warehouse__input--bold'>
                        {name}
                        <img src={chevRight} alt='chev-right'/>
                    </p>
                </NavLink>
            </div>
            <div className='warehouse__address'>
                <h4 className='warehouse__title'>ADDRESS</h4>
                <p className='warehouse__input'>{address}, {city}, {country}</p>
            </div>
            <div className='warehouse__contact-name'>
                <h4 className='warehouse__title'>CONTACT NAME</h4>
                <p className='warehouse__input'>{contactName}</p>
            </div>
            <div className='warehouse__contact-info'>
                <h4 className='warehouse__title'>CONTACT INFORMATION</h4>
                <p className='warehouse__input'>{tel} {email}</p>
            </div>
            <div className='warehouse__icons'>
                <img className='warehouse__icons--icon'src={deleteIcon} alt='delete' onClick={deleteClick} name={name} id={id}/>
                <Link to={`/warehouses/${id}/edit`}>
                    <img className='warehouse__icons--icon'src={editIcon} alt='edit' />
                </Link>
            </div>
        </div>
    );
}

export default Warehouse;