import { createStore } from 'redux'
import {todoApp} from '../reducer/reducer'

export default function appStore(initState){
	return createStore(todoApp, initState);
}
