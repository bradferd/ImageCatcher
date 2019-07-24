const express = require('express')
const imageSearchRouter = express.Router({ mergeParams: true })
const axios = require('axios')

require('dotenv').config()

let unsplashApi = axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: `Client-ID ${process.env.UNSPLASH_CLIENT_ID}`
	}
})

imageSearchRouter.get('/', async (req, res) => {
	try {
		const response = await unsplashApi.get('/search/photos', {
			params: { query: req.query.query }
		})
		res.json(response.data)
	} catch (err) {
		console.log(err)
	}
})

module.exports = {
	imageSearchRouter
}
