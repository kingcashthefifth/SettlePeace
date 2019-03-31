import React from 'react';
import {hot} from 'react-hot-loader';

import Listquotes from './components/form/listquotes';
import Signup from './components/form/signup';
import Landing from './components/landing/landing';
import Login from './components/form/login';

import Quoteform from './components/form/quoteform';
import Updateform from './components/form/updateform';
import Navbar from './components/Navigation/navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import {CookiesProvider} from 'react-cookie';
// import {withCookies} from 'react-cookie';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      authen: false
    };
    this.changingAuth = this.changingAuth.bind(this);
  }

  componentDidMount() {
    fetch('/api/isloggedin')
      .then((result) => {
        return result.json();
      })
      .then((finalResult) => {
        if (finalResult.authen == false) {
          this.setState({
            authen: false
          });
        } else {
          this.setState({
            authen: true
          });
        }
      });
  }

  changingAuth() {
    if (this.state.authen) {
      this.setState({
        authen: false
      });
    } else {
      this.setState({
        authen: true
      });
    }
  }

  render() {
    return (
      // <CookiesProvider>
      <BrowserRouter>
        <div>
          <Navbar loggedin={this.state.authen} changingAuth={this.changingAuth} />
          <Switch>
            {/* <Route path="/" render={() => <Landing cookies={this.props.cookies} />} exact />
            <Route path="/signup" render={() => <Signup cookies={this.props.cookies} />} exact />
            <Route path="/new" render={() => <Quoteform cookies={this.props.cookies} />} exact />
            <Route path="/quote/:id" render={() => <Updateform cookies={this.props.cookies} />} exact />
            <Route path="/quotes" render={() => <Listquotes cookies={this.props.cookies} />} exact />
 */}
            <Route path="/" component={Landing} exact />
            {/* <Route path="/login" component={Login} exact /> */}
            <Route path="/login" render={() => <Login changingAuth={this.changingAuth} />} exact />

            {/* <Route path="/signup" component={Signup} exact /> */}
            <Route path="/signup" render={() => <Signup changingAuth={this.changingAuth} />} exact />

            {/* <Route path="/new" component={Quoteform} exact /> */}
            <Route path="/new" render={() => <Quoteform loggedin={this.state.authen} />} exact />

            <Route path="/quote/:id" component={Updateform} />
            <Route path="/quotes" component={Listquotes} />
          </Switch>
        </div>
      </BrowserRouter>
      // </CookiesProvider>
    );
  }
}

export default hot(module)(App);
// export default withCookies(App);
