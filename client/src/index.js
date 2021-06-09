import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './components/pages/App'
import Users from './components/pages/users'
import Contact from './components/pages/contact' 
import Navigation from "./components/nav"

const routing = (
  <Router>
  <Navigation />
      <Route exact path="/" component={App} />
      <Route path="/users" component={Users} />
      <Route path="/contact" component={Contact} />
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))