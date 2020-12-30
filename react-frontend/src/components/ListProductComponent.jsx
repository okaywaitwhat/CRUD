import React, { Component } from 'react'
import ProductService from '../services/ProductService'

class ListProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
        this.addProduct = this.addProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct(id){
        ProductService.deleteProduct(id).then( res => {
            this.setState({products: this.state.products.filter(product => product.id !== id)});
        });
    }
    viewProduct(id){
        this.props.history.push(`/view-product/${id}`);
    }
    editProduct(id){
        this.props.history.push(`/update-product/${id}`);
    }

    componentDidMount(){
        ProductService.getProducts().then((res) => {
            console.log(res.data)
            this.setState({ products: res.data});
        });
    }

    addProduct(){
        this.props.history.push('/add-product/_add');
    }

    render() {
        return (
            <div>
                 <h4 className="text-center my-4">Products List</h4>
                 <div className = "row">
                    <button className="btn btn-primary btn-sm" onClick={this.addProduct}>Add Product</button>
                 </div>
                 <br></br>
                 <div className = "row">
                 <table className="table table-bordered table-sm table-hover table-striped">
                 <thead className="thead">
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Brand Id</th>
                                    <th>Brand Name</th>
                                    <th>Cost</th>
                                    <th>Price</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.products.map(
                                        product => 
                                        <tr key = {product.id}>
                                             <td> {product.id} </td>
                                             <td> {product.name} </td>   
                                             <td> {product.brand.id} </td>   
                                             <td> {product.brand.name}</td>
                                             <td> {product.cost}</td>
                                             <td> {product.price}</td>
                                             <td>
                                                 <button onClick={ () => this.editProduct(product.id)} className="btn btn-primary btn-sm">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProduct(product.id)} className="btn btn-secondary btn-sm">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewProduct(product.id)} className="btn btn-primary btn-sm">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                 </div>
            </div>
        )
    }
}

export default ListProductComponent
