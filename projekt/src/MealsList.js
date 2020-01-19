import React, { Component } from 'react';
import './App.css';
import Order from './Order';
import 'bootstrap/dist/css/bootstrap.min.css';
import SortButton from './SortButton';

class MealsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            mealIdToEdit: -1,
            editedMeal: null,
            order_meals: [],
            meals_display: [],
            finish_order: false
        }
    }

    componentDidMount() {
        if (this.props.order !== null) {
            let arr = [];
            for (let i = 0; i < this.props.order.length; i++) {
                for (let j = 0; j < this.props.order[i].counter; j++) {
                    arr.push(this.props.order[i].meal);
                }
            }
            this.setState({
                order_meals: arr
            })

        } else console.log("XD")

    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            meals_display: nextProps.meals_display
        })
    }

    finishEdit(e) {
        this.setState({
            edit: false,
            mealIdToEdit: -1
        });
        console.log(this.state.editedMeal);
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

    removePositionFromOrder(arr, meal, e) {
        console.log(arr);
        console.log(meal);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === meal.meal) {
                arr.splice(i, 1);
                break;
            }
        }
        this.setState({
            order_meals: arr
        })
    }

    addPositionToOrder(arr, meal, e) {
        console.log(arr);
        console.log(meal);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === meal.meal) {
                let tmp = arr[i];
                arr.push(tmp);
                break;
            }
        }
        this.setState({
            order_meals: arr
        })
    }

    changeVal(key, e) {
        let newVal = e.target.value;
        let field = key;
        let pr = Object.assign({}, this.state.editedMeal);
        if (field === 0) pr.name = newVal;
        else if (field === 1) pr.price = newVal;
        else if (field === 2) {
            pr.ingredients = newVal.split(',')
        }
        else pr.image = newVal;
        this.setState({
            editedMeal: pr
        });
        console.log(this.state.editedMeal);
    }

    goBack = (data) => {
        this.setState({
            order_meals: data
        })
    }

    filterMeals(e) {
        const text = e.currentTarget.value;
        const filteredMeals = this.getFilteredMealsForText(text);
        this.setState({
            meals_display: filteredMeals
        })

    }
    getFilteredMealsForText(text) {
        return this.props.meals.filter(meal => meal.name.toLowerCase().includes(text.toLowerCase()))
    }


    compareNameAscending(a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
    }
    compareNameDescending(a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
        return 0;
    }
    compareNumberAscending(a, b, key) {
        if (a.price < b.price) return -1;
        if (a.price > b.price) return 1;
        return 0;
    }
    compareNumberDescending(a, b, key) {
        if (a.price < b.price) return 1;
        if (a.price > b.price) return -1;
        return 0;
    }


sort(key, e) {
    let tmp = this.state.meals_display.sort(this.compareNameAscending);
    if(key === 1) tmp = this.state.meals_display.sort(this.compareNameDescending);
    else if (key === 2) tmp = this.state.meals_display.sort(this.compareNumberAscending);
    else if (key === 3) tmp = this.state.meals_display.sort(this.compareNumberDescending);

    this.setState({
        meals_display: tmp
    })
}

render() {
    if (this.props.meals.length > 0) {
        return (
            <div className="container">
                <div className="col-9">
                    <h1 className="align-items-center display-2 font-weight-bold">MENU</h1>
                </div>
                <input onInput={this.filterMeals.bind(this)} type="text" placeholder="Search..."></input>
                <SortButton sortfunction={this.sort.bind(this, 0)} text={"NAME ^"}></SortButton>
                <SortButton sortfunction={this.sort.bind(this, 1)} text={"NAME v"}></SortButton>
                <SortButton sortfunction={this.sort.bind(this, 2)} text={"PRICE ^"}></SortButton>
                <SortButton sortfunction={this.sort.bind(this, 3)} text={"PRICE v"}></SortButton>
                <div className="row mw-100">
                    <div className="col-9">

                        <ul className="list-group">
                            {this.state.meals_display.map((meal, id) => {
                                if (id !== this.state.mealIdToEdit)
                                    return (

                                        <div key={id} className="container mw-50">
                                            <div className="col-sm">
                                                <div className="card">
                                                    <h5 className="card-header text-white bg-dark">{meal.name}</h5>
                                                    <div className="row no-gutters">
                                                        <img className="col-md-4 align-items-center img-fluid" alt="" src={meal.image} />

                                                        <div className="col-md-8">
                                                            <h6 className="d-block text-white bg-secondary text-white m-0 padding p-2">Składniki:</h6>

                                                            <div className="d-flex flex-wrap card-body align-items-center p-0">
                                                                {meal.ingredients.map((ing, id) => <div key={id} className="flex-fill w-25 border border-dark p-2">{ing}</div>)}
                                                            </div>
                                                            <div className="align-items-end">

                                                                <div className="card-footer margin ">
                                                                    <h6 className="">Cena: {meal.price} PLN</h6>
                                                                </div>

                                                                <div className="d-flex padding p-2">
                                                                    <button type="button" className="btn btn-dark mx-auto" onClick={this.editMeal.bind(this, id)}>EDIT</button>
                                                                    <button type="button" className="btn btn-dark mx-auto" onClick={this.addToOrder.bind(this, id)}>ADD TO ORDER</button>
                                                                </div>
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
                    <div className="col-3 pt-xl-5">
                        <Order meals={this.state.order_meals} delete={this.removePositionFromOrder.bind(this)} add={this.addPositionToOrder.bind(this)} /></div>
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