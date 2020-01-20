import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StringField from './StringField'
import NumberField from './NumberField';
import axios from 'axios';
import Zoom from 'react-reveal/Zoom';

class OrderConfirm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            meals: null,
            name: null,
            surname: null,
            street: null,
            building_number: null,
            house_number: null,
            phone_number: null
        }
    }


    onOrderAdd = (e) => {
        let newOrder = this.state;
        newOrder.meals = this.props.location.test;
        axios({
            url: "http://localhost:8080/orders",
            method: "POST",
            headers: {
                Accept: 'application/json', 'Content-Type': 'application/json'
            },
            data: JSON.stringify(newOrder),
        })
    }

    handleChange(field, val) {
        if (field === 1) this.setState({ name: val })
        if (field === 2) this.setState({ surname: val })
        if (field === 3) this.setState({ street: val })
        if (field === 4) this.setState({ building_number: val })
        if (field === 5) this.setState({ house_numer: val })
        if (field === 6) this.setState({ phone_number: val })
    }

    render() {
        if (this.props.location.test !== undefined) {
            return (
                <div className="pt-5 pb-5">

                    <div className="list-group mx-auto justify-content-center">
                        <Zoom>
                        <div className="container card p-0 transparentContainer w-50">
                            <div className="card-header">
                                <h3>ZAMÓWIENIE</h3>
                            </div>
                            <div className="pt-3 pb-3 pl-0 pr-0">
                            
                                {this.props.location.test.map((position, idx) =>
                                    <li className="m-2"key={idx}>{position.counter}x {position.meal.name} {(position.meal.price * position.counter).toFixed(2)}</li>

                                )}
                                <hr></hr>
                                <div>TOTAL PRICE: {this.props.location.total}</div>

                                <div className="p-2 margin margin-top">

                                    <Link to={{
                                        pathname: '/meals',
                                        order: this.props.location.test
                                    }}>

                                        <button className="btn btn-secondary p-1 mt-2">BACK</button>
                                    </Link>
                                </div>
                                
                            </div>
                            
                        </div>
                        </Zoom>
                        <br></br>
                        <Zoom>
                        <div className="container card transparentContainer p-3 pb-4 w-50">
                                
                                <form onSubmit={this.onOrderAdd.bind(this)}>

                                    <div className="form-group col-9 mx-auto">
                                        <StringField label="Name: " defaultValue={this.state.name} className={"form-control"} placeholder={"Name..."} onChange={this.handleChange.bind(this, 1)} />
                                    </div>
                                    <div className="form-group col-9 mx-auto">
                                        <StringField label="Surname: " defaultValue={this.state.surname} className={"form-control"} placeholder={"Surname..."} onChange={this.handleChange.bind(this, 2)} />
                                    </div>
                                    <div className="form-group col-9 mx-auto">
                                        <StringField label="Street: " defaultValue={this.state.street} className={"form-control"} placeholder={"Street..."} onChange={this.handleChange.bind(this, 3)} />
                                    </div>
                                    <div className="form-group col-9 mx-auto">
                                        <StringField label="Building number: " defaultValue={this.state.building_number} className={"form-control"} placeholder={"Building number..."} onChange={this.handleChange.bind(this, 4)} />
                                    </div>
                                    <div className="form-group col-9 mx-auto">
                                        <NumberField label="House number: " defaultValue={this.state.house_number} className={"form-control"} placeholder={"House number..."} onChange={this.handleChange.bind(this, 5)} />
                                    </div>
                                    <div className="form-group col-9 mx-auto">
                                        <NumberField label="Phone number: " defaultValue={this.state.phone_number} className={"form-control"} placeholder={"Phone number..."} onChange={this.handleChange.bind(this, 6)} />
                                    </div>

                                    <button type="submit" className="btn btn-secondary p-1 mt-2">SUBMIT ORDER</button>

                                </form>
                        </div>
                        </Zoom>
                    </div >
                </div>

            )
        }
        return (
            <div className="p-2">
                <Link to={{
                    pathname: '/meals',
                    order: this.props.location.test
                }}>
                    <button className="btn btn-secondary p-1">BACK TO MENU</button>

                </Link>
            </div>
        )
    }
}

export default OrderConfirm