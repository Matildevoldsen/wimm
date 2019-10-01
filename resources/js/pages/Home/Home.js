import React, { Component } from "react";
import "./Home.css";
import { Icon } from 'antd';
import QueueAnim from "rc-queue-anim";
import TweenOne from 'rc-tween-one';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';

class Home extends Component {
    getEnter(e) {
        switch (e.index) {
          case 0:
            return {
              rotate: 90,
              opacity: 0,
              y: -60,
            };
          case 10:
          case 1:
            return {
              y: -60,
              x: -10,
              opacity: 0,
            };
          case 9:
          case 2:
            return {
              y: -60,
              x: 20,
              opacity: 0,
            };
          case 3:
            return {
              y: 60,
              opacity: 0,
            };
          case 8:
          case 4:
            return {
              x: 30,
              opacity: 0,
            };
          case 5:
            return {
              enter: [
                {
                  scale: 2,
                  opacity: 0,
                  type: 'set',
                },
                { scale: 1.2, opacity: 1, duration: 300 },
                { scale: 0.9, duration: 200 },
                { scale: 1.05, duration: 150 },
                { scale: 1, duration: 100 },
              ],
              leave: {
                opacity: 0, scale: 0,
              },
            };
          case 6:
            return {
              scale: 0.8,
              x: 30,
              y: -10,
              opacity: 0,
            };
          case 7:
            return {
              scale: 0.8,
              x: 30,
              y: 10,
              opacity: 0,
            };
          default:
            return {
              opacity: 0,
            };
        }
      }
    render() {
        return (
            <div className="banner0">
                <QueueAnim key="QueueAnim" type={["bottom", "top"]} delay={200}>
                    <div className="banner0-content">
                        <Texty className="title" enter={this.getEnter} leave={this.getEnter}>Wimm Media</Texty>
                        <Texty className="subtitle" enter={this.getEnter} leave={this.getEnter}>We help you build user-friendly websites that ranks higher on Google.</Texty>
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
                    <Icon type="down" />
                </TweenOne>
            </div>
        );
    }
}

export default Home;
