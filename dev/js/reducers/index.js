import {combineReducers} from 'redux';
import ListReducer from './reducer-todo-list';

const allReducers = combineReducers({
	todos: ListReducer
});

export default allReducers;