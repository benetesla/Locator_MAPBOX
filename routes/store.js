const express = require('express');
const { getStores } = require('../controllers/controllers');

const router = express.Router();
router.route('/').get(getStores);
module.exports = router;