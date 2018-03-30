import React from 'react'

const Product = (props) => {
    return (<div> 
        <img src={props.url} />
        <p>{props.productName}</p>
        <p>{props.price}</p>
        {console.log(props)}
    </div>)
}

export default Product;