import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom'
import App from './components/pages/App'
import Projects from './components/pages/projects' 
import Repo from './components/pages/repo' 
import NotFound from './components/pages/notfound' 
import Navigation from "./components/nav"

const Routs = () => (
  <Router>
  <Navigation />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/projects" component={Projects} />
      <Route path="/repo/:repoName" component={Repo} />
      <Route path="/404" component={NotFound} />
      <Route path="*">
          <Redirect to="/404" />
      </Route>
    </Switch>
  </Router>
)

ReactDOM.render(<Routs />, document.getElementById('root'))
 