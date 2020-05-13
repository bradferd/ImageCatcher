import React, { useState, useEffect } from 'react'
import Picture from './Picture'
import Axios from 'axios';

const Pictures = ({ collectionId }) => {
	const [pictures, setPictures] = useState([]);
	const url = `/api/collections/${collectionId}/pics`

	useEffect(() => {
		Axios.get(url)
		.then(res => setPictures(res.data))
	}, [url])


	const allPictures = pictures.map(pic => {
		return (
			<Picture
				description={pic.description}
				src={pic.imgSrc}
				collectionId={pic.collectionId}
				id={pic._id}
				key={pic._id}
			/>
		)
	})
	return (
		<div className='ui grid'>
			<div className='three column row'>{allPictures}</div>
		</div>
	)
}

export default Pictures