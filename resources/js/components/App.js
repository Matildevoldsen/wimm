import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/Home/Home';
import Navbar from './Navbar';
import Footer from './Footer';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import NotFound from './errors/NotFound';
import "antd/dist/antd.css";
import { version, Button } from "antd";
import Contact from '../pages/Contact/Contact';

function App() {
    return (
        <Router>
            <Navbar />

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/contact" component={Contact}/>
                <Route component={NotFound}/>
            </Switch>

            <Footer />
        </Router>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
