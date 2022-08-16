const router = require('express').Router();

const controller = require('../controllers/personagens.controller');

router.get('/', controller.getAllController);

module.exports = router;
