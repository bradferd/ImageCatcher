import React, { Component } from 'react'

export default class Landing extends Component {
	render() {
		return (
			<div className='pusher'>
				<div
					className='ui vertical inverted masthead center aligned segment'
					style={{ paddingTop: '125px', paddingBottom: '125px' }}
				>
					<div className='ui text container'>
						<h1 className='ui inverted header'>ImageSearch</h1>
						<h2>Changing the world with some pictures</h2>
						<div className='ui huge primary button'>
							Get Started
							<i className='right arrow icon' />
						</div>
					</div>
				</div>
				<div className='ui vertical stripe segment'>
					<div className='ui middle aligned stackable grid container'>
						<div className='row'>
							<div className='eight wide column'>
								<h3 className='ui header'>Who we are</h3>
								<p>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
									vero, porro soluta, error ipsa alias quod perferendis ipsam ea
									odit iure? Culpa labore esse ab quia, dolore enim, unde
									nesciunt suscipit consequatur perferendis soluta, sequi rerum
									ut eius voluptate amet provident reiciendis vel corrupti id
									illo consequuntur minus. Commodi, asperiores!
								</p>
							</div>

							<div className='six wide right floated column'>
								<img
									src='https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
									className='ui large rounded image'
									alt='placeholder'
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='ui vertical stripe segment'>
					<div className='ui middle aligned stackable grid container'>
						<div className='row'>
							<div className='six wide left floated column'>
								<img
									src='https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
									className='ui large rounded image'
									alt='placeholder'
								/>
							</div>
							<div className='eight wide column'>
								<h3 className='ui header'>What we do</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
									asperiores ea totam magnam voluptatum, placeat aliquam
									accusantium, debitis dolorum reiciendis laboriosam illum.
									Ipsum, nobis ut est quos distinctio commodi ullam unde
									deserunt nulla veritatis laudantium ipsa quod beatae. Qui
									pariatur quod minus eum eveniet quisquam. Error assumenda nemo
									quasi laboriosam!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
