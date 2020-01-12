import React, { Component } from 'react';
import './App.css';
import ProductsList from './ProductsList';
import AddProduct from './AddProduct';
import Context from './Context';
import axios from 'axios';



class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            products: [],
            selectedProduct: null
        };
    }


    componentDidMount() {
        this.setState({
            loaded: false
        });
        axios("http://localhost:8080/products").then(res => {
            console.log(res.data);
            this.setState({ loaded: true, products: res.data });
        }).catch(error => console.error('Error', error));
    }

    onProductSelected = (selectedProduct) => {
        this.setState({
            selectedProduct
        });
    }
    onProductUpdate = (productData) => {
        axios({
            url: "http://localhost:8080/products",
            method: "PUT",
            headers: {
                Accept: 'application/json', 'Content-Type': 'application/json'
            },
            data: JSON.stringify(productData),
        }).then(res => {
            console.log(productData)
            if (res.status !== 304) {
                this.setState((prevState)=>{
                    let products=prevState.products;
                    products[this.state.selectedProduct]=productData;
                    return {
                        products: products,
                        selectedProduct: null
                    }
                })
            } else {
                throw new Error("Duplicate data");

            }
        }).catch(error => console.error('Error', error));
        

    }

    onProductAdd = (productData) => {
        let elem = {
            productName: productData.name,
            number: 6,
            shop: "aaa"
        }
        
        this.setState({
            show: false
        });

        axios({
            url: "http://localhost:8080/products",
            method: "POST",
            headers: {
                Accept: 'application/json', 'Content-Type': 'application/json'
            },
            data: JSON.stringify(elem),
        }).then(res => {
            if (res.status !== 304) {
                let list = this.state.products;
                list.push(elem);
                this.setState({
                    products: list
                });
            } else {
                throw new Error("Duplicate data");

            }
        }).catch(error => console.error('Error', error));
    }

    compare(a,b) {
        if(a.productName<b.productName) return -1;
        if(a.productName>b.productName) return 1;
        return 0;
    }
    sort = () => {
        let tmp = this.state.products.sort(this.compare);
        console.log(tmp)
        this.setState({
            products: tmp
        })
    }

    renderAdd() {
        if (this.state.show) return <AddProduct func={this.onProductAdd}/>;
    }

    handleClick(e) {
        if (this.state.show !== true) {
            this.setState({
                show: true
            })
        } else {
            this.setState({
                show: false
            })
        }
    }
    render() {
        return (

            <div>
                <ProductsList selectedProduct={this.onProductSelected}
                    updateProduct={this.onProductUpdate} products={this.state.products} sortfoo={this.sort}/>
                <button className="btn btn-dark" onClick={this.handleClick.bind(this)}>ADD</button>
                {this.renderAdd()}
            </div>
        )
    }
}

export default Products;
