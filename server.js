const express = require('express')
const app = express()

const { collectionRouter } = require('./controllers/collection.js')
const { PicsRouter } = require('./controllers/pictures.js')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(`${__dirname}/client/build`))
app.use('/api/collections', collectionRouter)
app.use('/api/pictures', PicsRouter)
app.get('/*', (req, res) => {
	res.sendFile(`${__dirname}/client/build/index.html`)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
	console.log(`App is listening on PORT ${PORT}`)
})
