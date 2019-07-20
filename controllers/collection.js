const express = require('express')

const collectionApi = require('../models/collection.js')
const collectionRouter = express.Router()

collectionRouter.get('/', async (req, res) => {
	const collections = await collectionApi.getAllCollections()
	res.json(collections)
})

collectionRouter.get('/:collectionId', async (req, res) => {
	try {
		const collection = await collectionApi.getCollection(
			req.params.collectionId
		)
		res.json(collection)
	} catch (err) {
		console.log(err)
	}
})

collectionRouter.post('/', async (req, res) => {
	try {
		const newCollection = await collectionApi.addNewCollection(req.body)
		res.json(newCollection)
	} catch (err) {
		console.log(err)
	}
})

collectionRouter.put('/:collectionId', async (req, res) => {
	try {
		const updatedCollection = await collectionApi.updateCollection(
			req.params.collectionId,
			req.body
		)
		res.json(updatedCollection)
	} catch (err) {
		console.log(err)
	}
})

collectionRouter.delete('/:collectionId', async (req, res) => {
	try {
		const deletedCollection = await collectionApi.deleteCollection(
			req.params.collectionId
		)
		res.json(deletedCollection)
	} catch (err) {
		console.log(err)
	}
})

module.exports = {
	collectionRouter
}
