import './PageHeaderSimple.scss';
import goBackIcon from '../../assets/icons/arrow-back.svg'
import {Link} from 'react-router-dom';

// Takes path prop so when invoked clicking arrow can direct to either warehouse or inventory item

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