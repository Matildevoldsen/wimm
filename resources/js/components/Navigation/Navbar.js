import React, { Component } from "react";
import { Link } from 'react-router-dom';
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { Drawer, Button, Icon } from "antd";
import './index.css';

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            current: "mail",
            visible: false,
        };

        this.showDrawer = this.showDrawer.bind(this);
        this.onClose = this.onClose.bind(this)
    }

     showDrawer() {
        this.setState({
            visible: true
        });
    };
    onClose() {
        this.setState({
            visible: false
        });
    };
    render() {
        return (
            <nav className="menuBar">
                <div className="logo">
                    <Link to="/">Wimm Media</Link>
                </div>
                <div className="menuCon">
                    <div className="leftMenu">
                        <LeftMenu mode='horizontal' />
                    </div>
                    <div className="rightMenu">
                        <RightMenu mode='horizontal' />
                    </div>

                    <Button
                        className="hamburger"
                        type="default"
                        icon="menu"
                        onClick={this.showDrawer}
                    />

                    <Drawer
                        title="Navigation"
                        placement="right"
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                    >
                        <LeftMenu mode='vertical' />

                    </Drawer>
                </div>
            </nav>
        );
    }
}
export default Navbar;
