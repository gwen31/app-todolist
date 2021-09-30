const express = require("express");

const router = express.Router();

const { getAllDepartments } = require("../../controllers/departments");


router.get('/', getAllDepartments);

module.exports = router;
