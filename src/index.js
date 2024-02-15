const express = require('express');
const cors = require('cors');
const {add} = require("./arithmetica");
const app = express();
app.use(cors()); 
const port = 3000; 
app.get('/', (req, res) => {
  res.send('Arithmetic service - Hello World!');
}); 

app.get('/calculate/*', (req, res) => {
  // Extracting expression from URL parameters
  const expression = decodeURIComponent(req.params[0]);

  // Evaluating the expression
  let result;
  try {
      result
      = eval
      (expression);
      res.json(result.toString());
  } catch (error) {
      res.status(400).send('Invalid expression');
  }
}); 
 
app.listen(port);