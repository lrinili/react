import React from 'react'
import NavLink from './NavLink.js'
export default React.createClass({
	render() {
		console.log(this.props)
		return (<div>
		 <h2>Inbox</h2>
          <ul>
          <li><NavLink to="/message/1/lly">LLY</NavLink></li>
           <li><NavLink to="/message/2/yyl">yyl</NavLink></li>
          </ul>
		 {this.props.children}
		 </div>)
	}
})