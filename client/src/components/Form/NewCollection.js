import React, { Component } from 'react'
import Form from './Form'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

export default class NewCollection extends Component {
	state = {
		newCollection: {
			name: '',
			description: ''
		},
		redirectToCollections: false
	}

	handleInputChange = e => {
		const copyCollection = { ...this.state.newCollection }
		copyCollection[e.target.name] = e.target.value
		this.setState({ newCollection: copyCollection })
	}

	handleSubmit = e => {
		e.preventDefault()
		axios.post(`/api/collections`, this.state.newCollection)
		this.setState({ redirectToCollections: true })
	}

	render() {
		if (this.state.redirectToCollections) {
			return <Redirect to='/collections' />
		}
		return (
			<div>
				<Form
					handleSubmit={this.handleSubmit}
					handleInputChange={this.handleInputChange}
					name={this.state.newCollection.name}
					description={this.state.newCollection.description}
				/>
			</div>
		)
	}
}
