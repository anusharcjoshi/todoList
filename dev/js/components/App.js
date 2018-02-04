import React, {Component} from 'react';
require('../../scss/style.scss');
import List from '../containers/list';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from '../reducers';

const store = createStore(allReducers);

export default class App extends Component {
	render () {
		return(
			<Provider store = {store}>
				<div>
					<h1>ToDo</h1>
					<List />
				</div>
			</Provider>
		);
	}
}