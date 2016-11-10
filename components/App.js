import React from 'react'
import {
	Link,
	IndexLink
} from 'react-router'
import NavLink from './NavLink.js'
export default React.createClass({
	render() {
		return (
			<div>
			<h3>app</h3>
             <ul>
               <li><IndexLink to='/' activeClassName="active">App</IndexLink></li>
               <li><NavLink to='/about'>about</NavLink></li>
               <li><NavLink to= '/inbox'>inbox</NavLink></li>
             </ul>
			{this.props.children}
			</div>
		)
	}
})