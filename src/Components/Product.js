import React from 'react'

class Product extends React.Component {

    render(){
        return (
            <div>
                <h1> {this.props.product.name} </h1>
                <h2> {this.props.product.price} </h2>
                <p> {this.props.product.description} </p>  <hr />
            </div>
        )
    }
}

export default Product