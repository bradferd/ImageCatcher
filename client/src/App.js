import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PhotoSearch from './components/ImageSearch/PhotoSearch.js'
import Navbar from './components/Navbar/Navbar'
import NewCollection from './components/Form/NewCollection'
import Collections from './components/Collections/Collections'
import Collection from './components/Collections/Collection'
import Home from './components/Home/Landing'
import PictureShow from './components/Pictures/PictureShow'
import CollectionDelete from './components/Collections/CollectionDelete'
import PictureDelete from './components/Pictures/DeletePicture'
import EditCollection from './components/Form/EditCollection'

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/photos' component={PhotoSearch} />
					<Route exact path='/collections' component={Collections} />
					<Route
						path='/collections/:collectionId/edit'
						component={EditCollection}
					/>
					<Route
						path='/collections/:collectionId/delete'
						component={CollectionDelete}
					/>
					<Route
						path='/collections/:collectionId/pics/:pictureId/delete'
						component={PictureDelete}
					/>
					<Route
						path='/collections/:collectionId/pics/:pictureId'
						component={PictureShow}
					/>
					<Route path='/collections/new' component={NewCollection} />
					<Route path='/collections/:collectionId' component={Collection} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
