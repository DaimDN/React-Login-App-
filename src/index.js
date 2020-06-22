import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './pages/Register';
import Blog from './pages/post';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link

} from 'react-router-dom';

function App(){
  return (
    <Router>
        <nav class="navbar navbar-expand-lg navbar-dark " style={{backgroundColor: '#ab003c'}}>
      <a class="navbar-brand" href="/">React App</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/blog" className="nav-link "> Blogs </Link>
          </li>
          <li class="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li class="nav-item">
            <Link to="/account" className="nav-link "> Account </Link>
          </li>
          
        </ul>
      </div>
    </nav>
     <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/account">
            <Dashboard />
          </Route>
          <Route path="/blog">
          <Blog />
          </Route>
          <Route path="/register">
            <Register-/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


// You can think of these components as "pages"
// in your app.





ReactDOM.render(
  <App />,
  document.getElementById('root')
);