import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom'
import {DOUBLE_CLICK, CHANGE, BLUER,REMOVE,CHECK,FOUCUS_INPUT} from '../ACType/liAcType'
// var $=require('jquery');
class Item extends Component {
	doubleClick(e){
		this.props.callBack(DOUBLE_CLICK,this.props.sid,this.props.text);
	}
	change(e){
		this.props.callBack(CHANGE,this.props.sid,this.refs.inputTxt.value);
	}
	showDel(){
		this.refs.delA.style.display='inline-block';
	}
	hideDel(){
		this.refs.delA.style.display='none';
	}
	bluer(){
		this.props.callBack(BLUER,this.props.sid);
	}
	removeLi(){
		this.props.callBack(REMOVE,this.props.sid);
	}
	checkboxChange(){
		this.props.callBack(CHECK,this.props.sid);
	}
	//组件发生改变的时候进行判断和操作。---缺点：变换太多，调用太频繁
	componentDidUpdate(props,state){
		this.props.edit ? this.refs.inputTxt.focus():void(0);
	}
	//组件渲染之后调用，由于只是基于display:none来实现，所以该函数对聚焦来讲，没有意义
	/*componentDidMount(){
		this.props.edit ? this.refs.inputTxt.focus():void(0);
	}*/
	render () {
		var editDiplay = {display: this.props.edit?'block':'none'};
		var diplay = {display: this.props.edit?'none':'block'};
		return (
			<li ref='itemLi'>
				<div ref='itemDiv' 
				onDoubleClick={this.doubleClick.bind(this)}
				id='liItem'
				style={diplay}
				onMouseEnter={this.showDel.bind(this)}
				onMouseLeave={this.hideDel.bind(this)}>
					<input type="checkbox"
					onClick={this.checkboxChange.bind(this)}
					checked={this.props.completed}
					ref='checkbox'/>

					<label ref='liLabel' 
					className={this.props.completed}>
					{this.props.text}
					</label>

					<a ref='delA' onClick={this.removeLi.bind(this)}>x</a>
				</div>
					<input id='itemEdit' 
					ref='inputTxt'
					style={editDiplay}
					value={this.props.text}
					onChange={this.change.bind(this)}
					onBlur={this.bluer.bind(this)}
					type='text'/>
			</li>
		)
	}
}

module.exports = Item;