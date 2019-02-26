import React from 'react';
import {hot} from 'react-hot-loader';

import Counter from './components/counter/counter';
import Form from './components/form/form';
import Listquotes from './components/form/listquotes';

import Quoteform from './components/form/quoteform';
import Test from './components/form/test';
import Navbar from './components/Navigation/navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello'
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route path="/new" component={Quoteform} />
            <Route path="/quotes" component={Listquotes} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);
