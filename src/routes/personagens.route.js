const router = require('express').Router();

const controller = require('../controllers/personagens.controller');

router.get('/all-personagens', controller.getAllController);

router.get('/personagem/:id', controller.getByIdController);

router.get('/all-personagens/:type', controller.getByTypeController);

router.post('/create-personagem', controller.postController);

router.put('/update-personagem/:id', controller.putController);

router.delete('/delete-personagem/:id', controller.deleteController);

module.exports = router;
