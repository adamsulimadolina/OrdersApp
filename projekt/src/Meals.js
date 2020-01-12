import React, { Component } from 'react';
import './App.css';
import MealsList from './MealsList';




class Meals extends Component {


    constructor(props) {
        super(props);
        this.state = {
            meals: [],
            selectedMeal: null
        };
    }



    onMealSelected = (selectedMeal) => {
        this.setState({
            selectedMeal
        });
    }
    onMealUpdate = (mealData) => {
        let copy = this.state.meals;
        copy[this.state.selectedMeal] = mealData;
        this.setState({
            mealsList: copy,
            selectedMeal: null
        });
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
                    updateMeal={this.onMealUpdate} meals={this.state.meals} />
                <button className="btn btn-dark" onClick={this.handleClick.bind(this)}>ADD</button>
                {this.renderAdd()}
            </div>
        )
    }
}

export default Meals;
