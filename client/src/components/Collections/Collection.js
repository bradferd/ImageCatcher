import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import PhotoSearch from '../ImageSearch/PhotoSearch'

export default class Collection extends Component {
	state = {
		collection: {},
		redirectToCollections: false
	}

	async componentDidMount() {
		const res = await axios.get(
			`/api/collections/${this.props.match.params.collectionId}`
		)
		this.setState({ collection: res.data })
	}

	handleDeleteCollection = () => {
		axios
			.delete(`/api/collections/${this.state.collection._id}`)
			.then(() => this.setState({ redirectToCollections: true }))
	}

	render() {
		if (this.state.redirectToCollections) {
			return <Redirect to='/collections' />
		}
		return (
			<div>
				<h1>{this.state.collection.name}</h1>
				<p>{this.state.collection.description}</p>
				<button onClick={this.handleDeleteCollection}>Delete Collection</button>
				<PhotoSearch />
			</div>
		)
	}
}
