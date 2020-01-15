const { Router } = require('express')
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router()

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)

routes.get('/search', SearchController.index)

module.exports = routes

//HTTP Methods: GET, POST, PUT, DELETE

// Params types: 

// Query params: req.query (Filters, ordirnation, pagination, ...)
// Route params: req.params (Identify an resource in update or delete)
// Body: req.body (data for create or update an register)
