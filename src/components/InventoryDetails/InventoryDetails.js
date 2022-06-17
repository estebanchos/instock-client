import React from 'react';
import './InventoryDetails.scss';
import InOutStock from '../InOutStock/InOutStock';
import PageHeaderB from '../PageHeaderB/PageHeaderB';
import axios from 'axios';

const inventoriesURL = "http://localhost:8080/inventories/"

class InventoryDetails extends React.Component {
    state = { 
        item: [],
     } 

    componentDidMount() {
        const clickedItemId = (this.props.match.params.Id)
        axios.get(inventoriesURL+clickedItemId)
            .then((res) => {
                console.log(res)
                this.setState ({
                    item: res.data
                
            })})
            .catch((error) => console.error(error))
    }

    render() { 
        if(!this.state.item) return "loading"
        return (
            <main className='details-main'>
                <div className='details-main__background'></div>
                <section className='details-main__foreground'>
                    <PageHeaderB headerTitle={this.state.item.itemName}/>

                <div className='details__flex-wrapper'>
                    {/* ITEM DESCRIPTION */}
                    <div className='details'>
                            <div className='details__single-wrapper'>
                                <h4 className='details__subheader'>Item description</h4>
                                    <p className='details__text'>{this.state.item.description}</p>
                            </div>
                    </div>

                    {/* CATEGORY */}
                    <div className='details'>
                            <div className='details__single-wrapper'>
                                <h4 className='details__subheader'>Category</h4>
                                    <p className='details__text'>{this.state.item.category}</p>
                            </div>
                    </div>
                </div>


                <div className='details__flex-wrapper'>
                    {/* STATUS */}
                    <div className='details'>
                            <div className='details__single-wrapper'>
                                <h4 className='details__subheader'>Status</h4>
                                <InOutStock status={this.state.item.status}/>
                            </div>
                    </div>

                    {/* QUANTITY */}
                    <div className='details'>
                            <div className='details__single-wrapper'>
                                <h4 className='details__subheader'>Quantity</h4>
                                <p className='details__text'>{this.state.item.quantity}</p>
                            </div>
                    </div>

                    {/* WAREHOUSE */}
                    <div className='details'>
                            <div className='details__single-wrapper'>
                                <h4 className='details__subheader'>Warehouse</h4>
                                <p className='details__text'>{this.state.item.warehouseName}</p>
                            </div>
                    </div>
                </div>

                </section>
        </main>
        );
    }
}





// function InventoryDetails ({ description, category, status, quantity, warehouseName }){

//     return (
//         <main className='details-main'>
//             <PageHeaderB />

//             {/* ITEM DESCRIPTION */}
//             <div className='details'>
//                 <div className='details__flex-wrapper'>
//                     <div className='details__single-wrapper'>
//                         <h4 className='details__subheader'>Item description</h4>
//                             <p className='details__text'>{description}</p>
//                     </div>
//                 </div>
//             </div>

//             {/* CATEGORY */}
//             <div className='details'>
//                 <div className='details__flex-wrapper'>
//                     <div className='details__single-wrapper'>
//                         <h4 className='details__subheader'>Category</h4>
//                             <p className='details__text'>{category}</p>
//                     </div>
//                 </div>
//             </div>

//             {/* STATUS */}
//             <div className='details'>
//                 <div className='details__flex-wrapper'>
//                     <div className='details__single-wrapper'>
//                         <h4 className='details__subheader'>Status</h4>
//                         <InOutStock status={status}/>
//                     </div>
//                 </div>
//             </div>

//              {/* QUANTITY */}
//              <div className='details'>
//                 <div className='details__flex-wrapper'>
//                     <div className='details__single-wrapper'>
//                         <h4 className='details__subheader'>Quantity</h4>
//                         <p className='details__text'>{quantity}</p>
//                     </div>
//                 </div>
//             </div>

//             {/* WAREHOUSE */}
//             <div className='details'>
//                 <div className='details__flex-wrapper'>
//                     <div className='details__single-wrapper'>
//                         <h4 className='details__subheader'>Warehouse</h4>
//                         <p className='details__text'>{warehouseName}</p>
//                     </div>
//                 </div>
//             </div>

//         </main>
//     )
// }

export default InventoryDetails;