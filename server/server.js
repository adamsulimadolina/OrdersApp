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
        name: "Pizza",
        price: 22,
        ingredients: ["jabłko", "banan", "pizza","jabłko", "banan", "pizza", "XD", "XD"],
        image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6352796.jpg"

    },
    {
        name: "Ciaso",
        price: 22,
        ingredients: ["jabłko", "banan", "pizza"],
        image: "https://a.allegroimg.com/s128/03f3b8/82ee416f4d049088dbef0f755d01"

    },
    {
        name: "Ciaso",
        price: 22,
        ingredients: ["jabłko", "banan", "pizza"],
        image: "https://a.allegroimg.com/s128/03f3b8/82ee416f4d049088dbef0f755d01"

    },
    {
        name: "Ciaso",
        price: 22,
        ingredients: ["jabłko", "banan", "pizza"],
        image: "https://a.allegroimg.com/s128/03f3b8/82ee416f4d049088dbef0f755d01"

    },
    {
        name: "Ciaso",
        price: 22,
        ingredients: ["jabłko", "banan", "pizza"],
        image: "https://a.allegroimg.com/s128/03f3b8/82ee416f4d049088dbef0f755d01"

    },
    {
        name: "Ciaso",
        price: 22,
        ingredients: ["jabłko", "banan", "pizza"],
        image: "https://a.allegroimg.com/s128/03f3b8/82ee416f4d049088dbef0f755d01"

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



app.delete('/', (req, res) => {
    return res.send('Received a DELETE HTTP method');
});

app.get('/meals', function(req, res) {
    res.send(meals);
});

app.listen(8080, () =>
    console.log('Example app listening on port 8080!'),
);