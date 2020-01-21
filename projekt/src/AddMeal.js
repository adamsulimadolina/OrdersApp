import React, { Component } from 'react';
import StringField from './StringField'
import NumberField from './NumberField';
import Zoom from 'react-reveal/Zoom';


class AddMeal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
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
        if (this.state.name === null || this.state.name === "") {
            alert("Please insert correct name.");
        } else if (this.state.price === null || this.state.price === ""){
            alert("Please insert correct price.");
        } else if (this.state.ingredients.length === 0) {
            alert("Please insert correct ingredients (ingredient1,ingredient2,...).");
        } else if (this.state.image === null ||  this.state.image === "") {
            alert("Please insert correct image address.");

        } else {
            this.props.func(this.state);
        }
    }




    render() {
        return (
                <Zoom><div className=" card w-50 mx-auto mt-3 mb-3 transparentContainer">
                    <h5 className="card-header">Nowa pizza</h5>            
                        
                        <div onSubmit={this.finish.bind(this)}>

                            <div className="m-2">
                                <StringField defaultValue={this.state.name} className="list-group-item list-group-item-action transparentContainer mx-auto m-2" placeholder={"Name"} onChange={this.changeVal.bind(this, 1)} />
                            </div>
                            <div className="m-2">
                                <NumberField defaultValue={this.state.price} className="list-group-item list-group-item-action transparentContainer mx-auto m-2" placeholder={"Price"} onChange={this.changeVal.bind(this, 2)} />
                            </div>
                            <div className="m-2">
                                <StringField defaultValue={this.state.ingredients} className="list-group-item list-group-item-action transparentContainer mx-auto m-2" placeholder={"Ingredients (separated with coma)"} onChange={this.changeVal.bind(this, 3)} />
                            </div>
                            <div className="m-2">
                                <StringField defaultValue={this.state.image} className="list-group-item list-group-item-action transparentContainer mx-auto m-2" placeholder={"Image link"} onChange={this.changeVal.bind(this, 4)} />
                            </div>

                        </div>
                        <button className="btn btn-dark mr-2 ml-2 mb-2 mt-0 " type="button" onClick={(e) => this.finish(e)}>Add</button>
                    
                </div></Zoom>
        );
    }
}

export default AddMeal;
