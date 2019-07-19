const mongoose = require('./connection.js')

const CollectionSchema = new mongoose.Schema({
	name: String,
	description: String
})

const CollectionCollection = mongoose.model('Collections', CollectionSchema)

module.exports = {
	getHelloWorldString
}
