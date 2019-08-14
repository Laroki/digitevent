const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');

const factsRoutes = require('./fact.route');


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/facts', factsRoutes);

app.listen(PORT, function() {
  console.log('Server is running on Port:', PORT);
});
