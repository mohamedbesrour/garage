// routes.js

const express = require('express');
const routefiltre = express.Router();
const VoitureController = require('../controller/crud-filtre');

routefiltre.get('/voiture', VoitureController.getAllFilteredByKmAndPrix);

module.exports = routefiltre;
