import React, { Component } from 'react'
import axios from 'axios'

export default class Form extends Component {
	state = {
		newCollection: {
			name: '',
			description: ''
		}
	}

	handleInputChange = e => {
		const copyCollection = { ...this.state.newCreature }
		copyCollection[e.target.name] = e.target.value
		this.setState({ newCollection: copyCollection })
	}

	handleSubmit = e => {
		e.preventDefault()
		axios.post(`/api/collections`, this.state.newCollection)
	}

	render() {
		return (
			<div className='ui container'>
				<form onSubmit={this.handleSubmit} className='ui form'>
					<label htmlFor='collection-name'>Collection Name</label>
					<input
						onChange={this.handleInputChange}
						type='text'
						id='collection-name'
						placeholder='Enter a name for this collection...'
						name='name'
						value={this.state.newCollection.name}
					/>
					<label htmlFor='collection-description'>Collection Description</label>
					<input
						onChange={this.handleInputChange}
						type='text'
						id='collection-description'
						name='description'
						value={this.state.newCollection.description}
					/>
					<input
						type='submit'
						value='Create Collection'
						className='ui button'
					/>
				</form>
			</div>
		)
	}
}
