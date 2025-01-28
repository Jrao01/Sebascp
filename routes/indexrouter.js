const express = require('express');
const router = express.Router();

const {index,
    about,
    clients,
    contact,
    ourwork} = require('../controllers/index.js')

router.get('/',index)

router.get('/about',about)

router.get('/clients',clients)

router.get('/contact',contact)

router.get('/ourwork',ourwork)



module.exports = router