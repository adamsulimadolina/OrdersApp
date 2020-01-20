import React, { Component } from 'react'
import axios from 'axios'
import Zoom from 'react-reveal/Zoom';


class Orders extends Component {
    constructor() {
        super();
        this.state = {
            loaded: false,
            orders: []
        }
    }
    
    deleteMeal(id){
        this.state.deleteMeal(this.state.orders[id]);
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
                            return (<Zoom>
                                <div className="col-md-6 mt-4">
                                    <div className="card w-100 col-md m-10 p-0 border-0" key={idx}>
                                        <h5 className="card-header bg-secondary text-white" key={idx}>{obj.name} {obj.surname}</h5>
                                        <div>
                                            <div>
                                                {obj.city}
                                            </div>
                                            {obj.street} {obj.building_number}
                                        </div>

                                        <hr className="mt-1 mb-1 ml-0 mr-0"></hr>
                                        <h5>Zamówienie</h5>

                                        {obj.meals.map((position, idx) =>
                                            <li className="m-2" key={idx}>{position.counter}x {position.meal.name}</li>
                                        )}
                                        <button className="btn btn-dark" onClick={this.deleteMeal.bind(this, idx)}>Delete</button>
                                    </div>
                                </div>
                                </Zoom>                                
                                )    
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