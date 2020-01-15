import React from 'react';
import {Link} from 'react-router-dom';
const Order = (props) => {

    let arr = [];
    let total_price = 0;


    for (let i = 0; i < props.meals.length; i++) {
        let tmp = [];
        for (let p = 0; p < arr.length; p++) {
            tmp.push(arr[p].meal)
            console.log("1")
        }

        if (!tmp.includes(props.meals[i])) {
            let obj = {
                meal: props.meals[i],
                counter: 1
            }
            arr.push(obj);
        } else {

            for (let k = 0; k < arr.length; k++) {
                console.log(arr[k].meal)
                console.log(props.meals[i])
                if (arr[k].meal === props.meals[i]) {
                    console.log("xD")
                    arr[k].counter += 1;
                }
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        total_price += arr[i].counter * arr[i].meal.price;
    }

    if (arr.length > 0) {
        return (
            <div className="border">
                ZAMÓWIENIE
            <ul>
                    {arr.map((meal, id) => {
                        return <li key={id}>{meal.counter}x {meal.meal.name} {meal.meal.price * meal.counter}</li>
                    })}
                </ul>
                <p>TOTAL: {total_price}</p>
                <Link to={{
                    pathname:'/finishorder',
                    test:arr
                }}>
                <button>FINISH</button>
                </Link>
            </div>
        )
    }
    return (
        <div className="border">
            ZAMÓWIENIE
            <p>TOTAL: {total_price}</p>
        </div>
    )
}



export default Order;