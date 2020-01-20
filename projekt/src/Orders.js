import React, { Component } from 'react'
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel'


class Orders extends Component {
    constructor() {
        super();
        this.state = {
            loaded: false,
            orders: []
        }
    }

    componentDidMount() {

        this.setState({
            loaded: false
        });
        axios("http://localhost:8080/orders").then(res => {
            this.setState({ loaded: true, orders: res.data });
        }).catch(error => console.error('Error', error));



    }

    render() {
        console.log(this.state.orders)
        if (this.state.orders.length > 0) {

            return (
                <div className="container mt-5">
                    <div className="row col-md-12 m-4">

                        {this.state.orders.map((obj, idx) => {
                            return (<div className="col-md-6 mt-4">
                                <div className="card w-100 col-md m-10" key={idx}> {obj.name}<br></br>
                                {obj.surname} <br></br>
                                 {obj.street} </div>
                            </div>)
                        })
                        }

                    </div>
                </div>
            )
        }
        return (<div></div>)

    }
}

export default Orders