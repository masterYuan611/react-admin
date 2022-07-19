import React, { Component } from 'react'
import './index.less'

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className="header-top">
            <span>你好，Admin</span>
        </div>
        <div className="header-bottom">
            <div className='left'>首页</div>
            <div className='right'>晴</div>
        </div>
      </div>
    )
  }
}
