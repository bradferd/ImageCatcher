const mongoose = require('./connection.js')

const CollectionSchema = new mongoose.Schema({
	name: String,
	description: String
})

const CollectionCollection = mongoose.model('Collections', CollectionSchema)

const getAllCollections = () => CollectionCollection.find()

const getCollection = collectionId =>
	CollectionCollection.findById(collectionId)

const addNewCollection = collectionObject =>
	CollectionCollection.create(collectionObject)

const updateCollection = (collectionId, collectionObject) =>
	CollectionCollection.findByIdAndUpdate(collectionId, collectionObject)

const deleteCollection = collectionId =>
	CollectionCollection.findByIdAndDelete(collectionId)

module.exports = {
	getAllCollections,
	getCollection,
	addNewCollection,
	updateCollection,
	deleteCollection
}
