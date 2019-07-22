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
				<div key={collection._id}>
					<Link to={`/collections/${collection._id}`}>{collection.name}</Link>
				</div>
			)
		})
		return <div>{collectionsList}</div>
	}
}
