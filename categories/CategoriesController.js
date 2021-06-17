const express = require('express')
const Category = require('./Category')
//permite que crie rotas sem a necessidade de usar a const app
//o router é um obj utilizado pra criação de rotas
const router = express.Router()

router.get('/categories', (req, res) => {
  res.send('rota')
})

//precisa exportar o router pra linkar o router com o arquivo principal (index)
module.exports = router