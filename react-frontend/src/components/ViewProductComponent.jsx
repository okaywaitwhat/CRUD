import React, { useState, useEffect } from 'react'
import ProductService from '../services/ProductService'

interface Product {
    name: string
    brand: {
        id: string
        name: string
    }
    price: number
    cost: number
}

export const ViewProductComponent = (props) => {
    const [product, setProduct] = useState<Product>(null)
    const id = props.match.params.id

    useEffect(() => {
        ProductService.getProductById(this.state.id).then( res => {
            setProduct(res.data[0]);
        })
    }, [])

    return (
        <div>
            <br></br>
            <div className = "card col-md-6 offset-md-3">
                <h3 className = "text-center"> View Product Details</h3>
                <div className = "card-body">
                <div className = "row">
                        <label> Id: </label>
                        <div> { product.id }</div>
                    </div>
                    <div className = "row">
                        <label> Name: </label>
                        <div> { product.name }</div>
                    </div>
                    <div className = "row">
                        <label> Brand ID: </label>
                        <div> { product.brand?.id }</div>
                    </div>
                    <div className = "row">
                        <label> Brand Name: </label>
                        <div> { product.brand?.name }</div>
                    </div>
                    <div className = "row">
                        <label> Cost: </label>
                        <div> { product.cost }</div>
                    </div>
                    <div className = "row">
                        <label> Price: </label>
                        <div> { product.price }</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProductComponent
