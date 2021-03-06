import React, { Component } from 'react'
import logo from '../../assets/imgs/logo.png'
import { Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { menuList } from '../../config/menuConfig';
import './index.less'

const { SubMenu } = Menu;

class LeftNav extends Component {
  getMenu = (list) => {
    const path = this.props.location.pathname
    return list.map(item => {
      if (item.children) {
        const cItem = item.children.find(cItem => cItem.key === path)
        if (cItem) this.openKey = item.key
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
  /**
   * 在第一次render之前 执行一次
   * 为第一次render准备数据（必须同步的）
   */

  componentWillMount() {
    this.menuNodes = this.getMenu(menuList)
  }

  render() {
    const path = this.props.location.pathname
    const openKey = this.openKey
    return (
      <div className='left-nav'>
        <div className='logo'>
          <img src={logo} alt="" />
          <h1>后台管理</h1>
        </div>
        <Menu
          selectedKeys={[path]}
          defaultOpenKeys={[openKey]}
          mode="inline"
          theme="dark"
        >
          {this.menuNodes}
        </Menu>
      </div>
    )
  }
}

/**
 * withRouter高阶组件
 * 包装非路由组件，返回一个新的组件
 * 新的组价向非路由组件传递3个属性：history/location/match
 * **/

export default withRouter(LeftNav)
