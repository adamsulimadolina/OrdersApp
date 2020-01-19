import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json());

let products = [{
        productName: "Jabłko",
        number: 6,
        shop: "Biedronka"
    },
    {
        productName: "Banan",
        number: 4,
        shop: "Tesco"
    },
    {
        productName: "Gruszka",
        number: 3,
        shop: "Lidl"
    }
];

let meals = [{
        name: "Pepperoni",
        price: 22.99,
        ingredients: ["sos pomidorowy", "podwójne pepperoni", "podwójny ser mozzarella"],
        image: "https://www.dominospizza.pl/upload/images/3/thumb/220-151-t-pep_800x600.jpg"

    },
    {
        name: "Hawajska",
        price: 21.99,
        ingredients: ["sos pomidorowy", "ser mozzarella", "szynka", "ananas"],
        image: "https://www.dominospizza.pl/upload/images/3/thumb/220-151-t-hawa-800x600.jpg"

    },
    {
        name: "Margherita",
        price: 20.99,
        ingredients: ["ser mozzarella", "sos pomidorowy"],
        image: "https://www.dominospizza.pl/upload/images/3/thumb/220-151-t-mar_800x600.jpg"

    },
    {
        name: "American Hot",
        price: 24.99,
        ingredients: ["sos pomidorowy", "ser mozzarella", "pepperoni", "cebula", "papryczka jalapeño"],
        image: "https://www.dominospizza.pl/upload/images/3/thumb/220-151-t-ahot-800x600.jpg"

    },
    {
        name: "Italian",
        price: 23.99,
        ingredients: ["sos pomidorowy", "ser mozzarella", "szynka dojrzewająca", "rukola", "oregano", "ser corregio"],
        image: "https://www.dominospizza.pl/upload/images/3/thumb/220-151-t-parma-800x600-1.jpg"

    },
    {
        name: "New Yorker",
        price: 27.99,
        ingredients: ["ser mozarella", "pepperoni", "szynka", "boczek", "pieczarki"],
        image: "https://www.dominospizza.pl/upload/images/3/thumb/220-151-t-newy-800x600.jpg"

    }
]

app.get('/products', function(req, res) {
    res.send(products);
});

app.post('/products', (req, res) => {
    const prod = req.body;
    let dupl = false;
    products.forEach(el => {
        if (el.productName === prod.productName) {
            dupl = true;
        }
    });
    if (!dupl) {
        console.log(prod);
        products.push(prod);
        res.send(prod);
    }
});

app.put('/products', (req, res) => {
    const prod = req.body;
    let present = false;
    products.map((el, index, tab) => {
        if (el.productName === prod.productName) {

            tab[index].number = prod.number;
            tab[index].shop = prod.shop;
            res.send(tab[index]);
            present = true;

        }
    });
    if (!present) res.sendStatus(304);
});

app.get('/meals', function(req, res) {
    res.send(meals);
});

app.put('/meals', (req, res) => {
    const meal = req.body;
    let present = false;
    meals.map((el, index, tab) => {
        if (el.name === meal.name) {

            tab[index].name = meal.name;
            tab[index].price = meal.price;
            tab[index].ingredients = meal.ingredients;
            tab[index].image = meal.image;
            res.send(tab[index]);
            present = true;

        }
    });
    if (!present) res.sendStatus(304);
});



app.delete('/', (req, res) => {
    return res.send('Received a DELETE HTTP method');
});



app.listen(8080, () =>
    console.log('Example app listening on port 8080!'),
);