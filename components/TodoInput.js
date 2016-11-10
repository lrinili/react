import React, {
	Component
} from 'react'
import TodoItem from './TOdoList.js'

export default class ToInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			item: []
		}

	}
	subItem(e) {
		e.preventDefault();
		var nextItems = this.state.item.concat([this.state.text]);
		this.state.item.push(this.state.text)
		this.setState({
			text: '',
			item: nextItems
		})
		console.log('sub', this.state)
	}

	setVal(e) {
		this.setState({
			text: e.target.value
		})
	}
	render() {
		return (
			<div>
            <h3>测试React</h3>
	
            <form name="Todolist" onSubmit={this.subItem.bind(this)}>
               <input type='text'  name='toInput' onChange={this.setVal.bind(this)} value={this.state.text}/>
               <button > {this.state.item.length+1}</button>
            </form>
            	<TodoItem items={this.state} />
           </div>

		)
	}
}