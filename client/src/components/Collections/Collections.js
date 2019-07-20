import React, { Component } from 'react'

export default class Collections extends Component {
	state = {
		collections: []
	}

	componentDIdMount() {
		getAll()
	}

	getAllCollections = async () => {
		const res = await axios.get('/api/collections')
		this.setState({ collections: res.data })
	}

	render() {
		let collectionsList = this.state.collections.map(collection => {
			return (
				<div>
					<Link key={collection._id} to={`/collections/${collection._id}`} />
				</div>
			)
		})
		return <div>{collectionsList}</div>
	}
}
