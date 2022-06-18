import './ButtonEdit.scss';
import editIcon from '../../assets/icons/edit-white.svg'
import { Link } from 'react-router-dom';

// button takes prop of path so when it's invoked (in PageHeaderB), you can enter whatever path you want it to link to

function ButtonEdit({path}) {

    return (
            <Link className='button-edit' to={path}>
                <img className='button-edit__icon' src={editIcon} alt='edit icon' />
                <p className='button-edit__action'>Edit</p>
            </Link>
    );
}

export default ButtonEdit;