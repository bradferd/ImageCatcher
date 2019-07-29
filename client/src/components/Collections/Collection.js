import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import PhotoSearch from '../ImageSearch/PhotoSearch'
import Pictures from '../Pictures/Pictures'

export default class Collection extends Component {
	state = {
		collection: [],
		pictures: [],
		showSearchBar: false
	}

	componentDidMount() {
		this.getAllCollectionData()
		this.getAllPictureData()
	}

	getAllCollectionData = async () => {
		const res = await axios.get(
			`/api/collections/${this.props.match.params.collectionId}`
		)
		this.setState({ collection: res.data })
	}

	getAllPictureData = async () => {
		const res = await axios.get(
			`/api/collections/${this.props.match.params.collectionId}/pics`
		)
		this.setState({ pictures: res.data })
	}

	handleShowSearchBar = () => {
		this.setState(state => {
			return { showSearchBar: !state.showSearchBar }
		})
	}

	render() {
		return (
			<div>
				<div>
					<div
						id='collectionHeader'
						className='ui vertical inverted masthead center aligned segment'
						style={{ marginBottom: '0' }}
					>
						<h1>{this.state.collection.name}</h1>
						<p>{this.state.collection.description}</p>
						<Link
							to={`/collections/${this.state.collection._id}/delete`}
							className='mini ui button primary'
						>
							Delete Collection
						</Link>
						<Link
							to={`/collections/${this.state.collection._id}/edit`}
							className='mini ui button primary'
						>
							Edit Collection
						</Link>
						{this.state.showSearchBar ? (
							<button
								className='mini ui button primary'
								onClick={this.handleShowSearchBar}
							>
								Hide Search
							</button>
						) : (
							<button
								className='mini ui button primary'
								onClick={this.handleShowSearchBar}
							>
								Add pictures
							</button>
						)}
					</div>
					<div className='ui segment' style={{ marginTop: '0' }}>
						{this.state.showSearchBar ? (
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
									<div className='ui container center aligned'>
										<h3>My Pictures</h3>
										<Pictures
											getAllPictureData={this.getAllPictureData}
											pictures={this.state.pictures}
											{...this.props}
										/>
									</div>
								</div>
							</div>
						) : (
							<div className='column'>
								<div className='ui container center aligned'>
									<h3>My Pictures</h3>
									<Pictures
										getAllPictureData={this.getAllPictureData}
										pictures={this.state.pictures}
										{...this.props}
									/>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		)
	}
}
