import React, { Component } from 'react'

export default class Home extends Component {
  state = {
    count: 1
  }
  test1 = () => {
    // 函数写法 适用于新状态依赖于原状态
    console.log('count的值', this.state.count)
    this.setState(state => ({
      count: state.count + 1
    }), ()=> {
        // 在状态更新且界面更新之后回调
        console.log('状态更新完毕，render之前调用', this.state.count)
    })
    console.log('count的值1', this.state.count)
  }
    // 对象写法 适用于新状态不依赖于原状态
  test2 = () => {
    const count = this.state.count + 1
    this.setState({count})
  }

  test3 = () =>{
    setTimeout(()=>{
        console.log('setState之前的值', this.state.count)
    this.setState(state => ({
      count: state.count + 1
    }), ()=> {
        // 在状态更新且界面更新之后回调
        console.log('状态更新完毕，render之前调用')
    })
    console.log('setState之后的值', this.state.count)
    },200)
  }

  test4 = () => {
    let p = this.refs.count
    debugger
    p.onclick = () => {
        console.log('count的值', this.state.count)
    this.setState(state => ({
      count: state.count + 1
    }), ()=> {
        // 在状态更新且界面更新之后回调
        console.log('状态更新完毕，render之前调用', this.state.count)
    })
    console.log('count的值1', this.state.count)
    }
  }

  test5 = () => {
    Promise.resolve().then(()=> {
        console.log('count的值', this.state.count)
        this.setState(state => ({
        count: state.count + 1
        }), ()=> {
            // 在状态更新且界面更新之后回调
            console.log('状态更新完毕，render之前调用', this.state.count)
        })
        console.log('count的值1', this.state.count)
    })
  }

  test6 = () => {
    console.log('更新之前count的值', this.state.count)
    this.setState({count: this.state.count + 1})
    console.log('更新之后count的值', this.state.count)
    console.log('更新之前count的值1', this.state.count)
    this.setState({count: this.state.count + 1})
    console.log('更新之后count的值1', this.state.count)
  }

  test7 = () => {
    console.log('更新之前count的值', this.state.count)
    this.setState({count: this.state.count + 1})
    this.setState({count: this.state.count + 1})
    console.log('更新之后count的值', this.state.count)
    console.log('更新之前count的值1', this.state.count)
    this.setState(state => ({
        count: state.count + 1
    }))
    console.log('更新之后count的值1', this.state.count)
  }

  test8 = () => {
    this.setState({})
  }

  render() {
    console.log('当前组件重新render')
    const count = this.state.count
    return (
      <div>
        <p ref='count'>Count的值为：{count}</p>
        <button onClick={this.test1}>test1</button>
        <button onClick={this.test2}>test2</button>
        <button onClick={this.test3}>定时器回调</button>
        <button onClick={this.test4}>原生事件回调</button>
        <button onClick={this.test5}>Promise回调</button>
        <button onClick={this.test6}>setState对象模式</button>
        <button onClick={this.test7}>setState函数模式</button>
        <button onClick={this.test8}>setState不更细状态</button>
      </div>
    )
  }
}
