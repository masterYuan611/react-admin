import React, { Component } from 'react'
import logo from '../../assets/imgs/logo.png'
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import './index.less'

const { SubMenu } = Menu;

export default class LeftNav extends Component {
  render() {
    return (
      <div className='left-nav'>
        <div className='logo'>
          <img src={logo} alt="" />
          <h1>后台管理</h1>
        </div>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
        >
          <Menu.Item key="1">
            <Link to='/home'>
              <Icon type="pie-chart" />
              <span>首页</span>
            </Link>
            
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>商品</span>
              </span>
            }
          >
            <Menu.Item key="5">
                <Link to='/category'>
                  <Icon type="mail" />
                  <span>品类管理</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="6">
                <Link to='/product'>
                  <Icon type="mail" />
                  <span>商品管理</span>
                </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="7">
            <Link to='/user'>
              <Icon type="appstore" />
              <span>用户管理</span>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}
