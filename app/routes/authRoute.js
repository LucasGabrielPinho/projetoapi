const jwt       = require('jsonwebtoken');
const { app }   = require('../../index')
const AuthController = require('../controllers/AuthController');

app.post('/login', async (req, res) => {
    let authController = new AuthController(req.body);
        
    try {
        let result = await authController.authenticateUser();
        res.status(200).send({ "token" : result });
    } catch (error) {
        res.status(500).send(error);
    }
    
})

app.post('/refresh-token', (req, res) => {
    let { token } = res.body;

})