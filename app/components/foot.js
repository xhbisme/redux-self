import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom'

import {connect} from 'react-redux'
import * as actionCreators from '../action/action';
import { bindActionCreators } from 'redux';

import {clearCompleted} from '../action/action'
class Foot extends Component {
	clearAll(e){
		this.props.store.dispatch(clearCompleted());
	}
	render () {
		let todos = this.props.store.getState().propTodos.todos;
		var selfMain=this;
		var display = {display: todos.length?'block':'none'};
		var checkedNum=0;
		//this.delArr=[];//要删除的选中的li的index
		todos.map(function(child,index){
			if(child.completed){
				checkedNum+=1;
				//selfMain.delArr.push(index);
			}
		})
		return (
			<div id="foot" style={display}>
		 		<b>{todos.length-checkedNum} items left </b>
		 		<a id='footlabel' 
		 		onClick={this.clearAll.bind(this)}>
		 		Clear {checkedNum} completed item
		 		</a>
		 	</div>
		)
	}
}
//监听Redux store的变化
function mapStateToProps(state) {
  return { todos: state.propTodos };
}

export default connect(mapStateToProps)(Foot);