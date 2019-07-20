import React, { Component } from 'react'
import axios from 'axios'

export default class Collection extends Component {
	state = {
		collection: {}
	}

	async componentDidMount() {
		const res = await axios.get(
			`/api/collections/${this.props.match.params.collectionId}`
		)
		this.setState({ collection: res.data })
	}

	render() {
		return (
			<div>
				<h1>{this.state.collection.name}</h1>
				<p>{this.state.collection.description}</p>
			</div>
		)
	}
}
