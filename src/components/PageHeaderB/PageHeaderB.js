import './PageHeaderB.scss';
import arrowBack from '../../assets/icons/arrow-back.svg';
import ButtonEdit from '../ButtonEdit/ButtonEdit';

// Component takes prop for whatever the title of the page needs to be
function PageHeaderB({headerTitle}) {
    return (
        <div className='page-head__container'>
            <div className='page-head__left'>
                <img className='arrow-back' src={arrowBack} alt='back arrow'></img>
                <h1 className='page-head__title'>{headerTitle}</h1>
            </div>
            <div className='button__container'>
                <ButtonEdit />
            </div>
        </div>
    );
}
export default PageHeaderB;