const express = require('express');
const router = express.Router();
const prove08Controller = require("../../controllers/proves/prove08");
router.get('/', prove08Controller.getProve08);

module.exports = router;