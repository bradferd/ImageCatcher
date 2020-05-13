import React from 'react'
import ImageCard from './ImageCard'
import './ImageList.css'

const ImageList = (props) => {
	const allImages = props.images.map(image => {
		return <ImageCard {...props} key={image.id} image={image} />
	})

	return <div className='image-list'>{allImages}</div>
}

export default ImageList
