const Sequelize = require('sequelize')
const connection = require('../database/database')

const Article = connection.define('articles', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  // slug é a versão do título da categoria que seria usado numa rota
  // por exemplo, se o titulo for desenvolvimento.react, passa a ser desenvolvimento-react. Sempre sando o - (menos) na url
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Article