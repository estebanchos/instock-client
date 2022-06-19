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
                        <PageHeaderSimple title='Edit Warehouse' path={`/warehouses/${warehouseId}`}/>
                        <WarehouseForm prompt="Save" warehouseId={warehouseId} {...props} />
                    </div>
            </main>
        </>
     );
}

export default EditWarehousePage;
