import './InventoryList.scss';
import InventoryItem from '../InventoryItem/InventoryItem';
import sort from '../../assets/icons/sort.svg';

function InventoryList ({ inventories, deleteClick }){
    return (
        <section className='inventory-section'>
            <div className='inventory-list__filters'>
                <div className='inventory-list__flex-left'>
                <p className='inventory-list__filters-title'>
                    Inventory Item
                    <img className='inventory-list__filters-icon'src={sort} alt='arrows'/>
                </p>
                <p className='inventory-list__filters-title'>
                    Cateogry
                    <img className='inventory-list__filters-icon' src={sort} alt='arrows'/>
                </p>
                </div>
                <div className='inventory-list__flex-right'>
                <p className='inventory-list__filters-title'>
                    Status
                    <img className='inventory-list__filters-icon' src={sort} alt='arrows'/>
                </p>
                <p className='inventory-list__filters-title'>
                    Qty
                    <img className='inventory-list__filters-icon' src={sort} alt='arrows'/>
                </p>
                <p className='inventory-list__filters-title'>
                    Warehouse
                    <img className='inventory-list__filters-icon' src={sort} alt='arrows'/>
                </p>
                </div>
                <div className='inventory-list__flex-right--actions'>
                <p className='inventory-list__filters-title'>
                    Actions
                </p>
                </div>
                
            </div>

            <ul className='inventory-list'>
                {inventories.map((item) => {
                    return <li
                        className='inventory-list__item'
                        key={item.id}
                        >
                        <InventoryItem 
                            deleteClick={deleteClick}
                            itemName={item.itemName}
                            category={item.category}
                            status={item.status}
                            quantity={item.quantity}
                            warehouseName ={item.warehouseName}
                            id={item.id}
                        />
                    </li>
                })}
            </ul> 
        </section> 
    );
}

export default InventoryList;