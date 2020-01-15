import React, { Component } from 'react';
import PropTypes from 'prop-types'

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            number: 0,
            shop: "fdsfsd"
        };
    }

    changeVal(string, e) {
        let newVal = e.target.value;

        if (string === "name") {
            this.setState({
                name: newVal
            });
        }
        else if (string === "number") {
            this.setState({
                number: newVal
            });
        }

    }
    finishEdit(e) {
        e.preventDefault();
        if (this.state.name === "") {
            alert("Please insert correct value");
        } else {
            this.setState({
                name: "",
                number: 0,
                shop: "fdsfsd"
            });
            this.props.func(this.state);
        }
    }




    render() {
        return (
            <form >
                <div className="form-group row align-items-center">
                    <div className="col-xs-7">
                        <input className="form-control" autoFocus key={this.state.name} defaultValue={this.state.name} onChange={this.changeVal.bind(this, "name")}></input><br></br>
                        <input type="number" autoFocus key={this.state.number} defaultValue={this.state.number} onChange={this.changeVal.bind(this, "number")}></input><br></br>
                        <button className="btn btn-dark" type="button" onClick={(e) => this.finishEdit(e)}>Add</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default AddProduct;
