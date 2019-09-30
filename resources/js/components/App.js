import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/Home/Home';
import Navbar from './Navigation/Navbar';
import Footer from './Footer';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import NotFound from './errors/NotFound';
import "antd/dist/antd.css";
import { version, Button } from "antd";
import Contact from '../pages/Contact/Contact';
import Services from '../pages/Services/Services';
import About from '../pages/About/About';

function App() {
    return (
        <Router>
            <Navbar title="Wimm Media"/>

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/services" component={Services}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
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
