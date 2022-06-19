import PageHeaderSimple from '../../components/PageHeaderSimple/PageHeaderSimple';
import WarehouseForm from '../../components/WarehouseForm/WarehouseForm';
import './NewWarehousePage.scss';


function NewWarehousePage(props) {
    return ( 
        <>
            <main>
                <PageHeaderSimple title='Add New Warehouse' path="/"/>
                <WarehouseForm prompt="+ Add Warehouse" {...props} />
            </main>
        </>
     );
}

export default NewWarehousePage;