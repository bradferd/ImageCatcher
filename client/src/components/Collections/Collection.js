import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import PhotoSearch from '../ImageSearch/PhotoSearch'
import Pictures from '../Pictures/Pictures'

export default class Collection extends Component {
	state = {
		collection: {},
		redirectToCollections: false,
		showEditForm: false
	}

	async componentDidMount() {
		this.getAll()
	}

	getAll = async () => {
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

	handleToggleEditForm = () => {
		this.setState({ showEditForm: true })
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
		this.setState({ collection: res.data, showEditForm: false })
		this.getAll()
	}

	render() {
		if (this.state.redirectToCollections) {
			return <Redirect to='/collections' />
		}
		return (
			<div>
				{this.state.showEditForm ? (
					<div className='ui container'>
						<form onSubmit={this.handleSubmit} className='ui form'>
							<label htmlFor='collection-name'>Collection Name</label>
							<input
								onChange={this.handleInputChange}
								type='text'
								id='collection-name'
								placeholder='Enter a name for this collection...'
								name='name'
								value={this.state.collection.name}
							/>
							<label htmlFor='collection-description'>
								Collection Description
							</label>
							<input
								onChange={this.handleInputChange}
								type='text'
								id='collection-description'
								name='description'
								value={this.state.collection.description}
							/>
							<input
								type='submit'
								value='Create Collection'
								className='ui button'
							/>
						</form>
					</div>
				) : (
					<div>
						<div className='ui container masthead center aligned'>
							<h1>{this.state.collection.name}</h1>
							<p>{this.state.collection.description}</p>
							<button onClick={this.handleDeleteCollection}>
								Delete Collection
							</button>
							<button onClick={this.handleToggleEditForm}>
								Edit Collection
							</button>
						</div>
						<div className='ui segment'>
							<div className='ui two column very relaxed grid'>
								<div className='column'>
									<div className='ui container'>
										<PhotoSearch {...this.props} />
									</div>
								</div>
								<div className='column'>
									<div className='ui container'>
										<h3>{this.state.collection.name}</h3>
										<Pictures {...this.props} />
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		)
	}
}
