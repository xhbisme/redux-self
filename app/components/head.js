import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom'
import {addTodo} from '../action/action'

import {connect} from 'react-redux'
import * as actionCreators from '../action/action';
import { bindActionCreators } from 'redux';

class Head extends Component {
	keyDown(e){
		if(e.keyCode ==13 ){
			let val=e.target.value;
			if($.trim(val)) {
				this.props.store.dispatch(addTodo(val));
			}
			this.refs.inputTxt.value='';
		}
	}

	render () {
		return (
			<div>
				<h1>Todo</h1>
				<input ref='inputTxt' type='text' id='txt' placeholder="What needs to be done ?" onKeyDown={this.keyDown.bind(this)} />
			</div>
		)
	}
}

module.exports = connect()(Head);
