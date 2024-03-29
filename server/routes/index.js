const express = require("express")
const router = express.Router()
const mainController = require( "../controllers/mainController")

//App Routes
router.get('/', mainController.homepage) //Home Page
router.get('/about', mainController.about) //about Page

module.exports = router

