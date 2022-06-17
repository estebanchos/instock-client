import './WarehouseInvList.scss';
import sort from '../../assets/icons/sort.svg';
import InvItem from '../InvItem/InvItem'

function WarehouseInvList({ warehouse }) {
    return ( 
        <section className='warehouse-inv'>
            <div className='warehouse-inv__titles'>
                <p className='warehouse-inv__titles-title warehouse-inv__titles--name'>
                    INVENTORY ITEM
                    <img className='warehouse-inv__titles-icon'src={sort} alt='arrows'/>
                </p>
                <p className='warehouse-inv__titles-title warehouse-inv__titles--address'>
                    CATEGORY
                    <img className='warehouse-inv__titles-icon' src={sort} alt='arrows'/>
                </p>
                <p className='warehouse-inv__titles-title warehouse-inv__titles--contact'>
                    STATUS
                    <img className='warehouse-inv__titles-icon' src={sort} alt='arrows'/>
                </p>
                <p className='warehouse-inv__titles-title warehouse-inv__titles--info'>
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