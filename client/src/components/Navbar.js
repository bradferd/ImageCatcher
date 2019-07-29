import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
	state = {
		isSignedIn: false,
		email: null
	}
	signIn = googleUser => {
		const profile = googleUser.getBasicProfile()
		this.setState({ isSignedIn: true, email: profile.getEmail() })
	}

	signOut = async () => {
		const auth2 = await window.gapi.auth2.getAuthInstance()
		auth2.signOut()
		console.log('user signed out')
		this.setState({ isSignedIn: false })
	}

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
