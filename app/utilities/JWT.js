const jwt = require('jsonwebtoken');

class Jwt {

    constructor(userData) {
        this.secret = process.env.SECRET;
        this.data = userData;
    }

    async generateToken() {
        return await jwt.sign({ "user_id" : this.data.user_id }, process.env.SECRET); 
    }
}

module.exports = Jwt