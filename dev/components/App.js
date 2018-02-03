import React, {Component} from 'react';
import List from './list';

export default class App extends Component {
	render () {
		return(
			<div>
				<h1>ToDo</h1>
				<List />
			</div>
		);
	}
}