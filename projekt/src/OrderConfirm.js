import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StringField from './StringField'
import NumberField from './NumberField';
import axios from 'axios';


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
                    <div className="d-flex justify-content-center">
                    <div className="card transparentContainer w-50">
                        <div className="pt-3 pb-3">
                            {this.props.location.test.map((position, idx) =>
                                <li key={idx}>{position.counter}x {position.meal.name} {(position.meal.price * position.counter).toFixed(2)}</li>

                            )}
                            <div>TOTAL PRICE: {this.props.location.total}</div>

                            <div className="p-2">
                                <Link to={{
                                    pathname: '/meals',
                                    order: this.props.location.test
                                }}>
                                    <button className="btn btn-secondary p-1">BACK</button>
                                </Link>
                            </div>
                            <form onSubmit={this.onOrderAdd.bind(this)}>

                                <div className="form-group mb-2 w-100">
                                    <StringField label="Name: " defaultValue={this.state.name} placeholder={"Name..."} onChange={this.handleChange.bind(this, 1)} />
                                </div>
                                <div className="form-group mb-2 w-100">
                                    <StringField label="Surname: " defaultValue={this.state.surname} placeholder={"Surname..."} onChange={this.handleChange.bind(this, 2)} />
                                </div>
                                <div className="form-group mb-2 w-100">
                                    <StringField label="Street: " defaultValue={this.state.street} placeholder={"Street..."} onChange={this.handleChange.bind(this, 3)} />
                                </div>
                                <div className="form-group mb-2 w-100">
                                    <StringField label="Building number: " defaultValue={this.state.building_number} placeholder={"Building number..."} onChange={this.handleChange.bind(this, 4)} />
                                </div>
                                <div className="form-group mb-2 w-100">
                                    <NumberField label="House number: " defaultValue={this.state.house_number} placeholder={"House number..."} onChange={this.handleChange.bind(this, 5)} />
                                </div>
                                <div className="form-group mb-2 w-100">
                                    <NumberField label="Phone number: " defaultValue={this.state.phone_number} placeholder={"Phone number..."} onChange={this.handleChange.bind(this, 6)} />
                                </div>

                                <button type="submit" className="btn btn-secondary p-1">SUBMIT ORDER</button>

                            </form>
                        </div>
                    </div>
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