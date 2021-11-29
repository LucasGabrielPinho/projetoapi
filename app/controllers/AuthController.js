const userRepository = new (require('../repositories/UserRepository'));
const DataParser = require('../utilities/DataParser');
const Bcrypt = new (require('../utilities/Bcrypt'));
const Jwt = require('../utilities/JWT');

class AuthController {

    constructor(data) {
        this.data = new DataParser('user', data);
        this.jwt = new Jwt(this.data);
    }

    async authenticateUser() {
        let user = await userRepository.findForAuth(this.data.user_email);

        if(user) var passwordIsOk = await Bcrypt.compareHash(this.data.user_password, user.user_password);

        if(passwordIsOk) return await this.jwt.generateToken();

        throw "Usuário não autenticado.";
    }

}

module.exports = AuthController