import InventoryForm from '../../components/InventoryForm/InventoryForm';
import PageHeaderSimple from '../../components/PageHeaderSimple/PageHeaderSimple';
import './NewInventoryPage.scss';


function NewInventoryPage(props) {
    return ( 
        <>
            <main>
                <PageHeaderSimple title='Add New Inventory Item' path="/inventories"/>
                <InventoryForm prompt="+ Add Item" {...props}/>
            </main>
        </>
     );
}

export default NewInventoryPage;