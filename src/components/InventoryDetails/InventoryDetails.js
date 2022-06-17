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
                    <PageHeaderB headerTitle={this.state.item.itemName} path="/inventories"/>
                    <div className='details'>
                            <div className='details__flex-wrapper'>
                                {/* ITEM DESCRIPTION */}
                                <div className='details__single-wrapper'>
                                    <h4 className='details__subheader'>Item description:</h4>
                                        <p className='details__text'>{this.state.item.description}</p>
                                </div>
                                {/* CATEGORY */}
                                <div className='details__single-wrapper'>
                                    <h4 className='details__subheader'>Category:</h4>
                                        <p className='details__text'>{this.state.item.category}</p>
                                </div>
                            </div>

                            <div className='details__flex-wrapper details__flex-wrapper--column'>
                                <div className=' details__flex-wrapper--row'>
                                    {/* STATUS */}
                                    <div className='details__single-wrapper'>
                                        <h4 className='details__subheader'>Status:</h4>
                                        <InOutStock status={this.state.item.status}/>
                                    </div>

                                    {/* QUANTITY */}
                                    <div className='details__single-wrapper'>
                                        <h4 className='details__subheader'>Quantity:</h4>
                                        <p className='details__text'>{this.state.item.quantity}</p>
                                    </div>
                                </div>

                    
                                <div className='details__flex-wrapper--row'>
                                        {/* WAREHOUSE */}
                                        <div className='details__single-wrapper'>
                                            <h4 className='details__subheader'>Warehouse:</h4>
                                            <p className='details__text'>{this.state.item.warehouseName}</p>
                                        </div>
                                </div>
                            </div>
                    </div>
                </section>
        </main>
        );
    }
}


export default InventoryDetails;