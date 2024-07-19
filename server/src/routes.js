const UserController = require('./controller/UserController.js');

module.exports = (app) => {
    app.get('/user',UserController.index);
    app.get('/user/:userId',UserController.show);
    app.post('/user',UserController.create);
    app.put('/user/:userId',UserController.put);
    app.delete('/user/:userId',UserController.remove);
}