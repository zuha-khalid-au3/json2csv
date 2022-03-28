const express = require('express');
const router = express.Router();
const userController = require('./userController')




 router.get('/download', userController.download);

module.exports = router;