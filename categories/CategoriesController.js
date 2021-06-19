const express = require('express')
const { route } = require('../articles/ArticlesController')
const Category = require('./Category')
const slugify = require('slugify')
//permite que crie rotas sem a necessidade de usar a const app
//o router é um obj utilizado pra criação de rotas
const router = express.Router()

router.get('/admin/categories/new', (req, res) => {
  res.render('admin/categories/new')
})

router.post('/categories/save', (req, res) => {
  let title = req.body.title
  if(title != undefined){
    Category.create({
      title,
      //versao otimizada pra url
      slug: slugify(title)
    }).then(() => {
      res.redirect('/')
    })
  } else{
    res.redirect('/admin/categories/new')
  }
})

router.get('/admin/categories', (req, res) => {
  Category.findAll().then(categories => {
    res.render('admin/categories/index', { categories })

  })
})
//precisa exportar o router pra linkar o router com o arquivo principal (index)
module.exports = router