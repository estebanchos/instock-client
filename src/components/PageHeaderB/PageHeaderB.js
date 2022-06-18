import './PageHeaderB.scss';
import arrowBack from '../../assets/icons/arrow-back.svg';
import ButtonEdit from '../ButtonEdit/ButtonEdit';
import { Link } from 'react-router-dom';

// Component takes prop for whatever the title of the page needs to be
function PageHeaderB({ headerTitle, path }) {
    return (
        <div className='page-head__container'>
            <div className='page-head__left'>
                <Link className='page-head__link' to={path}>
                    <img className='arrow-back' src={arrowBack} alt='back arrow'></img>
                </Link>
                <h1 className='page-head__title'>{headerTitle}</h1>
            </div>
            <div className='button__container'>
                <ButtonEdit path="/inventories/inventory/edit"/>
            </div>
        </div>
    );
}
export default PageHeaderB;