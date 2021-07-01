import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './components/pages/App'
import Projects from './components/pages/projects' 
import Repo from './components/pages/repo' 
import Navigation from "./components/nav"

const routing = (
  <Router>
  <Navigation />
      <Route exact path="/" component={App} />
      <Route path="/projects" component={Projects} />
      <Route path="/repo/:repoName" component={Repo} />
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))