const express = require('express')

const collectionApi = require('../models/collection.js')
const collectionRouter = express.Router()

collectionRouter.get('/', async (req, res) => {
	const collections = await collectionApi.getCollections(
		req.params.collectionId
	)
	res.json(collections)
})

module.exports = {
	collectionRouter
}
