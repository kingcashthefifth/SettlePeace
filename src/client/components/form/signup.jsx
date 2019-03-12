import React from 'react';
const queryString = require('query-string');
import styles from './style.scss';
import axios from 'axios';
import {NavLink, withRouter} from 'react-router-dom';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      username_error: '',
      email_error: '',
      password_error: '',
      passwordOK: false
    };
    this.submitChecker = this.submitChecker.bind(this);
    this.passwordChecker = this.passwordChecker.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  submitChecker(e) {
    e.preventDefault();
    $('#exampleModal').modal('hide');
    let data = {
      username: this.state.username,
      email: this.state.email
    };
    console.log('submitChecker fired!');
    if (this.state.passwordOK) {
      fetch('/api/signupcheck', {
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

          if (finalResult.username && finalResult.email) {
            console.log('username and email good to use!');
            let goodData = {
              username: this.state.username,
              firstname: this.state.firstname,
              lastname: this.state.lastname,
              password: this.state.password,
              email: this.state.email
            };
            fetch('/api/createuser', {
              method: 'post',
              body: queryString.stringify(goodData),
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Accept: 'application/json'
              }
            }).then((finalResult) => {
              this.props.history.push('/');
            });
          } else {
            if (!finalResult.username) {
              document.querySelector('.username_error').style.color = 'red';
              this.setState({username_error: 'This username have already been taken. Please choose another username.'});
            }
            if (!finalResult.email) {
              document.querySelector('.email_error').style.color = 'red';
              this.setState({email_error: 'This email have already been used. Please use another email.'});
            }
          }
        });
    }
  }

  passwordChecker(word) {
    let testnum = /(?=.*\d)(?=.*\D)/;
    let pwMessage = '';
    if (word.length >= 8) {
      if (testnum.test(word)) {
        document.querySelector('.password_error').style.color = 'green';
        pwMessage = 'Your password is good to go!';
        this.setState({
          password_error: pwMessage,
          passwordOK: true
        });
      } else {
        document.querySelector('.password_error').style.color = 'red';
        pwMessage = 'Your password is not alphanumeric.';
        this.setState({
          password_error: pwMessage,
          passwordOK: false
        });
      }
    } else {
      document.querySelector('.password_error').style.color = 'red';
      pwMessage = 'Your password is less than 8 characters.';
      this.setState({
        password_error: pwMessage,
        passwordOK: false
      });
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    if (e.target.name == 'password') {
      this.passwordChecker(e.target.value);
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="ml-5 p-3">Create a new account</h1>
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
            <small id="usernameHelp" className="form-text text-muted">
              Your username must consist of at least 4 alphabet letters.
            </small>
            <small id="usernameHelp2" className="form-text username_error">
              {this.state.username_error}
            </small>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col">
                <input
                  name="firstname"
                  type="text"
                  className="form-control"
                  onChange={this.handleChange}
                  placeholder="Input your first name"
                />
              </div>
              <div className="col">
                <input
                  name="lastname"
                  type="text"
                  className="form-control"
                  onChange={this.handleChange}
                  placeholder="Input your last name"
                />
              </div>
            </div>
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
            <small id="passwordHelp" className="form-text text-muted">
              Your password must contain at least 8 alphanumeric letters.
            </small>
            <small id="passwordHelp2" className="form-text password_error">
              {this.state.password_error}
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="instrucTextArea">Email address</label>
            <input
              name="email"
              className="form-control"
              onChange={this.handleChange}
              id="instrucTextArea"
              placeholder="Input your email address"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text email_error">
              {this.state.email_error}
            </small>
          </div>
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Submit
          </button>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Confirmation
                  </h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">Do you wish to proceed and create this account?</div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">
                    Back
                  </button>
                  <button onClick={this.submitChecker} className="btn btn-primary">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* </form> */}
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Signup);
