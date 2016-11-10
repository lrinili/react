import React from 'react'
import ReactDOM from 'react-dom'
import {
  Router,
  Route,
  IndexRoute,
  hashHistory,
  Link
} from 'react-router'
import About from "./components/About.js"
import Inbox from "./components/Inbox.js"
import App from './components/App.js'
import Message from './components/message.js'

ReactDOM.render((<Router history={hashHistory}>
                     
                  <Route path="/" component={App}>
                  //   <IndexRoute component={App}/>
                    <Route path="/about" component={About} />
                    <Route path="/inbox" component={Inbox} >
                       <Route path="/message/:id/:name" component={Message}/>
                    </Route>
                  </Route>

                </Router>

), document.getElementById('app'))