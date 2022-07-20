import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { menuList } from '../../config/menuConfig'
import './index.less'

class Header extends Component {

    getTitle = () => {
      let title
      const path = this.props.location.pathname
      menuList.forEach(item => {
        if (item.key === path) {
          title = item.title
        } else if (item.children) {
          const cItem = item.children.find(cItem => cItem.key === path)
          if (cItem) {
            title = cItem.title
          }
        }
      })
      return title
    }

  render() {
    const title = this.getTitle()
    return (
      <div className='header'>
        <div className="header-top">
            <span>你好，Admin</span>
        </div>
        <div className="header-bottom">
            <div className='left'>{title}</div>
            <div className='right'>
                <span>晴</span>
                <img src="http://api.map.baidu.com/images/weather/day/duoyun.png" alt='天气图片'/>
            </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
