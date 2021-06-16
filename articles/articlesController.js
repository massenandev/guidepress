const express = require('express')
//permite que crie rotas sem a necessidade de usar a const app
//o router é um obj utilizado pra criação de rotas
const router = express.Router()

router.get('/articles', (req, res) => {
  res.send('articles route')
})

//precisa exportar o router pra linkar o router com o arquivo principal (index)
module.exports = router