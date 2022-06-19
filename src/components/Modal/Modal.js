import './Modal.scss';
import Button from '../Button/Button';
import closeIcon from '../../assets/icons/close.svg';

// Modal can be used for both inventory and warehouse pages

function Modal( { show, hideModal, infoObj, deleteHandler }) {
    const showHideClass = show ? "modal display-block" : "modal display-none" 
    const { name, place, deleteId } = infoObj
   
    return (  
        <div className={showHideClass}>
            <div className='modal__main'>
                <div className='modal__main-content'>
                    <div className='modal__main-upper'>
                        <h2 className='modal__main-title'>Delete {name}?</h2>
                        <p className='modal__main-text'>
                            Please confirm that you'd like to delete the {name} from the {place}.
                            You won't be able to undo this action.    
                        </p>
                    </div>
                    <div className='modal__buttons'>
                        <div className='modal__buttons-cancel'>
                            <Button prompt='Cancel' handler={hideModal} />
                        </div>
                        <div className='modal__buttons-delete'>
                            <Button 
                            color='red' 
                            prompt='Delete' 
                            handler={() => deleteHandler(deleteId)}
                             /> 
                        </div>
                    </div>
                    <div className='modal__close'>
                        <img src={closeIcon} alt='close-icon' onClick={hideModal} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;