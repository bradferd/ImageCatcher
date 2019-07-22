const express = require('express')
const PicsRouter = express.Router({ mergeParams: true })
const picsApi = require('../models/pictures')

module.exports = {
	PicsRouter
}
