const User = require('../database/models/User');

class UserRepository {

    async create(user) {
        return await User.create({
            user_email      : user.user_email,
            user_password   : user.user_password,
            user_name       : user.user_name
        })
    }

    async findAll() {
        return await User.findAll();
    }

    async findById(id) {
        return await User.findOne({
            attributes: { exclude: ["user_password"] },
            where: { "user_id": id }
        })
    }

    async findByEmail(email) {
        return await User.findOne({
            where: {
                "user_email": email
            }
        })
    }

    async findForAuth(email) {
        return await User.scope('withPassword').findOne({
            where: {
                "user_email" : email
            }
        })
    }

    async update(data) {
        return await User.update({
            "user_name": data.user_name
        }, {
            where: { "user_id": data.user_id },
        });
    }

    async delete(id) {
        return await User.destroy({
            where: { "user_id" : id }
        });
    }

}

module.exports = UserRepository;