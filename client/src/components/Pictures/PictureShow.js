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
			<img
				src={this.state.picture.imgSrc}
				alt={this.state.picture.description}
				className='ui fluid image'
			/>
		)
	}
	render() {
		return (
			<div>
				<Modal
					content={this.renderContent()}
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
