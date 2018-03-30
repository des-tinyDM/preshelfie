import React, {Component} from 'react';
import Product from '../Product/Product'

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        const {inventoryList} = this.props;
        const productArray = inventoryList.map( (e,i) => {
            return (
            <Product 
                key={i} 
                url={e.imageurl} 
                productName={e.productName} 
                price={e.price} 
            />
            )
        })
        return (
        <div>
            {productArray}
        </div>
        )
    }
}
export default Dashboard