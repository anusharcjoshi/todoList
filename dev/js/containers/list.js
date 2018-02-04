import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class List extends Component{
	getList(){
		return this.props.todoList.map((list) => {
			return (
				<tr>
					<td>{list.task}</td>
					<td></td>
				</tr>
			);
		});
	}

	render() {
		return(
			<table>
				<thead>
					<tr>
						<th>Tasks</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{this.getList()}
				</tbody>
			</table>
		);
	}
}

const mapStateToProps = (state) => ({
	todoList: state.todos
});

export default connect(mapStateToProps)(List);