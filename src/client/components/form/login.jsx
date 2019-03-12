import React from 'react';
const queryString = require('query-string');
import styles from './style.scss';
import axios from 'axios';
import {NavLink, withRouter} from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      username_error: '',
      password_error: ''
    };
    this.submitChecker = this.submitChecker.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  submitChecker(e) {
    e.preventDefault();
    let data = {
      username: this.state.username,
      password: this.state.password
    };
    console.log('submitChecker fired!');
    console.log('my data: ', data);

    fetch('/api/logincheck', {
      method: 'post',
      body: queryString.stringify(data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json'
      }
    })
      .then((result) => {
        return result.json();
      })
      .then((finalResult) => {
        console.log('finalResult: ', finalResult);

        if (finalResult.check) {
          this.props.changingAuth();
          this.props.history.push('/quotes');
        } else {
          document.querySelector('.username_error').style.color = 'red';
          this.setState({username_error: 'Your username and/or password is incorrect. Please try again.'});
        }
      });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="ml-5 p-3">Login</h1>
        <br />
        <div className="m-auto" style={{width: '95%'}}>
          {/* <form action="/" method="post"> */}
          <div className="form-group">
            <label htmlFor="usernameInput">Username</label>
            <input
              name="username"
              className="form-control"
              onChange={this.handleChange}
              id="usernameInput"
              aria-describedby="usernameHelp"
              placeholder="Choose a username"
            />
            {/* <small id="usernameHelp2" className="form-text username_error">
              {this.state.username_error}
            </small> */}
          </div>
          <div className="form-group">
            <label htmlFor="passwordInput">Password</label>
            <input
              name="password"
              className="form-control"
              onChange={this.handleChange}
              id="passwordInput"
              aria-describedby="passwordHelp"
              placeholder="Choose a password"
            />
            <small id="passwordHelp2" className="form-text password_error">
              {this.state.password_error}
            </small>
          </div>
          <button onClick={this.submitChecker} className="btn btn-primary">
            Login
          </button>
          <small id="usernameHelp2" className="form-text username_error">
            {this.state.username_error}
          </small>

          {/* </form> */}
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Login);
