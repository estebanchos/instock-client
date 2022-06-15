import Warehouse from '../Warehouse/Warehouse';
import './WarehouseList.scss';

function WarehouseList({ warehouses }) {
    return ( 
        <section className='warehouse-list'>
            <ul className='warehouse-list__items'>
                {warehouses.map((warehouse) => {
                    return <li
                        className='warehouse__item'
                        key={warehouse.id}
                        >
                        <Warehouse
                            name={warehouse.name}
                            address={warehouse.address}
                            city={warehouse.city}
                            country={warehouse.country}
                            contactName={warehouse.contact.name}
                            tel={warehouse.contact.phone}
                            email={warehouse.contact.email}
                        />
                        </li>
                })}
            </ul>
        </section>
     );
}

export default WarehouseList;