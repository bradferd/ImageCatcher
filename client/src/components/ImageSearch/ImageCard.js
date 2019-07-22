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

	addToCollection = () => {
		console.log(this.props)
		axios.post('/api/collections/:collectionId/pics', {
			description: this.props.image.alt_description,
			imgSrc: this.props.image.urls.normal,
			collectionId: this.props.match.params.collectionId
		})
	}

	render() {
		const { description, urls } = this.props.image

		return (
			<div style={{ gridRowEnd: `span ${this.state.spans}` }}>
				<img ref={this.imageRef} alt={description} src={urls.regular} />
				<button onClick={this.addToCollection}>Add to collection</button>
			</div>
		)
	}
}

export default ImageCard
