import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Collections extends Component {
	state = {
		collections: []
	}

	componentDidMount() {
		this.getAllCollections()
	}

	getAllCollections = async () => {
		const res = await axios.get('/api/collections')
		this.setState({ collections: res.data })
	}

	render() {
		let collectionsList = this.state.collections.map(collection => {
			return (
				<div className='item' key={collection._id}>
					<i className='camera retro middle aligned icon' />
					<div className='content'>
						<Link className='header' to={`/collections/${collection._id}`}>
							{collection.name}
						</Link>
						<div className='description'>{collection.description}</div>
					</div>
				</div>
			)
		})
		return (
			<div className='ui container'>
				<div className='ui segment vertical masthead'>
					<h1>All Collections</h1>
					<h3>Browse Collections or make your own!</h3>
				</div>
				<div className='ui segment'>
					<div className='ui divided list'>{collectionsList}</div>
				</div>
			</div>
		)
	}
}
