import React from "react";
import ReactDOM from "react-dom";
import Home from "../pages/Home/Home";
import Navbar from "./Navigation/Navbar";
import Footer from "./Footer";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import NotFound from "./errors/NotFound";
import "antd/dist/antd.css";
import Contact from "../pages/Contact/Contact";
import Services from "../pages/Services/Services";
import About from "../pages/About/About";
import CookieConsent from "react-cookie-consent";
import { connect } from "react-redux";
import Blog from "../pages/Blog/Blog";

function App() {
    return (
        <Router>
            <Navbar title="Wimm Media" />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/services" component={Services} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/blog" component={Blog} />

                <Route component={NotFound} />
            </Switch>

            <Footer />

            <CookieConsent
                location="bottom"
                buttonText="Let's eat those cookies!"
                cookieName="myAwesomeCookieName2"
                style={{ background: "rgba(0, 0, 0, 0.6)", color: '#fff' }}
                buttonStyle={{ background: '#fff',color: "#4e503b", fontSize: "15px", borderRadius: '3px' }}
                expires={365}
            >
                This website uses cookies to enhance the user experience. If you'd like to disable cookies please read this helpful <a href="https://www.aboutcookies.org.uk/managing-cookies">guide</a>.
            </CookieConsent>
        </Router>
    );
}

export default connect()(App);

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
