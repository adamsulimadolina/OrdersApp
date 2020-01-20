import React from 'react';
import { Link } from 'react-router-dom';
import HeadShake from 'react-reveal/HeadShake';
const Order = (props) => {

    let arr = [];
    let total_price = 0;
    let exist = false;
    for (let i = 0; i < props.meals.length; i++) {
        exist = false;
        for (let k = 0; k < arr.length; k++) {
            if (arr[k].meal.name === props.meals[i].name) {
                arr[k].counter += 1;
                exist = true;
                console.log("1")
                break;
            } 

        }

        if (!exist) {
            console.log(props.meals[i])
            console.log("2")
            let obj = {
                meal: props.meals[i],
                counter: 1
            }
            arr.push(obj);
            exist = false;

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
                <ul className="zamLi">
                    {arr.map((meal, id) => {
                        return <HeadShake><li className="p-1" key={id}>

                                {meal.counter}x {meal.meal.name} {(meal.meal.price * meal.counter).toFixed(2)} 
                                <button type="button" className="close mx-2" aria-label="Close" onClick={props.delete.bind(this, props.meals, arr[id])}>
                                    <span aria-hidden="true">-</span>
                                </button>
                                <button type="button" className="close mx-2" aria-label="Close" onClick={props.add.bind(this, props.meals, arr[id])}>
                                    <span aria-hidden="true">+</span>
                                </button>
                            </li></HeadShake>
                    })}
                </ul>
                <hr></hr>
                <div className="p-1 mb-1">
                    
                    TOTAL: {total_price}
                </div>
                <div className="p-2">
                    <Link to={{
                        pathname: '/finishorder',
                        test: arr,
                        total: total_price

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