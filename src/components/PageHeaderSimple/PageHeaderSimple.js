import './PageHeaderSimple.scss';
import goBackIcon from '../../assets/icons/arrow-back.svg'

function PageHeaderSimple({ title }) {
    
    const returnToInventory = () => {
        this.props.history.push('/inventories')
    }
    
    return (
        <div className='page-header'>
            <div className='page-header__background'></div>
            <div className='page-header__content'>
                <img 
                className='page-header__icon' 
                src={goBackIcon} 
                alt='go back icon' 
                onClick={returnToInventory}
                />
                <h1 className='page-header__title'>{title}</h1>
            </div>
        </div>
    );
}

export default PageHeaderSimple;