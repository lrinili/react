import React from 'react'
import ReactDOM from 'react-dom'
import {
  Router,
  Route,
  hashHistory,
  Link,
  Lifecycle,
  IndexLink
} from 'react-router'

const App = React.createClass({
  render() {
    return (<div>
           <h1>app</h1>  
             <ul>
                <li><IndexLink to="/" activeStyle={{color: 'red'}}>Index</IndexLink></li>
                <li><Link to="/about" activeStyle={{color: 'red'}}>About</Link></li>
                <li><Link to="/inbox" activeStyle={{color: 'red'}}>Inbox</Link></li>
            </ul>
           {this.props.children} 
           </div>)
  }
})

const About = React.createClass({

  render() {
    return (<div>
           About 
           </div>)
  }
})
const Inbox = React.createClass({
  render() {
    return (<div>
           Inbox 
           </div>)
  }
})
const Index = React.createClass({
  render() {
    return (<div>
           index 
           </div>)
  }
})
const routes = {
  path: '/',
  component: App,
  indexRoute: {
    component: Index
  },
  childRoutes: [{
    path: '/about',
    component: About
  }, {
    path: '/inbox',
    component: Inbox
  }]
}

const Ru = (
  <Router history={hashHistory} >
   <Route path="/" component={App}>
    <Route path="about" component={About}/>
    <Route path="inbox" component={Inbox}/>
   </Route>
</Router>
)


ReactDOM.render(
  Ru, document.getElementById('app'))