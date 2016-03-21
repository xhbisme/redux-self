import {ADD_TODO,
	DELETE_TODO,
	EDIT_TODO,
	COMPLETE_TODO,
	COMPLETE_ALL,
	CLEAR_COMPLETED,
	INPUT_TODO,
	BLUR_TODO} from '../ACType/acType'

const initialState = {
    todos: []
}
/*鉴于state*/
function propTodos(state = initialState, action){
	switch (action.type){
		//添加li
		case ADD_TODO:
			return Object.assign({}, state,{
 				todos:[...state.todos,{
					completed: false,
          			text: action.value,
          			edit:false
				}
			]
			})
		//双击进入编辑状态----截取前后不变，中间改变edit
		case EDIT_TODO:
			return Object.assign({},state,{
				todos:[
					...state.todos.slice(0,action.todoId),
					Object.assign({}, state.todos[action.todoId], {
						edit: true
					}),
					...state.todos.slice(action.todoId+1)
				]
			});
		//选一个todo----截取前后不变，中间改变completed
		case COMPLETE_TODO:
			return Object.assign({},state,{
				todos:[
					...state.todos.slice(0,action.todoId),
					Object.assign({}, state.todos[action.todoId], {
						completed: !state.todos[action.todoId].completed
					}),
					...state.todos.slice(action.todoId+1)
				]
			});
		//删除li-----由于state的制度性，这里给todos赋值只能采取手动slice截取
		case DELETE_TODO:
			return Object.assign({},state,{
				todos: [
					...state.todos.slice(0,action.todoId),
					...state.todos.slice(action.todoId+1)
				]
			});
		//全选todo
		case COMPLETE_ALL:
			let temTodos = [];
			state.todos.map((todo,index)=>{
				todo.completed=action.bool;
				temTodos.push(todo);
			})
			return Object.assign({},state,{
				todos: temTodos
			});
		//全删todo
		case CLEAR_COMPLETED:
			return Object.assign({},state,{
				todos: state.todos.filter(todo => todo.completed===false)
			});
		//编辑todo改变值---截取前后不变，中间改变text
		case INPUT_TODO:
			return Object.assign({},state,{
				todos:[
					...state.todos.slice(0,action.todoId),
					Object.assign({}, state.todos[action.todoId], {
						text: action.value
					}),
					...state.todos.slice(action.todoId+1)
				]
			});
		//blur todo改变edit
		case BLUR_TODO:
			return Object.assign({},state,{
				todos:[
					...state.todos.slice(0,action.todoId),
					Object.assign({}, state.todos[action.todoId], {
						edit: false
					}),
					...state.todos.slice(action.todoId+1)
				]
			});
		default :
			return state;
	}
}

module.exports = propTodos;