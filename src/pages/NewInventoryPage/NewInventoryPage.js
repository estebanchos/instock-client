import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import InventoryForm from '../../components/InventoryForm/InventoryForm';
import PageHeaderSimple from '../../components/PageHeaderSimple/PageHeaderSimple';
import './NewInventoryPage.scss';


function NewInventoryPage() {
    return ( 
        <>
            <main>
                <PageHeaderSimple title='Add New Inventory Item' />
                <InventoryForm />
            </main>
        </>
     );
}

export default NewInventoryPage;