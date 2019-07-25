import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class Form extends Component {
	state = {
		newCollection: {
			name: '',
			description: ''
		},
		isEditForm: false,
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
			<div className='ui container' style={{ marginTop: '30px' }}>
				<div className='ui middle aligned center aligned grid'>
					<div className='column'>
						<form onSubmit={this.handleSubmit} className='ui large form'>
							<div className='field'>
								<label htmlFor='collection-name'>Collection Name</label>
								<input
									onChange={this.handleInputChange}
									type='text'
									id='collection-name'
									placeholder='Enter a name for this collection...'
									name='name'
									value={this.state.newCollection.name}
									autoComplete='off'
								/>
							</div>
							<div className='field'>
								<label htmlFor='collection-description'>
									Collection Description
								</label>
								<input
									onChange={this.handleInputChange}
									type='text'
									id='collection-description'
									name='description'
									value={this.state.newCollection.description}
									autoComplete='off'
								/>
							</div>
							<input
								type='submit'
								value='Create Collection'
								className='ui button primary'
							/>
						</form>
					</div>
				</div>
			</div>
		)
	}
}
