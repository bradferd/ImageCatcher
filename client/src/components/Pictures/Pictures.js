import React, { Component } from 'react'
import Picture from './Picture'

export default class Pictures extends Component {
	render() {
		let pictures = this.props.pictures.map(pic => {
			return (
				<Picture
					description={pic.description}
					src={pic.imgSrc}
					collectionId={pic.collectionId}
					getAll={this.getAll}
					id={pic._id}
					key={pic._id}
					getAllPictureData={this.props.getAllPictureData}
				/>
			)
		})
		return (
			<div className='ui grid'>
				<div className='three column row'>{pictures}</div>
			</div>
		)
	}
}
