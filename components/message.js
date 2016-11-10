import React from 'react';

export default React.createClass({
	render() {
		console.log(this.props)
		return <h3>{this.props.params.name}</h3>
	}

})