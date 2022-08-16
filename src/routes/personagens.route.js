const router = require('express').Router();

const controller = require('../controllers/personagens.controller');

router.get('/', controller.getAllController);

router.get('/:id', controller.getByIdController);

router.get('/tipos/:tipo', controller.getByTipoController);

router.post('/create', controller.postController);

router.put('/update/:id', controller.putController);

router.delete('/delete/:id', controller.deleteController);

module.exports = router;
