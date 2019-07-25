import React, { Component } from 'react'
import Modal from '../Modal'
import axios from 'axios'

export default class PictureShow extends Component {
	state = {
		picture: {}
	}

	async componentDidMount() {
		const res = await axios.get(
			`/api/collections/${this.props.match.params.collectionId}/pics/${
				this.props.match.params.pictureId
			}`
		)
		this.setState({ picture: res.data })
	}

	renderContent() {
		return (
			<div className='ui grid center aligned'>
				<img
					src={this.state.picture.imgSrc}
					alt={this.state.picture.description}
					style={{ width: '500px' }}
				/>
			</div>
		)
	}
	render() {
		return (
			<div>
				<Modal
					content={this.renderContent()}
					title={this.state.picture.description}
					onDismiss={() =>
						this.props.history.push(
							`/collections/${this.state.picture.collectionId}`
						)
					}
				/>
			</div>
		)
	}
}
