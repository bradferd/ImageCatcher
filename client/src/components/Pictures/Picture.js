import React, { Component } from 'react'
import Axios from 'axios'

export default class Picture extends Component {
	handleDeleteImage = async () => {
		await Axios.delete(
			`/api/collections/${this.props.collectionId}/pics/${this.props.id}`
		)
		this.props.getAll()
	}
	render() {
		return (
			<div className='column'>
				<img
					className='ui medium rounded bordered image'
					src={this.props.src}
					alt={this.props.description}
				/>

				<button onClick={this.handleDeleteImage}>Delete Image</button>
			</div>
		)
	}
}
