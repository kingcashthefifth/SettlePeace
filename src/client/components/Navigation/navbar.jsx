import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {request} from 'http';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      logged: 111
    };
    this.logout = this.logout.bind(this);
    this.rerendernav = this.rerendernav.bind(this);
  }

  componentDidMount() {
    fetch('/api/isloggedin')
      .then((result) => {
        return result.json();
      })
      .then((finalResult) => {
        if (finalResult.authen == false) {
          this.setState({
            logged: 111
          });
        } else {
          this.setState({
            logged: 222
          });
        }
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.loggedin !== prevProps.loggedin) {
      this.rerendernav();
    }
  }

  rerendernav() {
    fetch('/api/isloggedin')
      .then((result) => {
        return result.json();
      })
      .then((finalResult) => {
        if (finalResult.authen == false) {
          this.setState({
            logged: 111
          });
        } else {
          this.setState({
            logged: 222
          });
        }
      });
  }

  logout() {
    fetch('/api/logout').then((result) => {
      this.props.changingAuth();
      console.log(this.props);
      this.props.history.push('/');
    });
  }

  render() {
    let navbarrender;
    if (this.state.logged == 111) {
      navbarrender = (
        <nav className="navbar navbar-light bg-light">
          <NavLink className="navbar-brand" to="/">
            <img
              src="https://res.cloudinary.com/cashcloudinary/image/upload/v1551108316/imageedit_6_8476813960.png"
              height="30"
              alt=""
              className="mr-2"
            />
            <span className="align-middle">Settle Peace</span>
          </NavLink>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <NavLink className="btn btn-outline-success mr-2" to="/signup">
                Sign up
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="btn btn-outline-success" to="/login">
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      );
    }
    if (this.state.logged == 222) {
      navbarrender = (
        <nav className="navbar navbar-light bg-light">
          <NavLink className="navbar-brand" to="/">
            <img
              src="https://res.cloudinary.com/cashcloudinary/image/upload/v1551108316/imageedit_6_8476813960.png"
              height="30"
              alt=""
              className="mr-2"
            />
            <span className="align-middle">Settle Peace</span>
          </NavLink>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <NavLink className="btn btn-outline-success mr-2" to="/quotes">
                View Quotes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="btn btn-outline-success mr-2" to="/new">
                New Quote
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="btn btn-outline-success" to="#" onClick={this.logout}>
                Logout
              </NavLink>
            </li>
          </ul>
        </nav>
      );
    }
    return (
      <React.Fragment>
        {/* <a className="menu-toggle rounded" href="#">
        <i className="fas fa-bars" />
      </a>
      <nav id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            <NavLink className="js-scroll-trigger" to="/">
              <img
                src="https://res.cloudinary.com/cashcloudinary/image/upload/v1551108316/imageedit_6_8476813960.png"
                height="30"
                alt=""
                className="mr-2"
              />
              <span style={{color: 'white'}}>Settle Peace</span>
            </NavLink>
          </li>
          <li className="sidebar-nav-item">
            <NavLink className="js-scroll-trigger" to="/quotes">
              View Quotes
            </NavLink>
          </li>
          <li className="sidebar-nav-item">
            <NavLink className="js-scroll-trigger" to="/new">
              New Quote
            </NavLink>
          </li>
        </ul>
      </nav> */}
        {navbarrender}
        {/* <nav className="navbar navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          <img
            src="https://res.cloudinary.com/cashcloudinary/image/upload/v1551108316/imageedit_6_8476813960.png"
            height="30"
            alt=""
            className="mr-2"
          />
          <span className="align-middle">Settle Peace</span>
        </NavLink>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <NavLink className="btn btn-outline-success mr-2" to="/quotes">
              View Quotes
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="btn btn-outline-success" to="/new">
              New Quote
            </NavLink>
          </li>
        </ul>
      </nav> */}
      </React.Fragment>
    );
  }
}

export default withRouter(Navbar);
