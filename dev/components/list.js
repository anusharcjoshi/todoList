import React, {Component} from 'react';

export default class List extends Component {
	render () {
		return(
			<div>
				<table>
					<thead>
						<tr>
							<th>Tasks</th>
							<th>Actions</th>
						</tr>
					</thead>
				</table>
			</div>
		);
	}
}