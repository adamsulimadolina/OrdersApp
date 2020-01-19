import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OrderConfirm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            meals: [],
            show: false
        }
    }

    componentDidMount() {
        this.setState({
            show: this.props.show
        })
    }
    render() {
        return (
            <div>
                {this.props.location.test.map((position, idx) =>
                    <li key={idx}>{position.meal.name} {position.meal.price * position.counter}</li>

                )}
                <div className="p-2">
                        <Link to={{
                            pathname:'/meals',
                            order: this.props.location.test
                        }}>
                            <button className="btn btn-secondary p-1">BACK</button>
                        </Link>
                    </div>

            </div>
        )
    }
}

export default OrderConfirm