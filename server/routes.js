const controller = require('./controllers/controller');
const router = require('express').Router();

router.get('/cows', (req, res) => controller.cows.get(req, res));

router.post('/cows', (req, res) => controller.cows.post(req, res));

module.exports = router;