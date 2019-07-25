import React, { Component } from 'react'
import axios from 'axios'
import Modal from '../Modal'
import { Link, Redirect } from 'react-router-dom'

export default class CollectionDelete extends Component {
	state = {
		collection: [],
		redirectToCollections: false
	}

	async componentDidMount() {
		this.getAllCollectionData()
	}

	getAllCollectionData = async () => {
		const res = await axios.get(
			`/api/collections/${this.props.match.params.collectionId}`
		)
		this.setState({ collection: res.data })
	}

	handleDelete = async () => {
		await axios.delete(`/api/collections/${this.state.collection._id}`)
		this.setState({ redirectToCollections: true })
	}

	renderActions() {
		return (
			<>
				<button
					onClick={() => this.handleDelete(this.state.collection._id)}
					className='ui button negative'
				>
					Delete
				</button>
				<Link
					to={`/collections/${this.state.collection._id}`}
					className='ui button'
				>
					Cancel
				</Link>
			</>
		)
	}

	render() {
		if (this.state.redirectToCollections) {
			return <Redirect to='/collections' />
		}
		return (
			<div>
				<Modal
					title='Delete Collection'
					content={`Are you sure you want to delete ${
						this.state.collection.name
					}?`}
					actions={this.renderActions()}
					onDismiss={() => this.props.history.goBack()}
				/>
			</div>
		)
	}
}
