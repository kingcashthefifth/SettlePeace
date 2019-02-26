import React from 'react';

import PropTypes from 'prop-types';

import styles from './style.scss';
import main_styles from '../../style.scss';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      banana: 'sneakers',
      counters: [],
      searchResult: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // componentDidMount() {}

  handleClick() {
    fetch('/query')
      .then((results) => {
        console.log(results);
        return results.json();
      })
      .then((data) => {
        this.setState({searchResult: data});
        console.log(this.state.searchResult);
      });

    // let num = Math.random();
    // const newArray = [num, ...this.state.counters];
    // this.setState({counters: newArray});
    // var compoThis = this;
    // var responseHandler = function() {
    //   console.log('response text', this.responseText);
    //   console.log('status text', this.statusText);
    //   console.log('status code', this.status);
    //   const data = JSON.parse(this.responseText);
    //   console.log(compoThis);
    //   compoThis.setState({searchResult: data.searchResult});
    // };
    // // make a new request
    // var request = new XMLHttpRequest();
    // // listen for the request response
    // request.addEventListener('load', responseHandler);
    // // ready the system by calling open, and specifying the url
    // request.open('GET', 'http://api.walmartlabs.com/v1/search?apiKey=bsh6u8q5fdw95yrcy6wkvj75&query=iphone');
    // // send the request
    // request.send();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>click me</button>
        <p className={styles.desc}>
          {this.props.message} : {this.state.banana}
        </p>
        {this.state.counters.map((counter) => {
          return <p>{counter}</p>;
        })}
      </div>
    );
  }
}

Counter.propTypes = {
  message: PropTypes.string.isRequired
};

export default Counter;
