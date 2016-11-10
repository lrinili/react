import React, {
	Component
} from 'react';

export default React.createClass({

	render() {
		console.log(this.props)
		return (
			<ul>
                   <h3>{this.props.items.text}</h3>
                    {
					this.props.items.item.map(function(itemtext) {
							return <li > { itemtext } < /li>
              })                     	
                    }
 
                   </ul>
		)
	}


})