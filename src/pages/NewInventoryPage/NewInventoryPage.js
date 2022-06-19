import InventoryForm from '../../components/InventoryForm/InventoryForm';
import PageHeaderSimple from '../../components/PageHeaderSimple/PageHeaderSimple';
import './NewInventoryPage.scss';


function NewInventoryPage(props) {
    return ( 
        <>
            <main className='new-inv'>
            <div className='new-inv__background'></div>
                <div className='new-inv__foreground'>
                    <PageHeaderSimple title='Add New Inventory Item' path="/inventories"/>
                    <InventoryForm prompt="+ Add Item" {...props}/>
                </div>
            </main>
        </>
     );
}

export default NewInventoryPage;