const Sequelize = require('sequelize')
const connection = require('../database/database')
// a sugestão foi q fizesse o relacionamento em um model só (este)
//importando o model q eu quero me relacionar
const Category = require('../categories/Category')

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

//sem essa linha de código, a tabela não foi criada automaticamente
Article.sync({ force: false })

//bastava ter só um relacionamento expressado
//no caso abaixo, há um relacionamento de mão dupla
//um para muitos - uma categoria tem mtos artigos
Category.hasMany(Article)
//expressando relacionamento no Sequelize
//um artigo pertence a uma categoria - 1-P-1
Article.belongsTo(Category)

module.exports = Article