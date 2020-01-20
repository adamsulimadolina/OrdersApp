import React, { Component } from 'react';
import './App.css';
import MealsList from './MealsList';
import axios from 'axios';
import AddMeal from './AddMeal';



class Meals extends Component {


    constructor(props) {
        super(props);
        this.state = {
            meals: [],
            selectedMeal: null,
            order_meals: [],
            meals_display: []
        };
    }

    componentDidMount() {

        this.setState({
            loaded: false
        });
        axios("http://localhost:8080/meals").then(res => {
            this.setState({ loaded: true, meals: res.data, meals_display: res.data });
        }).catch(error => console.error('Error', error));


        if (this.props.location.order !== null) {
            this.setState({
                order_meals: this.props.location.order
            })
        }


    }

    onMealSelected = (selectedMeal) => {
        this.setState({
            selectedMeal
        });
    }
    onMealUpdate = (mealData) => {
        axios({
            url: "http://localhost:8080/meals",
            method: "PUT",
            headers: {
                Accept: 'application/json', 'Content-Type': 'application/json'
            },
            data: JSON.stringify(mealData),
        }).then(res => {
            console.log(mealData)
            if (res.status !== 304) {
                this.setState((prevState) => {
                    let meals = prevState.meals;
                    meals[this.state.selectedMeal] = mealData;
                    return {
                        meals: meals,
                        selectedMeal: null
                    }
                })
            } else {
                throw new Error("Duplicate data");

            }
        }).catch(error => console.error('Error', error));
    }

    onMealAdd = (mealData) => {
        this.setState({
            show: false
        });

        axios({
            url: "http://localhost:8080/meals",
            method: "POST",
            headers: {
                Accept: 'application/json', 'Content-Type': 'application/json'
            },
            data: JSON.stringify(mealData),
        }).then(res => {
            if (res.status !== 304) {
                let list = this.state.meals;
                list.push(mealData);
                this.setState({
                    meals: list
                });
            } else {
                throw new Error("Duplicate data");

            }
        }).catch(error => console.error('Error', error));
    }

    onMealDelete = (mealData) => {
        axios({
            url: "http://localhost:8080/meals",
            method: "DELETE",
            headers: {
                Accept: 'application/json', 'Content-Type': 'application/json'
            },
            data: JSON.stringify(mealData),
        }).then(res => {
            if (res.status !== 304) {
                let tmp = this.state.meals
                tmp.map((el, idx, arr) => {
                    if (mealData === el) {
                        arr.splice(idx, 1);
                    }
                })
                this.setState({
                    meals: tmp
                })
            }
        })
    }

    renderAdd() {
        if(this.state.show) return <AddMeal func={this.onMealAdd} />;
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
            <div className="">
                <MealsList selectedMeal={this.onMealSelected}
                    updateMeal={this.onMealUpdate} deleteMeal={this.onMealDelete} meals={this.state.meals} order={this.state.order_meals} meals_display={this.state.meals_display} />
                <button className="btn btn-secondary" onClick={this.handleClick.bind(this)}>Add</button>
                {this.renderAdd()}
            </div>
        )
    }
}

export default Meals;
