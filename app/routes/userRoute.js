const { app } = require('../../index')
const UserController = require('../controllers/UserController');
const userController = new UserController();

app.post('/user', async (req, res) => {
    let user = req.body;

    let userController = new UserController(user);

    try {
        let result = await userController.create();
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
})

app.get('/user/:id?', async (req, res) => {
    let id = req.params.id;

    try {
        let result = await userController.get(id);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.put('/user', async (req, res) => {
    let data = req.body;
    let userController = new UserController(data);

    try {
        let result = await userController.update(data);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
})

app.delete('/user', async (req, res) => {
    let { id } = req.body;

    try {
        await userController.delete(id);
        res.status(201).send("Usuário deletado");
    } catch (error) {
        res.status(500).send(error);
    }
})