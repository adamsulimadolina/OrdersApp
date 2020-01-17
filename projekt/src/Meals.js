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
            order_meals: []
        };
    }

    componentWillMount() {
        console.log(this.props.history.location.order)
        if(this.props.history.location.order !== undefined) {
            //console.log("p")
            this.setState({
                order_meals: this.props.history.location.order
            })
            //console.log(this.state)
        } else {
            //console.log("x")
            this.setState({
                order_meals: []
            })
        }
    }
    componentDidMount() {
        
        this.setState({
            loaded: false
        });
        axios("http://localhost:8080/meals").then(res => {
            this.setState({ loaded: true, meals: res.data });
        }).catch(error => console.error('Error', error));
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
                    updateMeal={this.onMealUpdate} meals={this.state.meals} order={this.state.order_meals}/>
                <button className="btn btn-dark" onClick={this.handleClick.bind(this)}>ADD</button>
                {this.renderAdd()}
            </div>
        )
    }
}

export default Meals;
