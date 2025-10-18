const express = require('express');
const { saveStatus } = require('../controllers/toggelController');

const router = express.Router();

router.post('/saveStatus',saveStatus )


module.exports = router;