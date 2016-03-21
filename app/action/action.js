import {ADD_TODO,
	DELETE_TODO,
	EDIT_TODO,
	COMPLETE_TODO,
	COMPLETE_ALL,
	CLEAR_COMPLETED,
	INPUT_TODO,
	BLUR_TODO} from '../ACType/acType'
//添加todo
export function addTodo(value){
	return {
		type:ADD_TODO,
		value
	}
}
//删除一条todo
export function deleteTodo(todoId){
	return {
		type:DELETE_TODO,
		todoId
	}
}
//进入编辑todo
export function editTodo(todoId,value,fn){
	return {
		type:EDIT_TODO,
		todoId,
		value
	}
}
//单选todo
export function completeTodo(todoId){
	return {
		type:COMPLETE_TODO,
		todoId
	}
}
//全选
export function completeAll(bool){
	return {
		type:COMPLETE_ALL,
		bool
	}
}
//删除全部已选
export function clearCompleted(){
	return {
		type:CLEAR_COMPLETED
	}
}
//编辑todo改变值
export function inputTodo(todoId,value){
	return{
		type:INPUT_TODO,
		todoId,
		value
	}
}
//blur todo改变edit
export function blurTodo(todoId){
	return{
		type:BLUR_TODO,
		todoId
	}
}
