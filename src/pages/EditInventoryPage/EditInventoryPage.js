import InventoryForm from '../../components/InventoryForm/InventoryForm';
import PageHeaderSimple from '../../components/PageHeaderSimple/PageHeaderSimple';
import './EditInventoryPage.scss';


function EditInventoryPage(props) {
    const itemId = props.match.params.inventoryId

    return ( 
        <>
            <main className="edit-inv">
                <div className='edit-inv__background'></div>
                    <div className='edit-inv__foreground'>
                        <PageHeaderSimple title='Edit Inventory Item' path={`/inventories/${itemId}`}/>
                        <InventoryForm prompt="Save" />
                    </div>
            </main>
        </>
     );
}

export default EditInventoryPage;

// 