import './PageHeaderB.scss';
import arrowBack from '../../assets/icons/arrow-back.svg';
import ButtonEdit from '../ButtonEdit/ButtonEdit';
import { Link } from 'react-router-dom';

// Takes props so when invoked you can pass it: custom headerTitle for the page, prevPageUrl for the page you want the 'back' arrow to link to, url with id for object you want to edit

function PageHeaderB({ headerTitle, prevPageUrl, editUrl }) {
    return (
        <div className='page-head__container'>
            <div className='page-head__left'>
                <Link className='page-head__link' to={prevPageUrl}>
                    <img className='arrow-back' src={arrowBack} alt='back arrow'></img>
                </Link>
                <h1 className='page-head__title'>{headerTitle}</h1>
            </div>
            <div className='button__container'>
            <ButtonEdit path={editUrl} />
            </div>
        </div>
    );
}
export default PageHeaderB;