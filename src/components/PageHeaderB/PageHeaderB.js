import './PageHeaderB.scss';
import arrowBack from "../../assets/icons/arrow-back.svg";
import ButtonEdit from '../ButtonEdit/ButtonEdit';
import Button from '../Button/Button';

// Component takes for whatever the title of the page needs to be, should be pulled in from {warehouseName} ex. Washington but when testing can't get it to work yet. Could also hard code
// I think we should be able to add the icon to the button in sass as background image

function PageHeaderB({headerTitle}) {

    return (
        <div className="page-head__container">
            <img className='arrow-back' src={arrowBack} alt="back arrow"></img>
            <h1 className='page-head__title'>{headerTitle}</h1>
            <div className='button__container'>
                <ButtonEdit />
            </div>
        </div>
    );
}

export default PageHeaderB;