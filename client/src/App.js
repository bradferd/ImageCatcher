import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PhotoSearch from './components/PhotoSearch.js'
import './App.css'

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route exact path='/' />
					<Route path='/photos' component={PhotoSearch} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
