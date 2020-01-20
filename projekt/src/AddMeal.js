import React, { Component } from 'react';
import StringField from './StringField'
import NumberField from './NumberField';

class AddMeal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            price: null,
            ingredients: [],
            image: null
        };
    }

    changeVal(field, val) {

        if(field===1) this.setState({
            name: val
        })
        if(field===2) this.setState({
            price: val
        })
        if(field===3) this.setState({
            ingredients: val.split(',')
        })
        if(field===4) this.setState({
            image: val
        })

    }
    finish(e) {
        e.preventDefault();
        console.log(this.state)
        if (this.state.name === null) {
            alert("Please insert correct name.");
        } else if (this.state.price === null){
            alert("Please insert correct price.");
        } else if (this.state.ingredients.length === 0) {
            alert("Please insert correct ingredients (ingredient1,ingredient2,...).");
        } else if (this.state.image === null) {
            alert("Please insert correct image address.");
        } else {
            this.props.func(this.state);
        }
    }




    render() {
        return (
                <div className="form-group row align-items-center">
                    <div className="col-xs-7">
                        <form>
                            <div className="form-group mb-2 w-100">
                                <StringField label="Name: " defaultValue={this.state.name} className={"form-control"} placeholder={"Name..."} onChange={this.changeVal.bind(this, 1)} />
                            </div>
                            <div className="form-group mb-2 w-100">
                                <NumberField label="Price: " defaultValue={this.state.price} className={"form-control"} placeholder={"Price..."} onChange={this.changeVal.bind(this, 2)} />
                            </div>
                            <div className="form-group mb-2 w-100">
                                <StringField label="Ingredients: " defaultValue={this.state.ingredients} className={"form-control"} placeholder={"Ingredients (separated with coma)..."} onChange={this.changeVal.bind(this, 3)} />
                            </div>
                            <div className="form-group mb-2 w-100">
                                <StringField label="Image...: " defaultValue={this.state.image} className={"form-control"} placeholder={"Image link..."} onChange={this.changeVal.bind(this, 4)} />
                            </div>
                            <button type="button" className="btn btn-secondary p-1" onClick={this.finish.bind(this)}>ADD MEAL</button>

                        </form>
                    </div>
                </div>
        );
    }
}

export default AddMeal;
