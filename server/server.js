import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json());


let orders = []

let meals = [{
        id: 1,
        name: "Pepperoni",
        price: 22.99,
        ingredients: ["sos pomidorowy", "podwójne pepperoni", "podwójny ser mozzarella"],
        image: "https://www.dominospizza.pl/upload/images/3/thumb/220-151-t-pep_800x600.jpg"

    },
    {
        id: 2,
        name: "Hawajska",
        price: 21.99,
        ingredients: ["sos pomidorowy", "ser mozzarella", "szynka", "ananas"],
        image: "https://www.dominospizza.pl/upload/images/3/thumb/220-151-t-hawa-800x600.jpg"

    },
    {
        id: 3,
        name: "Margherita",
        price: 20.99,
        ingredients: ["ser mozzarella", "sos pomidorowy"],
        image: "https://www.dominospizza.pl/upload/images/3/thumb/220-151-t-mar_800x600.jpg"

    },
    {
        id: 4,
        name: "American Hot",
        price: 24.99,
        ingredients: ["sos pomidorowy", "ser mozzarella", "pepperoni", "cebula", "papryczka jalapeño"],
        image: "https://www.dominospizza.pl/upload/images/3/thumb/220-151-t-ahot-800x600.jpg"

    },
    {
        id: 5,
        name: "Italian",
        price: 23.99,
        ingredients: ["sos pomidorowy", "ser mozzarella", "szynka dojrzewająca", "rukola", "oregano", "ser corregio"],
        image: "https://www.dominospizza.pl/upload/images/3/thumb/220-151-t-parma-800x600-1.jpg"

    },
    {
        id: 6,
        name: "New Yorker",
        price: 27.99,
        ingredients: ["ser mozarella", "pepperoni", "szynka", "boczek", "pieczarki"],
        image: "https://www.dominospizza.pl/upload/images/3/thumb/220-151-t-newy-800x600.jpg"

    }
]

app.post('/orders', (req, res) => {
    const order = req.body;
    orders.push(order);
    res.send(order);
});


app.get('/orders', function(req, res) {
    res.send(orders);
});

app.delete('/orders', function(req, res) {
    let elem = req.body;
    console.log(elem)
            console.log(orders)
    for(let i = 0; i< orders.length; i++) {
        if(orders[i].name === elem.name && orders[i].surname === elem.surname && orders[i].city === elem.city
            && orders[i].street === elem.street && orders[i].house_number === elem.house_number && orders[i].phone_number === elem.phone_number 
            && orders[i].building_number === elem.building_number) {
            orders.splice(i,1);
            
            break;
        }
    }
    res.send(elem);
})

app.get('/meals', function(req, res) {
    res.send(meals);
});

app.put('/meals', (req, res) => {
    const meal = req.body;
    let present = false;
    console.log(meal)
    meals.map((el, index, tab) => {
        if (el.id === meal.id) {

            meals[index].name = meal.name;
            meals[index].price = meal.price;
            meals[index].ingredients = meal.ingredients;
            meals[index].image = meal.image;
            present = true;
            res.send(meals[index]);
            

        }
    });

    if (!present) res.sendStatus(304);
});

app.delete('/meals', (req, res) => {
    let tmp = req.body;
    meals.map((el, index, tab) => {
        if(tmp.name === el.name && tmp.price === el.price && tmp.image === el.image) {
            meals.splice(index,1);
        }
    })
    return res.send('Received a DELETE HTTP method');
});

app.post('/meals', (req, res) => {
    const meal = req.body;
    let dupl = false;
    meals.forEach(el => {
        if (el.name === meal.name) {
            dupl = true;
        }
    });
    if (!dupl) {
        meals.push(meal)
        res.send(meal);
    }
});


app.delete('/', (req, res) => {
    return res.send('Received a DELETE HTTP method');
});



app.listen(8080, () =>
    console.log('Example app listening on port 8080!'),
);