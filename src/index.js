require('dotenv').config()
const express = require('express');
const cors = require('cors') 
const app = express();
app.use(cors()); 
console.log(process.env.PORT);
if(!process.env.PORT) {
  throw new Error("Please Specify PORT Number for the HTTP Server with environment variable PORT.")
}
const port = process.env.PORT
app.get('/', (req, res) => {
  res.send('Arithmetic service - last updated 3/4/2024');
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
      res.json(result);
  } catch (error) {
      res.status(400).send('Invalid expression');
  }
}); 
 
app.listen(port);