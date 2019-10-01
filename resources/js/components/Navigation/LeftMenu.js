import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class LeftMenu extends Component {
  render() {
    return (
   <Menu mode={this.props.mode}>
       <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item key="services">
          <Link to="/services">Services</Link>
        </Menu.Item>

        <Menu.Item key="about">
          <Link to="/about">About Us</Link>
        </Menu.Item>

        <Menu.Item key="blog">
          <Link to="/about">Blog</Link>
        </Menu.Item>

        <Menu.Item key="contact">
          <Link to="/contact">Contact Us</Link>
        </Menu.Item>
      </Menu>
    );
  }
}
export default LeftMenu;
