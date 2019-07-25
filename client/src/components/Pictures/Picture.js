import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Picture extends Component {
	render() {
		return (
			<div className='column'>
				<Link
					to={`/collections/${this.props.collectionId}/pics/${this.props.id}`}
				>
					<img
						className='ui medium rounded bordered image'
						src={this.props.src}
						alt={this.props.description}
					/>
				</Link>
				<Link
					className='circular ui icon button'
					to={`/collections/${this.props.collectionId}/pics/${
						this.props.id
					}/delete`}
					style={{ marginTop: '2px', marginBottom: '2px' }}
				>
					<i className='trash alternate icon' />
				</Link>
			</div>
		)
	}
}
