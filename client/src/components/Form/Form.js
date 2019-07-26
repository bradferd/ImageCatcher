import React, { Component } from 'react'

export default class Form extends Component {
	componentDidMount() {
		console.log(this.props)
	}
	render() {
		return (
			<div className='ui container' style={{ marginTop: '30px' }}>
				<div className='ui middle aligned center aligned grid'>
					<div className='column'>
						<form onSubmit={this.props.handleSubmit} className='ui large form'>
							<div className='field'>
								<label htmlFor='collection-name'>Collection Name</label>
								<input
									onChange={this.props.handleInputChange}
									type='text'
									id='collection-name'
									placeholder='Enter a name for this collection...'
									name='name'
									value={this.props.name}
									autoComplete='off'
								/>
							</div>
							<div className='field'>
								<label htmlFor='collection-description'>
									Collection Description
								</label>
								<input
									onChange={this.props.handleInputChange}
									type='text'
									id='collection-description'
									name='description'
									value={this.props.description}
									autoComplete='off'
								/>
							</div>
							<input
								type='submit'
								value='Create Collection'
								className='ui button primary'
							/>
						</form>
					</div>
				</div>
			</div>
		)
	}
}
