// import React from 'react'
import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'
import * as actionCreators from './app/action/action';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux'
import './app/style/todo.css'
import Body from './app/components/body'
import Foot from './app/components/foot'
import Head from './app/components/head'
import Bottom from './app/components/bottom'
import Store from './app/store/store'

let stores = Store();
class App extends Component {

	render () {
		return (
			<div>
				<Head store={this.props.store}></Head>
				<Body store={this.props.store}></Body>
				<Foot store={this.props.store}></Foot>
			</div>
		)
	}
}

//stores.getState();

render(
	<App  store={stores}></App>, 
document.getElementById('content'))

render(
	<Bottom></Bottom>, 
document.getElementById('bottom'))

