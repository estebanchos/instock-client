import './InventoryList.scss';
import InventoryItem from '../InventoryItem/InventoryItem';
import sort from '../../assets/icons/sort.svg';

function InventoryList ({ inventories, deleteClick }){
    return (
        <section className='inventory-section'>
            <div className='inventory-list__filters'>
                <p className='inventory-list__filters-title'>
                    INVENTORY ITEM
                    <img className='inventory-list__filters-icon'src={sort} alt='arrows'/>
                </p>
                <p className='inventory-list__filters-title'>
                    CATEGORY
                    <img className='inventory-list__filters-icon' src={sort} alt='arrows'/>
                </p>
                <p className='inventory-list__filters-title'>
                    STATUS
                    <img className='inventory-list__filters-icon' src={sort} alt='arrows'/>
                </p>
                <p className='inventory-list__filters-title'>
                    QTY
                    <img className='inventory-list__filters-icon' src={sort} alt='arrows'/>
                </p>
                <p className='inventory-list__filters-title'>
                    WAREHOUSE
                    <img className='inventory-list__filters-icon' src={sort} alt='arrows'/>
                </p>
                <p className='inventory-list__filters-title'>
                    ACTIONS
                </p>
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