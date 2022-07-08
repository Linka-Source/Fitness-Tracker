const router = require("express").Router();
const workout = require("../models/workout.js")
const fs = require('fs');
const path = require('path');


router.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

router.get('/exercise', (req, res) => res.sendFile(path.join(__dirname, '../public/exercise.html')));

router.get('/stat', (req, res) => res.sendFile(path.join(__dirname, '../public/stats')));

module.exports = router;