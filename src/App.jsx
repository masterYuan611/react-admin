import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from "./pages/login";
import Admin from "./pages/admin";

// 应用根组件
export default class App extends Component {
    render() {
        return (
          <BrowserRouter>
            <Switch> {/** 只匹配其中一个 */}
              <Route path='/login' component={Login}></Route>
              <Route path='/' component={Admin}></Route>
            </Switch>
          </BrowserRouter>
        )
    }
}