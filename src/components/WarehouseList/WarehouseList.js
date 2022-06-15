import Warehouse from '../Warehouse/Warehouse';
import './WarehouseList.scss';
import sort from '../../assets/icons/sort.svg';

function WarehouseList({ warehouses }) {
    return ( 
        <section className='warehouse-list'>
            <div className='warehouse-list__titles'>
                <p className='warehouse-list__titles-title'>
                    WAREHOUSE
                    <img className='warehouse-list__titles-icon'src={sort} alt='arrows'/>
                </p>
                <p className='warehouse-list__titles-title'>
                    ADDRESS
                    <img className='warehouse-list__titles-icon' src={sort} alt='arrows'/>
                </p>
                <p className='warehouse-list__titles-title'>
                    CONTACT NAME
                    <img className='warehouse-list__titles-icon' src={sort} alt='arrows'/>
                </p>
                <p className='warehouse-list__titles-title'>
                    CONTACT INFORMATION
                    <img className='warehouse-list__titles-icon' src={sort} alt='arrows'/>
                </p>
                <p className='warehouse-list__titles-title warehouse-list__titles--action'>
                    ACTIONS
                    <img className='warehouse-list__titles-icon' src={sort} alt='arrows'/>
                </p>
            </div>
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