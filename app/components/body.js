import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom'
import Item from './item.js'
import {DOUBLE_CLICK, CHANGE, BLUER,REMOVE,CHECK,FOUCUS_INPUT} from '../ACType/liAcType'

import {connect} from 'react-redux'
import * as actionCreators from '../action/action';
import { bindActionCreators } from 'redux';

import {
	deleteTodo,
	editTodo,
	completeTodo,
	completeAll,
	inputTodo,
	blurTodo} from '../action/action'

class Body extends Component {
	callBack(action,sid,value,fn){
		switch (action){
			//双击li改变edit状态
			case DOUBLE_CLICK:
				this.props.store.dispatch(editTodo(sid,value));
			break;
			//输入input标签
			case CHANGE:
				this.props.store.dispatch(inputTodo(sid,value));
			break;
			//input标签失去焦点
			case BLUER:
				this.props.store.dispatch(blurTodo(sid));
			break;
			//点击小删除
			case REMOVE:
				this.props.store.dispatch(deleteTodo(sid));
			break;
			//点击小选中
			case CHECK:
				this.props.store.dispatch(completeTodo(sid));
			break;
			default:
			break;
		}
	}
	checkAllClick(){
		this.props.store.dispatch(completeAll(this.refs.checkAll.checked));
	}
	render () {
		let selfMain = this;
		
		let todos = this.props.todos;
		let divDisplay = {display: todos.length?'block':'none'};
		//是否有没选的，是否取消全选
		let needCheck = !todos.some(todo => todo.completed===false);
		return (
			<div id='mainBody' style={divDisplay}>
				<input 
				ref='checkAll' 
				id='checkAll' 
				type='checkbox' 
				checked={needCheck}
				onChange={this.checkAllClick.bind(this)} />

				<span>Mark all as complete</span>

				<ul>
				{
					todos.map(function(child,index){
						return (<Item {...child} key={index} sid={index} callBack={selfMain.callBack.bind(selfMain)} ></Item>)
					})
				}
				</ul>
			</div>
		)
	}
}
//监听Redux store的变化---这个值将被赋值到body的props当中--并可以重新取名（默认为初始名）
function mapStateToProps(state) {
  return state.propTodos;
}

export default connect(mapStateToProps)(Body);