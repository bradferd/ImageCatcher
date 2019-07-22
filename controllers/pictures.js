const express = require('express')
const PicsRouter = express.Router({ mergeParams: true })
const picsApi = require('../models/pictures')

PicsRouter.get('/', async (req, res) => {
	try {
		const pictures = await picsApi.getPicturesByCollection(
			req.params.collectionId
		)
		res.json(pictures)
	} catch (err) {
		console.log(err)
	}
})

PicsRouter.get('/:pictureId', async (req, res) => {
	try {
		const singlePicture = await picsApi.getPicture(req.params.pictureId)
		res.json(singlePicture)
	} catch (err) {
		console.log(err)
	}
})

PicsRouter.post('/', async (req, res) => {
	try {
		const newPicture = await picsApi.newPicture(req.body)
		res.json(newPicture)
	} catch (err) {
		console.log(err)
	}
})

PicsRouter.put('/:pictureId', async (req, res) => {
	try {
		const editedPicture = await picsApi.editPicture(
			req.params.pictureId,
			req.body
		)
		res.json(editedPicture)
	} catch (err) {
		console.log(err)
	}
})

PicsRouter.delete('/:pictureId', async (req, res) => {
	try {
		const deletedPicture = await picsApi.deletePicture(req.params.pictureId)
		res.json(deletedPicture)
	} catch (err) {
		console.log(err)
	}
})

module.exports = {
	PicsRouter
}
