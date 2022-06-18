import './ButtonEdit.scss';
import editIcon from '../../assets/icons/edit-white.svg'
import { Link } from 'react-router-dom';

function ButtonEdit({path}) {

    return (
            <Link className='button-edit__link' to={path}>
                <button className='button-edit'>
                <img className='button-edit__icon' src={editIcon} alt='edit icon' />
                <p className='button-edit__action'>Edit</p>
                </button>
            </Link>
    );
}

export default ButtonEdit;