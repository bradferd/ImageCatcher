import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
	render() {
		return (
			<div
				className='ui inverted secondary pointing menu'
				style={{ marginBottom: '0' }}
			>
				<Link to='/' className='item'>
					ImageCatcher
				</Link>
				<div className='right menu'>
					<Link to='/collections/new' className='item'>
						New Collection
					</Link>
					<Link to='/collections' className='item'>
						All Collections
					</Link>
				</div>
			</div>
		)
	}
}
