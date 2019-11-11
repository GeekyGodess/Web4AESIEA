/**
 *
 * entrez la commande suivante:
 * npm install --save express express-session body-parser morgan cors
 * puis node server.js
 * exemple complet à l'adresse https://github.com/Musinux/first-vue-app
 */
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const session = require('express-session')
const app = express()

// ces lignes (cors) sont importantes pour les sessions dans la version de développement
app.use(cors({
  credentials: true,
  origin: 'http://localhost:4000'
}))
app.use(session({
  secret: 'tpweb', // changez cette valeur
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // ne changez que si vous avez activé le https
}))
app.use(morgan('dev'))
app.use(bodyParser.json())

const path = require('path')
app.use(express.static(path.join(__dirname, '/dist')))

const users = [{
  username: 'admin',
  password: '123'
}]

app.get('/api/listPanier', (req, res) => {
  console.log(this.panier)
  res.json(this.panier)
})

app.get('/api/user', (req, res) => {
  res.json(this.userId)
})

app.post('/api/login', (req, res) => {
  console.log('req.body', req.body)
  console.log('req.query', req.query)
  if (!req.session.userId) {
    const user = users.find(u => u.username === req.body.login && u.password === req.body.password)
    if (!user) {
      // gérez le cas où on n'a pas trouvé d'utilisateur correspondant
      res.status(401)
      res.json({
        message: 'error'
      })
    } else {
      // connect the user
      this.userId = req.session.userId = 1000 // connect the user, and change the id
      this.panier = []
      res.json({
        message: 'connected'
      })
    }
  } else {
    res.status(401)
    res.json({
      message: 'you are already connected'
    })
  }
})

// lorsque on redemarre le serveur la "base de donnée sera remise a 0 seul l'utilisateur admin est existant au demarrage"
app.post('/api/inscription', (req, res) => {
  console.log('req.body', req.body)
  console.log('req.query', req.query)
  users.push({ username: req.body.login, password: req.body.password })
  console.log(users)
  res.status(200)
  res.json({
    message: 'inscris'
  })
})

app.post('/api/panier', (req, res) => {
  console.log('req.body', req.body)
  console.log('req.query', req.query)
  if (req.body != null) {
    if (this.userId === 1000) {
      if (this.panier !== undefined) {
        this.panier.push(req.body)
      } else {
        this.panier = []
        this.panier.push(req.body)
      }
      console.log(this.panier)
      res.status(200)
      res.json({
        message: 'Ajouté! '
      })
    } else {
      res.status(400)
      res.json({
        message: 'non connecter! '
      })
    }
  }
})

app.get('/api/logout', (req, res) => {
  if (this.userId === 0) {
    res.status(401)
    res.json({
      message: 'you are already disconnected'
    })
  } else {
    this.userId = 0
    req.session.userId = 0
    res.json({
      message: 'you are now disconnected'
    })
  }
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`listening on ${port}`)
})
