const express = require('express');
const axios = require('axios');
const factsRoutes = express.Router();

let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


factsRoutes.route('/:month/:day').get(function (req, res) {

      // check if month is valid
      if (!(req.params.month > 0 && req.params.month < 13)) {
        return res.json({message:'le mois doit être compris entre 0 et 12'})
      }
      // check if day is valid 
      if (req.params.day < 0 || req.params.day > monthLength[req.params.month - 1]) {
        return res.json({message:'le jour doit être compris entre 0 et ' + monthLength[req.params.month - 1]})
      }

  let uri = 'http://numbersapi.com/' + req.params.month + '/' + req.params.day + '/date';

  axios.get(uri).then(response => {

    let fact = {
      month: req.params.month,
      day: req.params.day,
      content: response.data,
    }
    return res.json(fact);
  });

});


module.exports = factsRoutes;