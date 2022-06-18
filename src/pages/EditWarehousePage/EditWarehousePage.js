import WarehouseForm from '../../components/WarehouseForm/WarehouseForm';
import PageHeaderSimple from '../../components/PageHeaderSimple/PageHeaderSimple';
import './EditWarehousePage.scss';


function EditWarehousePage(props) {
    const warehouseId = props.match.params.warehouseId

    return ( 
        <>
            <main className="edit-warehouse">
                <div className='edit-warehouse__background'></div>
                    <div className='edit-warehouse__foreground'>
                        <PageHeaderSimple title='Edit Warehouse Item' path={`/warehouses/${warehouseId}`}/>
                        <WarehouseForm prompt="Save" />
                    </div>
            </main>
        </>
     );
}

export default EditWarehousePage;
