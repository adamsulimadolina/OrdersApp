import React, { Component } from 'react'

class OrderConfirm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            meals: [],
            show: false
        }
    }

    componentDidMount() {
        console.log(this.props.location.test)
        this.setState({
            show: this.props.show
        })
    }
    render() {
        return (
            <div>
                {this.props.location.test.map((position, idx) =>
                    <li>{position.meal.name} {position.meal.price*position.counter}</li>
                
                )}
            </div>
        )
    }
}

export default OrderConfirm