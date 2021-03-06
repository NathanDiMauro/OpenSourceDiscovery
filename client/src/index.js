import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import App from './components/pages/App'
import Projects from './components/pages/projects' 
import Repo from './components/pages/repo' 
import NotFound from './components/pages/notfound' 
import Navigation from "./components/nav"

const Routes = () => (
  <Router>
  <Navigation />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/projects" component={Projects} />
      <Route path="/repo/:repoName" component={Repo} />
      <Route path="/404" component={NotFound} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
)

ReactDOM.render(<Routes />, document.getElementById('root'))
 