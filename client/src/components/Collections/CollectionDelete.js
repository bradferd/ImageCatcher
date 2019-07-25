import React, { Component } from 'react'
import axios from 'axios'
import Modal from '../Modal'

export default class CollectionDelete extends Component {
	state = {
		collection: []
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

	renderActions() {
		return (
			<>
				<button
					onClick={() => this.props.deleteStream(this.state.collection._id)}
					className='ui button negative'
				>
					Delete
				</button>
				<Link to={'/'} className='ui button'>
					Cancel
				</Link>
			</>
		)
	}

	render() {
		return (
			<div>
				<Modal />
			</div>
		)
	}
}
