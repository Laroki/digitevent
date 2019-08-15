const express = require('express');
const axios = require('axios');
const factsRoutes = express.Router();
const Fact = require('./fact.js');


factsRoutes.route('/:month/:day').get(function (req, res) {

  let fact = new Fact({
    day: req.params.day,
    month: req.params.month
  })


  if (fact.dateIsValid()) {
    let uri = 'http://numbersapi.com/' + fact.month + '/' + fact.day + '/date';

    axios.get(uri).then(response => {      
      fact.setContent(response.data) 

      return res.json(fact.json());
    });
  } else 
  {
    return res.json(fact.errors)
  }

});


module.exports = factsRoutes;