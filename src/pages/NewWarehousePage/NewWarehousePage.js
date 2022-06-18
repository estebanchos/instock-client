import PageHeaderSimple from '../../components/PageHeaderSimple/PageHeaderSimple';
import WarehouseForm from '../../components/WarehouseForm/WarehouseForm';
import './NewWarehousePage.scss';


function NewWarehousePage() {
    return ( 
        <>
            <main>
                <PageHeaderSimple title='Add New Warehouse' path="/"/>
                <WarehouseForm />
            </main>
        </>
     );
}

export default NewWarehousePage;