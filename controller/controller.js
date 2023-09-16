const express = require('express')
const router = express.Router()
const axios = require('axios')

module.exports = router.get('/', (req, res)=> {

    res.send('get method')
})
