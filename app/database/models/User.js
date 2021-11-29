const { Sequelize }= require('sequelize');
const { db } = require("../db_connection");

const User = db.define('user', {

    user_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    user_name : {
        type: Sequelize.STRING,
        allowNull: false
    },

    user_email : {
        type: Sequelize.STRING,
        allowNull: false
    },

    user_password : {
        type: Sequelize.STRING,
        allowNull: false,
    }

}, {
    defaultScope: {
        attributes: { exclude: ['user_password'] }
    },

    scopes: {
        withPassword: {
            attributes: { },
        }
    }
})

module.exports = User