const Sequelize = require('sequelize')

const connection = new Sequelize('guidepressdb', 'root', '!Head123', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = connection