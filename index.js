const express = require('express')
const app = express()
const connection = require('./database/database')

//permite com que envie os dados do form e o express traduz numa estrutura q consiga usar no back
//decodifica os dados enviados pelo form, em outras palavras
app.use(express.urlencoded({ extended: true }))
//permite com que leia os dados de form via json
app.use(express.json())

//usar o ejs como view engine
app.set('view engine', 'ejs')
//para o express aceitar arquivos estáticos
app.use(express.static('public'))

connection
  .authenticate()
  .then(() => {
    console.log('connected successfully')
  }).catch((error) => {
    console.log(error)
  })

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(8000, () => {
  console.log('server running')
})