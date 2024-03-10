// const express = require('express');
// const cors = require('cors');
// const {add} = require("./arithmetica");
// const app = express();
// app.use(cors()); 
// const port = 3000; 
// app.get('/', (req, res) => {
//   res.send('Arithmetic service - Hello World!');
// }); 

// app.get('/calculate/*', (req, res) => {
//   // Extracting expression from URL parameters
//   const expression = decodeURIComponent(req.params[0]);

//   // Evaluating the expression
//   let result;
//   try {
//       result
//       = eval
//       (expression);
//       res.json(result.toString());
//   } catch (error) {
//       res.status(400).send('Invalid expression');
//   }
// }); 

// app.listen(port);





require('dotenv').config()
const express = require('express');
const cors = require('cors');
const { add } = require("./arithmetica");
const app = express();
app.use(cors());

if (!process.env.PORT) {
  throw new Error('Please specify the port number for the HTTP server with the enviorment variable PORT.');

}

const port = process.env.PORT;
app.get('/', (req, res) => {
  res.send('Arithmetic service - last updated 3/4/2022');
});

app.get('/add/:n/:m', (req, res) => {
  let n = Number(req.params.n);
  let m = NUmber(req.params.m);
  let sum = add(n, m);
  res.json(sum);
});

app.listen(port);