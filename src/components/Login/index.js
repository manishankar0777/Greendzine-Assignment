import {Component} from 'react'
import Group from '../img/Group.png'
import './index.css'

class Login extends Component {
  state = {text: '', password: '', loggedIn: false}

  textChange = event => {
    this.setState({text: event.target.value})
  }

  passwordChange = event => {
    this.setState({password: event.target.value})
  }

  onSubmit12 = () => {
    const {text, password} = this.state
    const {history} = this.props
    console.log(this.props)
    if (text === 'mukkasamhith@gmail.com' && password === 'sam1234') {
      console.log('sam')
      history.replace('/home')
    } else {
      this.setState({loggedIn: true})
    }
  }

  render() {
    const {loggedIn} = this.state
    return (
      <div className="login-background">
        <img src={Group} alt="logo" />
        <p>We are Electric</p>
        <input
          type="text"
          placeholder="E-mail"
          className="input-text"
          onChange={this.textChange}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          className="input-text"
          onChange={this.passwordChange}
        />
        <br />
        <button type="button" className="login-btn" onClick={this.onSubmit12}>
          Login
        </button>
        <p>Forget Password?</p>
        {loggedIn && <p className="invalid">Invalid username or password</p>}
      </div>
    )
  }
}

export default Login
