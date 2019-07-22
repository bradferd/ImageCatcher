const mongoose = require('./connection.js')

const PictureSchema = new mongoose.Schema({
	name: String,
	description: String,
	imgSrc: String,
	collectionId: mongoose.Types.ObjectId
})

const PictureCollection = mongoose.model('Pictures', PictureSchema)

const getPicturesByCollection = collectionId =>
	PictureCollection.find({ collectionId })

const getPicture = pictureId => PictureCollection.findById(pictureId)

const newPicture = pictureObject => PictureCollection.create(pictureObject)

const editPicture = (pictureId, pictureObject) =>
	PictureCollection.findByIdAndUpdate(pictureId, pictureObject)

const deletePicture = pictureId =>
	PictureCollection.findByIdAndDelete(pictureId)

module.exports = {
	getPicturesByCollection,
	getPicture,
	newPicture,
	editPicture,
	deletePicture
}
