import React, { Component } from 'react'

export default class SearchBar extends Component {
	state = {
		term: ''
	}

	onFormSubmit = e => {
		e.preventDefault()

		this.props.onSearchSubmit(this.state.term)
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<div>
						<label>Image Search</label>
						<input
							type='text'
							value={this.state.term}
							onChange={e => this.setState({ term: e.target.value })}
						/>
					</div>
				</form>
			</div>
		)
	}
}
