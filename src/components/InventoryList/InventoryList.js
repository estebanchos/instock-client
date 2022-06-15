import './InventoryList.scss';
import InventoryItem from '../InventoryItem/InventoryItem'

function InventoryList ({ inventories }){
    return (
        <section className='inventory-list'>
            <ul className='inventory-list__list'>
                {inventories.map((item) => {
                    return <li
                        className='inventory__item'
                        key={item.id}
                        >
                        <InventoryItem 
                            itemName={item.itemName}
                            category={item.category}
                            status={item.status}
                            quantity={item.quantity}
                            warehouseName ={item.warehouseName}
                        />
                    </li>
                })}
            </ul>  
        </section>
    );
}

export default InventoryList;