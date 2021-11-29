const userRepository = new (require('../repositories/UserRepository'));
const Bcrypt = new (require('../utilities/Bcrypt'));
const DataParser = require('../utilities/DataParser');

class UserController {

    constructor(data) {
        this.data = new DataParser('user', data);
    }

    async create() {
        let hasUser = await userRepository.findByEmail(this.data.user_email);

        if (!hasUser) {
            this.data.user_password = await Bcrypt.generateHash(this.data.user_password);
            return await userRepository.create(this.data);
        }

        throw "Usuário já existente";
    }

    async get(id = null) {
        if (id) return await userRepository.findById(id);

        return await userRepository.findAll();
    }

    async update() {
        let canUpdate = await userRepository.update(this.data);

        if(!canUpdate[0]){
            throw 'Erro ao atualizar usuário'
        }

        return await userRepository.findById(this.data.user_id);
    }

    async delete(id) {
        let canDelete = await userRepository.delete(id);

        if (!canDelete) throw 'Usuário não encontrado'

        return;
    }

}

module.exports = UserController