import React, {Component} from 'react';
require('../../scss/style.scss');
import _ from 'lodash';
import Items from './items';

const List = () => (
	<table>
		<thead>
			<tr>
				<th>Tasks</th>
				<th>Actions</th>
			</tr>
		</thead>
	</table>
);

export default List;