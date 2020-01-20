import React, { Component } from 'react';
import './App.css';
import MealsList from './MealsList';
import axios from 'axios';



class Meals extends Component {


    constructor(props) {
        super(props);
        this.state = {
            meals: [],
            selectedMeal: null,
            order_meals: [],
            meals_display:[]
        };
    }

    componentDidMount() {
        this.setState({
            loaded: false
        });
        axios("http://localhost:8080/meals").then(res => {
            this.setState({ loaded: true, meals: res.data, meals_display: res.data});
        }).catch(error => console.error('Error', error));

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
        let elem = {
            name: mealData.name,
            id: mealData.id,
            ingredients: mealData.ingredients,
            image: mealData.image,
            price: mealData.price
        }
        let tmp_prod = this.state.meals;
        tmp_prod.push(elem)
        this.setState({
            meals: tmp_prod,
            show: false
        })
    }

    renderAdd() {
        //if(this.state.show) return <AddMeal func={this.onMealAdd} />;
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
                <MealsList selectedMeal={this.onMealSelected}
                    updateMeal={this.onMealUpdate} meals={this.state.meals} order={this.state.order_meals} meals_display={this.state.meals_display} />
                <button className="btn btn-dark" onClick={this.handleClick.bind(this)}>ADD</button>
                {this.renderAdd()}
            </div>
        )
    }
}

export default Meals;
