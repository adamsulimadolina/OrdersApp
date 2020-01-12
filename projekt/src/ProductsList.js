import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class ProductsList extends Component {
    constructor() {
        super();
        this.state = {
            edit: false,
            prodIdToEdit: -1,
            editedProduct: null
        }
        console.log(this.props)
    }


    finishEdit(e) {
        this.setState({
            edit: false,
            prodIdToEdit: -1
        });
        this.props.updateProduct(this.state.editedProduct);
    }

    editProduct(id, e) {
        this.setState({
            edit: true,
            prodIdToEdit: id,
            editedProduct: this.props.products[id]
        });
        this.props.selectedProduct(id);
    }

    changeVal(key, e) {
        let newVal = e.target.value;
        let field = key;
        let pr = Object.assign({}, this.state.editedProduct);
        if (field === 0) pr.productName = newVal;
        else if (field === 1) pr.number = newVal;
        else pr.shop = newVal;
        this.setState({
            editedProduct: pr
        });
    }

    sort() {
        this.props.sortfoo();
    }

    render() {
        if (this.props.products.length > 0) {
            return (
                <div>
                    <button type="button" onClick={() => this.sort()}>Sort</button>
                    <ul className="list-group">
                        {this.props.products.map((product, id) => {
                            if (id !== this.state.prodIdToEdit)
                                return (
                                    <div key={id} className="container" >
                                        <li className="list-group-item active list-group-item-action" onClick={this.editProduct.bind(this, id)}>
                                            {product.productName}
                                            <span className="badge badge-primary badge-pill">DELETE</span>
                                        </li>
                                        <li className="list-group-item" onClick={this.editProduct.bind(this, id)}>
                                            {product.number}
                                        </li>
                                        <li className="list-group-item" onClick={this.editProduct.bind(this, id)}>
                                            {product.shop}
                                        </li>
                                        <br></br>

                                    </div>

                                )
                            else return (
                                <li key={id} className="list-group-item">
                                    <form>
                                        <div className="container">
                                            {Object.values(product).map((field, fieldKey) => {
                                                return <input className="list-group-item list-group-item-action" key={field} defaultValue={field} onChange={this.changeVal.bind(this, fieldKey)} />
                                            }, this)}
                                            {/* <input type="submit" value="Update" /> */}
                                            <button className="btn btn-dark" onClick={this.finishEdit.bind(this)} type="button">Update</button>
                                        </div>
                                    </form>
                                </li>
                            )
                        }
                        )}
                    </ul>
                </div>
            );

        }
        return (
            <p>No results!</p>

        );

    }

}

export default ProductsList;