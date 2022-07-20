import React, { Component } from 'react'

export default class Home extends Component {
  state = {
    count: 1
  }
  test1 = () => {
    // 函数写法 适用于新状态依赖于原状态
    this.setState(state => ({
      count: state.count + 1
    }), ()=> {
        // 在状态更新且界面更新之后回调
        console.log('状态更新完毕，render之前调用')
    })
  }
    // 对象写法 适用于新状态不依赖于原状态
  test2 = () => {
    const count = this.state.count + 1
    this.setState({count})
  }
  render() {
    const count = this.state.count
    return (
      <div>
        <p>Count的值为：{count}</p>
        <button onClick={this.test1}>test1</button>
        <button onClick={this.test2}>test2</button>
      </div>
    )
  }
}
