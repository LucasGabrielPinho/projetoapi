const bcrypt = require('bcrypt');

class Bcrypt {

    constructor() {
        this.salt = 10;
    }

    async generateHash(password) {
        return await bcrypt.hash(password, this.salt).then(res => {
            return res;
        });
    }

    async compareHash(password, hash) {
        return await bcrypt.compare(password, hash);
    }

}

module.exports = Bcrypt