import React, {Component} from 'react'
import axios from 'axios'

class Orders extends Component {
    constructor() {
        super();
        this.state = {
            loaded: false,
            orders: []
        }
    }

    componentDidMount() {
        
        this.setState({
            loaded: false
        });
        axios("http://localhost:8080/orders").then(res => {
            this.setState({ loaded: true, orders: res.data});
        }).catch(error => console.error('Error', error));

        

    }

    render() {
            console.log(this.state.orders)
            if (this.state.orders.length > 0) {
                
                return (
                    <ul className="list-group">
                    {this.state.orders.map((obj, idx) => 
                        <h5 key={idx}> {obj.name} </h5>
                    )
                    }
                    </ul>
                )
            }
            return (<div></div>)
        
    }
}

export default Orders