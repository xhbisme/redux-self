// import React from 'react'
import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom'


class Bottom extends Component {
	render () {
		return (
			<div><br/><br/><br/><br/>
			Double-click to edit a todo.<br/>
			<br/><br/>
			Created by <br/>
			<a href="http://jgn.me/">Jerome Gravel-Niquet. </a><br/>
			Rewritten by: <a href="http://addyosmani.github.io/todomvc">TodoMVC.</a>
		</div>
		)
	}
}

module.exports=Bottom;
