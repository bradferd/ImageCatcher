import React from 'react'
import axios from 'axios'

class ImageCard extends React.Component {
	constructor(props) {
		super(props)

		this.state = { spans: 0 }

		this.imageRef = React.createRef()
	}

	componentDidMount() {
		this.imageRef.current.addEventListener('load', this.setSpans)
	}

	setSpans = () => {
		const height = this.imageRef.current.clientHeight

		const spans = Math.ceil(height / 10)

		this.setState({ spans })
	}

	addToCollection = async () => {
		await axios.post('/api/collections/:collectionId/pics', {
			description: this.props.image.alt_description,
			imgSrc: this.props.image.urls.regular,
			collectionId: this.props.match.params.collectionId
		})
		console.log(this.props)
		this.props.getAllPictureData()
	}

	render() {
		const { description, urls } = this.props.image

		return (
			<div style={{ gridRowEnd: `span ${this.state.spans}` }}>
				<img
					className='ui rounded image'
					style={{ marginBottom: '2px' }}
					ref={this.imageRef}
					alt={description}
					src={urls.regular}
				/>
				<button
					className='ui labeled icon button primary'
					onClick={this.addToCollection}
				>
					<i className='plus icon' />
					Add to Collection
				</button>
			</div>
		)
	}
}

export default ImageCard
