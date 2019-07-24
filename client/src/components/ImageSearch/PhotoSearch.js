import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ImageList from './ImageList'
import Axios from 'axios'

export default class PhotoSearch extends Component {
	state = { images: [] }

	onSearchSubmit = async term => {
		const response = await Axios.get('/api/search', { params: { query: term } })
		this.setState({ images: response.data.results })
	}

	render() {
		return (
			<div className='ui container' style={{ marginTop: '10px' }}>
				<SearchBar onSearchSubmit={this.onSearchSubmit} />
				<ImageList
					{...this.props}
					getAllPictureData={this.props.getAllPictureData}
					images={this.state.images}
				/>
			</div>
		)
	}
}
