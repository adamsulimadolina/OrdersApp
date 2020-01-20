import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import HeadShake from 'react-reveal/HeadShake';

const Order = (props) => {

    let arr = [];
    let total_price = 0;


    for (let i = 0; i < props.meals.length; i++) {
        let tmp = [];
        for (let p = 0; p < arr.length; p++) {
            tmp.push(arr[p].meal)
        }

        if (!tmp.includes(props.meals[i])) {
            let obj = {
                meal: props.meals[i],
                counter: 1
            }
            arr.push(obj);
        } else {

            for (let k = 0; k < arr.length; k++) {
                if (arr[k].meal === props.meals[i]) {
                    arr[k].counter += 1;
                }
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        total_price += arr[i].counter * arr[i].meal.price;
    }

    total_price = total_price.toFixed(2);


    if (arr.length > 0) {
        return (

            <div className="border sticky-top sticky2 transparentContainer">
                <div className="card-header">
                    <h3>ZAMÓWIENIE</h3>
                </div>
                
                <ul>
                    
                    {arr.map((meal, id) => {
                        return <HeadShake><li className="p-1" key={id}>
                                {meal.counter}x {meal.meal.name} {(meal.meal.price * meal.counter).toFixed(2)} 
                                <button type="button" className="close mx-2" aria-label="Close" onClick={props.delete.bind(this, props.meals, arr[id])}>
                                    <span aria-hidden="true">-</span>
                                </button>
                                <button type="button" className="close mx-2" aria-label="Close" onClick={props.add.bind(this, props.meals, arr[id])}>
                                    <span aria-hidden="true">+</span>
                                </button>
                            </li>                           
                </HeadShake>
                    })}
                    
                </ul>
                <div className="p-1">
                    <hr></hr>
                    TOTAL: {total_price}
                </div>
                <div className="p-2">
                    <Link to={{
                        pathname: '/finishorder',
                        test: arr,
                        f: props.backf
                    }}>
                        <button className="btn btn-secondary p-1">FINISH</button>
                    </Link>
                </div>

            </div>


        )
    }

    return (

        <div className="border sticky-top sticky2 transparentContainer">
            <div className="card-header">
                <h3>ZAMÓWIENIE</h3>
            </div>
            <div className="p-1">
                TOTAL: {total_price}
            </div>
        </div>


    )
}

export default Order;