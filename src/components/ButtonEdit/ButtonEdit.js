import './ButtonEdit.scss';
import editIcon from '../../assets/icons/edit-white.svg'

function ButtonEdit() {

    return (
        <button className='button-edit'>
            <img className='button-edit__icon' src={editIcon} alt='edit icon' />
            <p className='button-edit__action'>Edit</p>
        </button>
    );
}

export default ButtonEdit;