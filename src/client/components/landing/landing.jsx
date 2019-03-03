import React from 'react';
import {NavLink} from 'react-router-dom';
// import '../../vendor/fontawesome-free/css/all.min.css';
// import '../../vendor/simple-line-icons/css/simple-line-icons.css';
// import '../../stylish-portfolio.min.css';
// import '../../vendor/jquery-easing/jquery.easing';
// import '../../js/stylish-portfolio';
// import bgimage from '../../img/bg-masthead.jpg';

class Landing extends React.Component {
  constructor() {
    super();
  }

  render() {
    // let bgimage = require('../../img/bg-masthead.jpg');
    return (
      <React.Fragment>
        <div
          class="masthead d-flex my-3"
          style={{
            // backgroundColor: '#F2BE36',
            backgroundImage:
              "url('https://res.cloudinary.com/cashcloudinary/image/upload/v1551319995/bg-masthead.jpg')",
            backgroundSize: 'cover',
            borderRadius: '5px',
            fontFamily: "'Source Sans Pro', sans-serif",
            height: '700px',
            backgroundPositionY: '-120px'
          }}
        >
          <div class="container text-center my-auto">
            <h1 class="mb-1 font-weight-bold display-2">Welcome to Settle Peace</h1>
            <h3 class="mb-5">
              <em className="font-weight-bold">A Free Quotation Application, developed by Cash.</em>
            </h3>
            <NavLink
              class="btn btn-xl js-scroll-trigger d-flex align-items-center justify-content-center m-auto"
              style={{
                backgroundColor: '#1E809F',
                color: 'white',
                width: '180px',
                height: '70px',
                fontSize: '18px'
              }}
              to="/new"
            >
              <span>Create Quote</span>
            </NavLink>
          </div>
          <div class="overlay" />
        </div>
        <div>
          <footer class="footer text-center p-3" style={{backgroundColor: '#F8F9FA'}}>
            <div class="container">
              <ul class="list-inline mb-3">
                <li class="list-inline-item">
                  <a class="social-link rounded-circle text-white mr-3" href="https://github.com/kingcashthefifth">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                      alt=""
                      width="30px"
                    />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link rounded-circle text-white mr-3" href="mailto:cash.tsk@gmail.com">
                    <img src="http://cdn.onlinewebfonts.com/svg/img_352556.png" alt="" width="30px" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link rounded-circle text-white" href="https://www.linkedin.com/in/cashtsk/">
                    <img src="http://cdn.onlinewebfonts.com/svg/img_408253.png" alt="" width="30px" />
                  </a>
                </li>
              </ul>
              <p class="text-muted small mb-0">Copyright &copy; 2019</p>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

export default Landing;
