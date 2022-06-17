import './Modal.scss';
import Button from '../Button/Button';

function Modal( { show, warehouseName }) {
    const showHideClass = show ? "modal display-block" : "modal display-none" 

    return (  
        <div className={showHideClass}>
            <div className='modal__main'>
                <div className='modal__main-upper'>
                    <h2 className='modal__main-title'>Delete {warehouseName} warehouse?</h2>
                    <p className='modal__main-text'>
                        Please confirm that you'd like to delete the {warehouseName} from the list of warehouses.
                        You wont' be able to undo this action.    
                    </p>
                </div>
                <div className='modal__buttons'>
                   <Button color='red' prompt='Delete' /> 
                
                </div>
            </div>
        </div>
    );
}

export default Modal;