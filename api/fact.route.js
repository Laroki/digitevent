const express = require('express');
const axios = require('axios');
const factsRoutes = express.Router();
const Fact = require('./fact.js');


factsRoutes.route('/:month/:day').get(function (req, res) {

  // hydrate fact with day and month
  let fact = new Fact({
    day: req.params.day,
    month: req.params.month
  })

  // check if date is valid
  if (fact.dateIsValid()) {
    // fetch data
    let uri = 'http://numbersapi.com/' + fact.month + '/' + fact.day + '/date';
    axios.get(uri).then(response => { 
      //hydrate content     
      fact.setContent(response.data) 
      
      //return information
      return res.json(fact.json);
    });
  } 
  // if its not, return errors
  else 
  {
    return res.json(fact.errors)
  }

});


module.exports = factsRoutes;