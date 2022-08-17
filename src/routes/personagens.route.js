const route = require('express').Router();

const middleware = require('../middlewares/personagem.middleware');

const controller = require('../controllers/personagens.controller');

const swaggerUi = require('swagger-ui-express');

const swaggerDocument = require('../../swagger.json');

route.use('/api-docs', swaggerUi.serve);

route.get('/api-docs', swaggerUi.setup(swaggerDocument));

route.get('/all-personagens', controller.getAllController);

route.get('/personagem/:id', controller.getByIdController);

route.get('/all-personagens/:type', controller.getByTypeController);

route.post('/create-personagem', middleware, controller.postController);

route.put('/update-personagem/:id', middleware, controller.putController);

route.delete('/delete-personagem/:id', controller.deleteController);

module.exports = route;
