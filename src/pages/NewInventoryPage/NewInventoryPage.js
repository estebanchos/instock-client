import InventoryForm from '../../components/InventoryForm/InventoryForm';
import PageHeaderSimple from '../../components/PageHeaderSimple/PageHeaderSimple';
import './NewInventoryPage.scss';


function NewInventoryPage() {
    return ( 
        <>
            <main>
                <PageHeaderSimple title='Add New Inventory Item' />
                <InventoryForm prompt="+ Add Item"/>
            </main>
        </>
     );
}

export default NewInventoryPage;