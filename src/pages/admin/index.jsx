import React, { Component } from 'react'
import { Switch,Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import LeftNav from '../../components/left-nav';
import PageHeader from '../../components/header';
import Home from '../home';
import Category from '../category';
import Product from '../product';
import User from '../user';
import './index.less'

const { Footer, Sider, Content } = Layout;

export default class Admin extends Component {
  render() {
    return (
     <Layout className='page'>
      <Sider><LeftNav/></Sider>
      <Layout>
        <PageHeader/>
        <Content>
            <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/category' component={Category}/>
                <Route path='/product' component={Product}/>
                <Route path='/user' component={User}/>
                <Redirect to='/home'/>
            </Switch>
        </Content>
        <Footer className='footer'>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
      </Layout>
    </Layout>
    )
  }
}
