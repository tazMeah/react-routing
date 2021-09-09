import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import PushButton from './components/PushButton';
import Contact from './components/Contact';

import './App.css';

function App() {
 
  return (
		<div className="App">
			<Router>
				<nav>
					<ul>
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/contact">Contact Us</Link>
						</li>
					</ul>
				</nav>
				<PushButton />
          <Switch>
            <Route path="/" exact>
              <h1>Home</h1>
            </Route>
            <Route path="/about" exact>
              <h1>About</h1>
            </Route>
            <Route path="/contact" exact>
              <h1>Contact Us</h1>
            </Route>
            <Route path="/contact/:name">
              <Contact/>
			  
            </Route>
        </Switch>
			</Router>
		</div>
	);
}

export default App;