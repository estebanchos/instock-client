import PageHeaderSimple from '../../components/PageHeaderSimple/PageHeaderSimple';
import WarehouseForm from '../../components/WarehouseForm/WarehouseForm';
import './NewWarehousePage.scss';


function NewWarehousePage(props) {
    return ( 
        <>
            <main className="new-warehouse">
                <div className='new-warehouse__background'></div>
                    <div className='new-warehouse__foreground'>
                        <PageHeaderSimple title='Add New Warehouse' path="/"/>
                        <WarehouseForm prompt="+ Add Warehouse" {...props} />
                    </div>
            </main>
        </>
     );
}

export default NewWarehousePage;