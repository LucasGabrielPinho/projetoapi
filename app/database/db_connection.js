const { Sequelize } = require('sequelize');
const db = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PW,
    {
        'host': process.env.DATABASE_HOST,
        'dialect': process.env.DATABASE_DIALECT
    })

db.authenticate()
    .then()
    .catch(err => console.log(`Erro ao se conectar com o banco: ${err}`));

module.exports = { db };