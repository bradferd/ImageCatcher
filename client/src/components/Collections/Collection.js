import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import PhotoSearch from '../ImageSearch/PhotoSearch'
import Pictures from '../Pictures/Pictures'

export default class Collection extends Component {
	state = {
		collection: [],
		pictures: [],
		redirectToCollections: false,
		showEditForm: false
	}

	componentDidMount() {
		this.getAllCollectionData()
		this.getAllPictureData()
	}

	getAllCollectionData = async () => {
		console.log('getAll-Collection called')
		const res = await axios.get(
			`/api/collections/${this.props.match.params.collectionId}`
		)
		console.log(res)
		this.setState({ collection: res.data })
	}

	getAllPictureData = async () => {
		const res = await axios.get(
			`/api/collections/${this.props.match.params.collectionId}/pics`
		)
		this.setState({ pictures: res.data })
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
						<div
							id='collectionHeader'
							className='ui vertical inverted masthead center aligned segment'
							style={{ marginBottom: '0' }}
						>
							<h1>{this.state.collection.name}</h1>
							<p>{this.state.collection.description}</p>
							<button
								className='mini ui button primary'
								onClick={this.handleDeleteCollection}
							>
								Delete Collection
							</button>
							<button
								className='mini ui button primary'
								onClick={this.handleToggleEditForm}
							>
								Edit Collection
							</button>
						</div>
						<div className='ui segment' style={{ marginTop: '0' }}>
							<div className='ui two column very relaxed grid'>
								<div className='column'>
									<div className='ui container center aligned'>
										<PhotoSearch
											getAllPictureData={this.getAllPictureData}
											{...this.props}
										/>
									</div>
								</div>
								<div className='column'>
									<div className='ui container'>
										<h3>My Pictures</h3>
										<Pictures
											getAllPictureData={this.getAllPictureData}
											pictures={this.state.pictures}
											{...this.props}
										/>
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
