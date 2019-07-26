import React, { Component } from 'react'
import Form from './Form'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

export default class EditCollection extends Component {
	state = {
		collection: [],
		redirectToCollection: false
	}

	async componentDidMount() {
		const res = await axios.get(
			`/api/collections/${this.props.match.params.collectionId}`
		)
		this.setState({ collection: res.data })
	}

	handleInputChange = e => {
		const copyCollection = { ...this.state.collection }
		copyCollection[e.target.name] = e.target.value
		this.setState({ collection: copyCollection })
	}

	handleSubmit = async e => {
		e.preventDefault()
		const res = await axios.put(
			`/api/collections/${this.state.collection._id}`,
			this.state.collection
		)
		this.setState({ collection: res.data, redirectToCollection: true })
	}

	render() {
		if (this.state.redirectToCollection) {
			return (
				<Redirect to={`/collections/${this.props.match.params.collectionId}`} />
			)
		}
		return (
			<div>
				<Form
					handleSubmit={this.handleSubmit}
					handleInputChange={this.handleInputChange}
					name={this.state.collection.name}
					description={this.state.collection.description}
				/>
			</div>
		)
	}
}
