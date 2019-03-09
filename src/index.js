import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './Home'
import Student from './Students'
import Classes from './Classes'
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const routing = (
    <Router>
        <div> 
            <div> 
                    <ul>
                        <li>
                            <Link to="/">home</Link>
                        </li>
                        <li>
                            <Link to="/Student">Students</Link>
                        </li>
                        <li>
                            <Link to="/Classes">Classes</Link>
                        </li>
                    </ul>     
            </div>

            <div> 
                <Route exact path="/" component={Home} />
                <Route path="/Student" component={Student} />
                <Route path="/Classes" component={Classes} />
            </div>
            
        
        </div>
    </Router> 
)

ReactDOM.render(routing,document.getElementById('root'))