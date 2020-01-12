import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json());

let products = [];

app.get('/products', function (req, res) {
  res.send(products);
});

app.get('/cars/:model', (req, res) => {
  let model = req.params.model;
  cars.forEach((el) => {
    if (el.model === model) return res.send(el);
  })
  res.status(304).send({ err: 304 });
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

app.listen(8080, () =>
  console.log('Example app listening on port 8080!'),
);

