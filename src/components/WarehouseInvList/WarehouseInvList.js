import './WarehouseInvList.scss';
import sort from '../../assets/icons/sort.svg';
import InvItem from '../InvItem/InvItem'

function WarehouseInvList({ warehouse, clickTrash }) {
    return ( 
        <section className='warehouse-inv'>
            <div className='warehouse-inv__titles'>
                <p className='warehouse-inv__titles-title warehouse-inv__titles--name'>
                    INVENTORY ITEM
                    <img className='warehouse-inv__titles-icon'src={sort} alt='arrows'/>
                </p>
                <p className='warehouse-inv__titles-title warehouse-inv__titles--category'>
                    CATEGORY
                    <img className='warehouse-inv__titles-icon' src={sort} alt='arrows'/>
                </p>
                <p className='warehouse-inv__titles-title warehouse-inv__titles--status'>
                    STATUS
                    <img className='warehouse-inv__titles-icon' src={sort} alt='arrows'/>
                </p>
                <p className='warehouse-inv__titles-title warehouse-inv__titles--qty'>
                    QUANTITY
                    <img className='warehouse-inv__titles-icon' src={sort} alt='arrows'/>
                </p>
                <p className='warehouse-inv__titles-title warehouse-inv__titles--action'>
                    ACTIONS
                </p>
            </div>
            <ul className='warehouse-inv__items'>
                {warehouse.map((item) => {
                    return <li
                        className='warehouse-inv__item'
                        key={item.id}
                        >
                        <InvItem
                            clickTrash={clickTrash}
                            category={item.category}
                            id={item.id}
                            name={item.itemName}
                            status={item.status}
                            quantity={item.quantity}
                        />
                    </li>
                })}
            </ul>
        </section>
     );
}

export default WarehouseInvList;