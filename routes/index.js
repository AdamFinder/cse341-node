const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Justin Murn')
});

module.exports = routes
