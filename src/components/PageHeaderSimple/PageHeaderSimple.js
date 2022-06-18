import './PageHeaderSimple.scss';
import goBackIcon from '../../assets/icons/arrow-back.svg'
import {Link} from 'react-router-dom';



// give it path prop so when calling in you can direct to either the warehouse or inventory item you were on
function PageHeaderSimple({ title, path }) {
    
    return (
        <div className='page-header'>
            <div className='page-header__content'>
                <Link to={path}>
                    <img 
                    className='page-header__icon' 
                    src={goBackIcon} 
                    alt='go back icon' 
                    />
                </Link>
                <h1 className='page-header__title'>{title}</h1>
            </div>
        </div>
    );
}

export default PageHeaderSimple;