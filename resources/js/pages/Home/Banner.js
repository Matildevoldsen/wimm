import React, { Component } from "react";
import { Icon } from "antd";
import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";
import Texty from "rc-texty";
import "rc-texty/assets/index.css";

class Banner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            useWebp: "no-webp"
        };
    }

    componentDidMount() {
        var webPsupport = function() {
            var webP = new Image();
            webP.onload = WebP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src =
                "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        };

        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

        if (!webPsupport || isSafari || isIE11) {
            this.setState({ useWebp: "no-webp banner0" });
        } else {
            this.setState({ useWebp: "use-webp banner0" });
        }
    }
    render() {
        return (
            <div className={this.state.useWebp}>
                <QueueAnim key="QueueAnim" type={["bottom", "top"]} delay={320}>
                    <div className="banner0-content">
                        <Texty
                            className="title"
                            enter={this.getEnter}
                            leave={this.getEnter}
                        >
                            We build the web
                        </Texty>
                        <Texty
                            className="subtitle"
                            enter={this.getEnter}
                            leave={this.getEnter}
                        >
                            We build user-friendly websites that ranks
                            higher on Google. All of our client's websites is hosted using CloudFront and AWS to reach maximun performance.
                        </Texty>
                    </div>
                </QueueAnim>
                <TweenOne
                    animation={{
                        y: "-=20",
                        yoyo: true,
                        repeat: -1,
                        duration: 1000
                    }}
                    className="banner0-icon"
                    key="icon"
                >
                    <a href="#content0">
                        <Icon type="down" />
                    </a>
                </TweenOne>
            </div>
        );
    }
}

export default Banner;
