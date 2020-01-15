import React, { Component } from 'react';
import './App.css';
import Order from './Order';
import OrderConfirm from './OrderConfirm'
import 'bootstrap/dist/css/bootstrap.min.css';

class MealsList extends Component {
    constructor() {
        super();
        this.state = {
            edit: false,
            mealIdToEdit: -1,
            editedMeal: null,
            order_meals: [],
            finish_order: false
        }
    }

    finishEdit(e) {
        this.setState({
            edit: false,
            mealIdToEdit: -1
        });
        this.props.updateMeal(this.state.editedMeal);
    }

    editMeal(id, e) {
        this.setState({
            edit: true,
            mealIdToEdit: id,
            editedMeal: this.props.meals[id]
        });
        this.props.selectedMeal(id);
    }

    addToOrder(id, e) {
        let newOrder = this.props.meals[id];
        let tmp = this.state.order_meals;
        tmp.push(newOrder);
        this.setState({
            order_meals: tmp
        });
    }

    changeVal(key, e) {
        let newVal = e.target.value;
        let field = key;
        let pr = Object.assign({}, this.state.editedMeal);
        if (field === 0) pr.name = newVal;
        else if (field === 1) pr.number = newVal;
        else pr.shop = newVal;
        this.setState({
            editedMeal: pr
        });
    }

    render() {
        if (this.props.meals.length > 0) {
            return (
                <div>
                    <div className="col-9">
                        <h1 className="align-items-center display-2 font-weight-bold">MENU</h1>
                    </div>
                    <div className="row mw-100">
                        <div className="col-9">

                            <ul className="list-group">
                                {this.props.meals.map((meal, id) => {
                                    if (id !== this.state.mealIdToEdit)
                                        return (

                                            <div key={id} className="container">
                                                <div className="col-sm">
                                                    <div className="mh-25">
                                                        <div className="card mh-25">
                                                            <h5 className="card-header text-white bg-dark">{meal.name}</h5>
                                                            <div className="row no-gutters align-items-center">
                                                                <img className="col-md-4 align-items-center border-right" alt="" src={meal.image} />

                                                                <div className="col-md-8">
                                                                    <div className="card-body align-items-center">
                                                                        <h6>Składniki:</h6>
                                                                        {meal.ingredients.map((ing, id) => <div key={id} className="h-50">{ing},</div>)}
                                                                    </div>
                                                                    <div className="card-footer">
                                                                        <h6>Cena: {meal.price} PLN</h6>
                                                                    </div>
                                                                    <button type="button" onClick={this.editMeal.bind(this, id)}>EDIT</button>
                                                                    <button type="button" onClick={this.addToOrder.bind(this, id)}>ADD TO ORDER</button>
                                                                    <br></br>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <br></br>
                                            </div>

                                        )
                                    else return (
                                        <li key={id} className="list-group-item">
                                            <form>
                                                <div className="container w-75">
                                                    {Object.values(meal).map((field, fieldKey) => {
                                                        return <input className="list-group-item list-group-item-action" key={field} defaultValue={field} onChange={this.changeVal.bind(this, fieldKey)} />
                                                    }, this)}
                                                    <button className="btn btn-dark" onClick={this.finishEdit.bind(this)} type="button">Update</button>
                                                </div>
                                            </form>
                                        </li>
                                    )
                                }
                                )
                                }
                            </ul>
                        </div>
                        <div className="col-3">
                            <Order meals={this.state.order_meals} />
                        </div>
                    </div>
                </div>
            );

        }
        return (
            <p>No results!</p>
        );

    }
}



export default MealsList;