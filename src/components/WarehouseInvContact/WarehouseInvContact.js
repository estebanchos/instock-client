import './WarehouseInvContact.scss';

function WarehouseInvContact({ warehouseContact, show }) {
    const showHideClass = show ? "warehouse-inv__display-block" : "warehouse-inv__display-none"
   
    return ( 
        <div className={showHideClass}>
            <div className='warehouse-inv__address'>
                <p className='warehouse-inv__title'>WAREHOUSE ADDRESS:</p>
                <p className='warehouse-inv__input'>
                    {warehouseContact.address}, {warehouseContact.city}, {warehouseContact.country}
                </p>
            </div>
            <div className='warehouse-inv__contact'>
                <div className='warehouse-inv__contact-name'>
                    <p className='warehouse-inv__title'>CONTACT NAME:</p>
                    <p className='warehouse-inv__input'>
                        {warehouseContact.contact?.name}
                    </p>
                </div>
                <div className='warehouse-inv__contact-info'>
                    <p className='warehouse-inv__title'>CONTACT INFORMATION:</p>
                    <p className='warehouse-inv__input'>
                        {warehouseContact.contact?.phone} {warehouseContact.contact?.email}
                    </p>
                </div>
            </div>
        </div>
     );
}

export default WarehouseInvContact;