import React, { Component } from 'react'
import logo from '../../assets/imgs/logo.png'
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { menuList } from '../../config/menuConfig';
import './index.less'

const { SubMenu } = Menu;

export default class LeftNav extends Component {
  getMenu = (list) => {
    return list.map(item => {
      if (item.children) {
        return (<SubMenu
            key={item.key}
            title={
              <span>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </span>
            }
          >
            {item.children.map(subItem => {
              return (<Menu.Item key={subItem.key}>
                        <Link to={subItem.key}>
                          <Icon type={subItem.icon} />
                          <span>{subItem.title}</span>
                        </Link>
                      </Menu.Item>)
                })}
          </SubMenu>)
      } else {
        return (<Menu.Item key={item.key}>
                  <Link to={item.key}>
                    <Icon type={item.icon}/>
                    <span>{item.title}</span>
                  </Link>
                </Menu.Item>)
      }
    })

  }
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
          {this.getMenu(menuList)}
        </Menu>
      </div>
    )
  }
}
