import React, { Component } from 'react'
import Picture from './Picture'
import Axios from 'axios'

export default class Pictures extends Component {
	state = {
		pictures: []
	}
	componentDidMount() {
		this.getAll()
	}
	getAll = async () => {
		const res = await Axios.get(
			`/api/collections/${this.props.match.params.collectionId}/pics`
		)
		console.log(res)
		this.setState({ pictures: res.data })
	}
	render() {
		let pictures = this.state.pictures.map(pic => {
			return (
				<Picture
					description={pic.description}
					src={pic.imgSrc}
					collectionId={pic.collectionId}
					getAll={this.getAll}
					id={pic._id}
					key={pic._id}
				/>
			)
		})
		return <div className='ui three stackable cards'>{pictures}</div>
	}
}
