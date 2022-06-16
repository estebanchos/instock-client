import './InvalidMessage.scss';
import errorIcon from '../../assets/icons/error.svg';

function InvalidMessage({isValid}) {
    return ( 
        <div className={isValid ? 'error-message--hidden' : 'error-message'}>
            <img className='error-message__icon' src={errorIcon} alt='' />
            <p className='error-message__message'>This field is required</p>
        </div>
     );
}

export default InvalidMessage;