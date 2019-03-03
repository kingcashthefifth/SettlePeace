import React from 'react';
import {NavLink} from 'react-router-dom';

class Navbar extends React.Component {
  constructor() {
    super();
  }

  render() {
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
              <NavLink className="btn btn-outline-success" to="/new">
                New Quote
              </NavLink>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
