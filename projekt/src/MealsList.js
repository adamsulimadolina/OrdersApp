import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class MealsList extends Component {
    constructor() {
        super();
        this.state = {
            edit: false,
            prodIdToEdit: -1,
            editedMeal: null
        }
    }

    finishEdit(e) {
        this.setState({
            edit: false,
            prodIdToEdit: -1
        });
        this.props.updateMeal(this.state.editedMeal);
    }

    editMeal(id, e) {
        this.setState({
            edit: true,
            prodIdToEdit: id,
            editedMeal: this.props.meals[id]
        });
        this.props.selectedMeal(id);
    }

    changeVal(key, e) {
        let newVal = e.target.value;
        let field = key;
        let pr = Object.assign({}, this.state.editedMeal);
        if (field === 0) pr.mealName = newVal;
        else if (field === 1) pr.number = newVal;
        else pr.shop = newVal;
        this.setState({
            editedMeal: pr
        });
    }



    render() {
        if (this.props.meals.length > 0) {
            return (
                <ul className="list-group">
                    {this.props.meals.map((meal, id) => {
                        if (id !== this.state.prodIdToEdit)
                            return (
                                <div key={id} className="container" >
                                    <li className="list-group-item" onClick={this.editMeal.bind(this, id)}>
                                        <img alt="" src={meal.image} />
                                    </li>
                                    <li className="list-group-item active list-group-item-action" onClick={this.editmeal.bind(this, id)}>
                                        {meal.name}
                                    </li>
                                    <li className="list-group-item" onClick={this.editMeal.bind(this, id)}>
                                        {meal.ingredients}
                                    </li>
                                    <li className="list-group-item" onClick={this.editMeal.bind(this, id)}>
                                        {meal.price}
                                    </li>
                                    <button type="button" onClick={this.editMeal.bind(this, id)}>EDIT</button>
                                    <br></br>
                                </div>

                            )
                        else return (
                            <li key={id} className="list-group-item">
                                <form>
                                    <div className="container">
                                    {Object.values(meal).map((field, fieldKey) => {
                                        return <input className="list-group-item list-group-item-action" key={field} defaultValue={field} onChange={this.changeVal.bind(this, fieldKey)} />
                                    }, this)}
                                    {/* <input type="submit" value="Update" /> */}
                                    <button className="btn btn-dark" onClick={this.finishEdit.bind(this)} type="button">Update</button>
                                    </div>
                                </form>
                            </li>
                        )
                    }
                    )}
                </ul>
            );

        }
        return (
            <p>No results!</p>

        );

    }

}

export default MealsList;