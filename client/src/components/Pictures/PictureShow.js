import React, { useState, useEffect } from 'react'
import Modal from '../Modal'
import axios from 'axios'

const PictureShow = ({ match, history }) => {
	const [picture, setPicture] = useState({})
	const url = `/api/collections/${match.params.collectionId}/pics/
		${match.params.pictureId}`;

	useEffect(() => {
		axios.get(url)
		.then(res => setPicture(res.data))
	}, [url])

	const renderContent = () => {
		return (
			<img
				src={picture.imgSrc}
				alt={picture.description}
				className='ui fluid image centered'
			/>
		)
	}

	return (
		<div>
			<Modal
				content={renderContent()}
				onDismiss={() =>
					history.push(
						`/collections/${picture.collectionId}`
					)
				}
			/>
		</div>
	)
}

export default PictureShow
