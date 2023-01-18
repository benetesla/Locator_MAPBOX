const express = require('express');
const { getStores } = require('../controllers/controllers');
const {addStore} = require('../controllers/controllers');
const router = express.Router();
router.route('/').get(getStores);
router.route('/').post(addStore);
module.exports = router;