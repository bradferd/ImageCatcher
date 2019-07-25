import React, { Component } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

export default class Picture extends Component {
	handleDeleteImage = async () => {
		await Axios.delete(
			`/api/collections/${this.props.collectionId}/pics/${this.props.id}`
		)
		this.props.getAllPictureData()
	}
	render() {
		return (
			<div className='column'>
				<Link
					to={`/collections/${this.props.collectionId}/pics/${this.props.id}`}
				>
					<img
						className='ui medium rounded bordered image'
						src={this.props.src}
						alt={this.props.description}
					/>
				</Link>
				<button
					className='circular ui icon button'
					onClick={this.handleDeleteImage}
					style={{ marginTop: '2px', marginBottom: '2px' }}
				>
					<i className='trash alternate icon' />
				</button>
			</div>
		)
	}
}
