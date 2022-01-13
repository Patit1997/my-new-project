const express = require('express');
const app = express();
const main = require("./main");
/*
function convertToBinary(x) {
  let bin = 0;
  let rem, i = 1, step = 1;
  while (x != 0) {
      rem = x % 2;
      console.log(
          `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/2)}`
      );
      x = parseInt(x / 2);
      bin = bin + rem * i;
      i = i * 10;
  }
  console.log(`Binary: ${bin}`);
  return bin;
}
 */

app.get('/binary/:number', (req, res) => {
  res
    .status(200)
    .json(main.convertToBinary(req.params.number))
    .end();
});

app.get('/', (req, res) => {
  res
    .status(200)
    .send('Hello server is running')
    .end();
});
 
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});