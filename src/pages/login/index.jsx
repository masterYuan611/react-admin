import React, { Component } from 'react'
import './login.less'
import logo from '../../assets/imgs/logo.png'
import { Form, Icon, Input, Button } from 'antd';


class Login extends Component {
  handleSubmit = e => {
    e.preventDefault() // 阻止事件冒泡、阻止事件默认行为
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('验证通过了');
      }
    });
  }

  validatorPassword = (rule, value, callback) => {
    if (!value) {
        callback('密码必须输入')
    } else if (value.length < 5) {
        callback('密码长度必须大于5')
    } else if (value.length > 12) {
        callback('密码长度不能大于12')
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
        callback('密码必须由英文、数字或下划线组成')
    } else {
        callback()
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className='login'>
        <header className='login-header'>
            <img src={logo} alt="logo" />
            <h1>后台管理系统</h1>
        </header>
        <section className='login-content'>
            <h2>用户登录</h2>
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                {getFieldDecorator('username', {
                    rules: [
                        { required: true, whitespace:true, message: '请输入用户名' },
                        { min: 5, message:'用户名最少5位'},
                        { max:12, message: '用户名最多12位'},
                        { pattern: /^[a-zA-Z0-9_]+$/ ,message: '用户名必须是英文、数字或下划线组成' }],
                    })(
                    <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="用户名"
                    />
                )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('password', {
                rules: [{ validator: this.validatorPassword }],
                })(
                    <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="密码"
                    />
                )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                      登录
                    </Button>
                </Form.Item>
            </Form>
        </section>
      </div>
    )
  }
}

const WrapLogin = Form.create()(Login)
export default WrapLogin
