import React, { Component } from 'react'

export default class SearchBar extends Component {
	state = {
		term: ''
	}

	onFormSubmit = e => {
		e.preventDefault()

		this.props.onSearchSubmit(this.state.term)
		this.setState({ term: '' })
	}

	render() {
		return (
			<div
				className='ui center aligned category search'
				style={{ marginBottom: '5px' }}
			>
				<form onSubmit={this.onFormSubmit} className='ui icon input'>
					<i className='search icon' />
					<input
						className='prompt'
						placeholder='search photos...'
						type='text'
						value={this.state.term}
						onChange={e => this.setState({ term: e.target.value })}
					/>
				</form>
			</div>
		)
	}
}
