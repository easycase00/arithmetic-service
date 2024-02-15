const express = require('express');
const cors = require('cors')
const app= express();

app.use(cors());

const port = 3000;

app.get('/', (req, res)=> {
    res.send('Arithmetic service - Hello World!');
});

app.get('/add/:n/:m', (req, res) => {
    const num1 = parseInt(req.params.n);
    const num2 = parseInt(req.params.m);
    const sum = num1 + num2;
    res.json(sum);
});

app.get('/subtract/:n/:m', (req, res) => {
    const num1 = parseInt(req.params.n);
    const num2 = parseInt(req.params.m);
    const sum = num1 - num2;
    res.json(sum);
});

app.get('/multiply/:n/:m', (req, res) => {
    const num1 = parseInt(req.params.n);
    const num2 = parseInt(req.params.m);
    const sum = num1 * num2;
    res.json(sum);
});

app.get('/divide/:n/:m', (req, res) => {
    const num1 = parseInt(req.params.n);
    const num2 = parseInt(req.params.m);
    const sum = num1 / num2;
    res.json(sum);
});

app.listen(port);