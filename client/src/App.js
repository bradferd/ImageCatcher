import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PhotoSearch from './components/ImageSearch/PhotoSearch.js'
import Navbar from './components/Navbar'
import Form from './components/Form/Form'
import Collections from './components/Collections/Collections'
import Collection from './components/Collections/Collection'

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/' />
					<Route path='/photos' component={PhotoSearch} />
					<Route exact path='/collections' component={Collections} />
					<Route path='/collections/new' component={Form} />
					<Route path='/collections/:collectionId' component={Collection} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
