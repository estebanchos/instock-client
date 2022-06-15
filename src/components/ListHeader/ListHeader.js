import './ListHeader.scss';
import Button from '../Button/Button';

//listName = 'warehouses' or 'inventories'
//buttonText= what you would like button 
//text to be eg/ Add New Warehouses
function ListHeader({ listName, buttonText}) {
    return ( 
        <div className='list-header'>
            <div className='list-header__background'></div>
            <h1 className='list-header__title'>{listName}</h1>
            <div className='list-header__actions'>
                <input type='text' name='search' className='list-header__search'placeholder='Search...'></input>
                <Button className='list-header__button' color='blue' prompt={buttonText} />
            </div>
        </div>
     );
}

export default ListHeader;