import React, { Component } from 'react'
import Modal from '../Modal'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'

export default class DeletePicture extends Component {
	state = {
		picture: [],
		redirectToCollections: false
	}

	handleDeleteImage = async () => {
		await axios.delete(
			`/api/collections/${this.props.match.params.collectionId}/pics/${
				this.props.match.params.pictureId
			}`
		)
		this.setState({ redirectToCollections: true })
	}

	renderActions() {
		return (
			<>
				<button
					onClick={() =>
						this.handleDeleteImage(this.props.match.params.pictureId)
					}
					className='ui button negative'
				>
					Delete
				</button>
				<Link
					to={`/collections/${this.props.match.params.collectionId}`}
					className='ui button'
				>
					Cancel
				</Link>
			</>
		)
	}

	render() {
		if (this.state.redirectToCollections) {
			return (
				<Redirect to={`/collections/${this.props.match.params.collectionId}`} />
			)
		}
		return (
			<div>
				<Modal
					title='Delete Picture'
					content='Are you sure you want to remove this picture from the collection?'
					actions={this.renderActions()}
					onDismiss={() => this.props.history.goBack()}
				/>
			</div>
		)
	}
}
